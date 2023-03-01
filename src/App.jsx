import React, { useEffect, useState } from "react";
import Nav from './components/Nav';
import Counter from './components/Counter';
import List from './components/List';
import { db } from './firebase';
import { doc, getDoc, getDocs, setDoc, updateDoc, collection } from 'firebase/firestore';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";


function App() {
  const [wPoints, setWPoints] = useState();
  const [lPoints, setLPoints] = useState();
  const [habitName, setHabitName] = useState('');
  const [isHabitOpen, setIsHabitOpen] = useState(false);
  const [habits, setHabits] = useState([]);
  const [signedInUser, setSignedInUser] = useState(undefined);

  const handleNewPoint = (pointType) => {
    if (pointType === 'Won') {
      for (let i = 0; i < habits.length; i++) {
        if (habits[i].name === habitName) {
          habits[i].wPoints = wPoints + 1;
          setWPoints(habits[i].wPoints);
        }
      }
    } else if (pointType === 'Lost') {
      for (let i = 0; i < habits.length; i++) {
        if (habits[i].name === habitName) {
          habits[i].lPoints = lPoints + 1;
          setLPoints(habits[i].lPoints);
        }
      }
    }
  }

  const handleCardClick = (habitObject) => {
    habits.forEach((habit) => {
      if (habit.name === habitObject.name) {
        setHabitName(habitObject.name);
        setWPoints(habitObject.wPoints);
        setLPoints(habitObject.lPoints);
        setIsHabitOpen(!isHabitOpen);
      }
    });
  }

  const handleAddNewHabit = () => {
    const newHabits = [...habits];
    newHabits.push({
      name: 'Gambling',
      wPoints: 0,
      lPoints: 0,
      status: 'open'
    })
    const docRef = doc(db, 'users', signedInUser.uid);
    updateDoc(docRef, { habits: newHabits });
  }

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const uid = user.uid;
        const docRef = doc(db, 'users', uid);
        getDoc(docRef)
          .then((docSnap) => {
            if (docSnap.exists()) {
              //do nothing
            } else {
              setDoc(docRef, { userName: user.displayName, habits: [] });
            }
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        //signed out
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedInUser(user);
        const docRef = doc(db, 'users', user.uid);
        getDoc(docRef)
          .then((docSnap) => {
            const data = docSnap.data();
            setHabits(data.habits);
          })
      } else {
        setSignedInUser(null);
      }
    })
  }, [habits]);

  if (signedInUser === undefined) {
    return (
      <></>
    );
  } else if (signedInUser === null) {
    return (
      <div style={{ height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={handleSignIn}>Sign in with Google</button>
      </div>
    );
  } else {
    return (
      <div className='app'>
        <Nav
          isHabitOpen={isHabitOpen}
          onClose={() => setIsHabitOpen(!isHabitOpen)}
          onAdd={handleAddNewHabit}
          onSignout={handleSignout}
        />
        {isHabitOpen ?
          <div className='main-container'>
            <div>
              <p className='text-highlight'>Habit</p>
              <p className='text-habit big'>{habitName}</p>
            </div>
            <div className='counters-container'>
              <Counter
                type='Won'
                points={wPoints}
                onNewPoint={handleNewPoint}
              />
              <div className='divider'></div>
              <Counter
                type='Lost'
                points={lPoints}
                onNewPoint={handleNewPoint}
              />
            </div>
          </div>
          :
          <List habits={habits} onCardClick={handleCardClick} />
        }
      </div>
    );
  }
}

export default App;

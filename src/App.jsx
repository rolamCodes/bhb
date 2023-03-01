import React, { useEffect, useState } from "react";
import Nav from './components/Nav';
import HabitInput from "./components/HabitInput";
import Counter from './components/Counter';
import List from './components/List';
import { db } from './firebase';
import { doc, getDoc, getDocs, setDoc, updateDoc, collection } from 'firebase/firestore';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import SignInScreen from "./components/SignInScreen";


function App() {
  const [wPoints, setWPoints] = useState();
  const [lPoints, setLPoints] = useState();
  const [habitName, setHabitName] = useState('');
  const [status, setStatus] = useState('open');
  const [isHabitOpen, setIsHabitOpen] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [habits, setHabits] = useState([]);
  const [signedInUser, setSignedInUser] = useState(undefined);

  const handleNewPoint = (pointType) => {
    if (pointType === 'won') {
      for (let i = 0; i < habits.length; i++) {
        if (habits[i].name === habitName) {
          if (habits[i].wPoints < 100) {
            const newHabits = [...habits];
            newHabits[i].wPoints = wPoints + 1;
            setHabits(newHabits)
            setWPoints(habits[i].wPoints);
            const docRef = doc(db, 'users', signedInUser.uid);
            updateDoc(docRef, { habits: habits });
          } else if (habits[i].wPoints === 100) {
            const newHabits = [...habits];
            newHabits[i].status = 'won';
            setHabits(habits);
            const docRef = doc(db, 'users', signedInUser.uid);
            updateDoc(docRef, { habits: habits });
          }
        }
      }
    } else if (pointType === 'lost') {
      for (let i = 0; i < habits.length; i++) {
        if (habits[i].name === habitName) {
          if (habits[i].lPoints < 30) {
            const newHabits = [...habits];
            newHabits[i].lPoints = lPoints + 1;
            setHabits(newHabits)
            setLPoints(habits[i].lPoints);
            const docRef = doc(db, 'users', signedInUser.uid);
            updateDoc(docRef, { habits: habits });
          } else if (habits[i].lPoints === 30) {
            const newHabits = [...habits];
            newHabits[i].status = 'lost';
            setHabits(habits);
            const docRef = doc(db, 'users', signedInUser.uid);
            updateDoc(docRef, { habits: habits });
          }
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
        setStatus(habitObject.status);
        setIsHabitOpen(!isHabitOpen);
      }
    });
  }

  const handleAddNewHabit = (event) => {
    event.preventDefault();
    const newHabitName = event.target[0].value;
    const newHabits = [...habits];
    newHabits.push({
      name: newHabitName,
      wPoints: 0,
      lPoints: 0,
      status: 'open'
    })
    const docRef = doc(db, 'users', signedInUser.uid);
    updateDoc(docRef, { habits: newHabits });
    setIsInputVisible(!isInputVisible);
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
        setSignedInUser(null);
        setHabits([]);
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
      <SignInScreen onSignIn={handleSignIn} />
    );
  } else {
    return (
      <div className='app'>
        <Nav
          isHabitOpen={isHabitOpen}
          onClose={() => setIsHabitOpen(!isHabitOpen)}
          onGetInput={() => setIsInputVisible(!isInputVisible)}
          onSignout={handleSignout}
        />
        <HabitInput
          isInputVisible={isInputVisible}
          onAddNewHabit={handleAddNewHabit}
        />
        {isHabitOpen ?
          <div className='main-container'>
            <div>
              <p className='text-highlight'>Habit</p>
              <p className='text-habit big'>{habitName}</p>
            </div>
            <div className='counters-container'>
              <Counter
                status={status}
                type='won'
                points={wPoints}
                onNewPoint={handleNewPoint}
              />
              <div className='divider'></div>
              <Counter
                status={status}
                type='lost'
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

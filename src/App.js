import ToggleColorMode from './components/ToggleColorMode';
import SearchInput from './components/SearchInput/SearchInput.js';
import Header from './components/Header/Header';
import SignIn from './components/Sign/SignIn';
import SignOut from './components/Sign/SignOut';

// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore'
// import 'firebase/compat/auth'


// import{useCollectionData} from 'react-firebase-hooks/firestore'
// import {useAuthState} from 'react-firebase-hooks/auth'




function App() {

  // firebase.initializeApp({
  //   apiKey: "AIzaSyDQkPw9b2yaKII3QaIbberuUX39xUQwTaY",
  //   authDomain: "animelooker-c6de0.firebaseapp.com",
  //   projectId: "animelooker-c6de0",
  //   storageBucket: "animelooker-c6de0.appspot.com",
  //   messagingSenderId: "491805330282",
  //   appId: "1:491805330282:web:0d8f7957be903060bdf313",
  //   measurementId: "G-BV6FQ2CCQH"
  // })
  // const auth = firebase.auth()
  // const firestore = firebase.firestore()

  // const signInWithGoogle = () =>{
  //   const provider = new firebase.auth.GoogleAuthProvider()
  //   auth.signInWithPopup(provider)
  // }

  // const [user] = useAuthState(auth)




  return (
    <div className="App">
      <Header/>
      {/* {user ? <SignOut wantSignOut={() => auth.signOut()} /> :   <SignIn signInWithGoogle={signInWithGoogle}/> } */}
     <ToggleColorMode/>
     <SearchInput/>

    </div>
  );
}

export default App;

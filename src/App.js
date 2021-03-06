import React,{useEffect} from 'react';
import { useSelector } from "react-redux";
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
 
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,

        }))
      } else {
        //user is logged out
        dispatch(logout());
      }
    })
  }, []);


  return (
    <div className="app">
      {/* header */}
      <Header />

      {!user ? <Login /> : (
        <div className="app__body">
        <Sidebar />
          <Feed />
          <Widgets />
        </div>
        
      )}





      {/* 1. app body */}
      {/* <div className="app__body">
        <Sidebar />
        <Feed />
      </div> */}


      {/* feed */}
      {/* widgets */}

    
    
    
    
    
    
    
    
    </div>
  );
}

export default App;

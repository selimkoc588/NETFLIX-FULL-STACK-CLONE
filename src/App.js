import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import firebase from './firebase';
import { getAuth } from 'firebase/auth';
function App() {
  const user = null;
  useEffect(() =>{
    getAuth.onAuthStateChanged(userCredential =>{
      if(userCredential){
        // logged in 
        console.log(userCredential);
      }
      else{
        // logged out
      }
    })
  },[])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}

      </Router>
    </div>
  );
}

export default App;

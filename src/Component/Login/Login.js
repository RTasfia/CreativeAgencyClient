import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import logo from '../../images/logos/logo.png';
import googleLogo from '../../images/logos/googleLogo.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebaseConfig';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email,photoURL} = result.user;

            const signedInUser = {...loggedInUser};
            signedInUser.name = displayName;
            signedInUser.email = email;
            signedInUser.photoURL = photoURL;
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function(error) {
            const errorMessage = error.message;
            alert(errorMessage);
          });
    }
    const storeAuthToken = () => {
        console.log(loggedInUser);
        firebase.auth().currentUser.getIdToken(true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            sessionStorage.setItem('info', loggedInUser);

            history.replace(from);
          }).catch(function (error) {
          });
      }
    return (
        <section>
            <div style={{textAlign:"center"}}>
                <img className="logo mt-5" src={logo} alt=""/>
            </div>
            <div className="mx-auto mt-5" style={{height: "300px", width: "400px", border: "1px solid gray",textAlign: "center"}}>
                <h3 className="pt-5">Login with</h3>
                <button onClick={handleGoogleSignIn}  style={{backgroundColor: "white", color: "black", border: "1px solid gray", borderRadius: "20px"}}> <img style={{height: "30px"}} src={googleLogo} alt=""/> Continue with Google</button>
                <br/> <br/>
                <p>Don't have an account  <a href="/">Create account</a></p>
            </div>
        </section>
    );
};

export default Login;
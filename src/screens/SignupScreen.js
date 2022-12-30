import React, { useRef } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './SignupScreen.css';

function SignupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailRef, passwordRef) 
        .then((userCredential) => {
        const user = userCredential.user;
    })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });

        signInWithEmailAndPassword(auth, emailRef, passwordRef)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        return (
            <div className='signupScreen'>
                <form>
                    <h1>Sing In</h1>
                    <input ref={emailRef}
                        placeholder="Email" type="email" />
                    <input ref={passwordRef} placeholder='Password' type="password" />
                    <button type="submit" onClick={createUserWithEmailAndPassword}>Sign In</button>

                    <h4>
                        <span className='signupScreen__gray'>New to Netflix? </span>
                        <span className='signupScreen__link' onClick={signInWithEmailAndPassword}>Sign Up now.</span>
                    </h4>
                </form>
            </div>
        );
    }

    export default SignupScreen;
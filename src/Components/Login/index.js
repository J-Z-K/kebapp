import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase";
import { auth } from "../../firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

const Login = () => {
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: "popup",
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        credentialHelper: "none",
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false,
        },
    };
    return (
        <>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </>
    );
};
export default Login;

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLYnvOUyB4hTOLjKe7DYwHxdPQS8d35DY",
    authDomain: "kebab-rater.firebaseapp.com",
    databaseURL: "https://kebab-rater.firebaseio.com",
    projectId: "kebab-rater",
    storageBucket: "kebab-rater.appspot.com",
    messagingSenderId: "238381580175",
    appId: "1:238381580175:web:30a87394edb126c18655fa",
    measurementId: "G-L8WCEM1JMJ"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();


export const signInWithGoogle = () => {
    auth.signInWithPopup(provider).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.erorr(`
            error_code: ${errorCode}\n
            error_Message: ${errorMessage}
        `)

      });;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

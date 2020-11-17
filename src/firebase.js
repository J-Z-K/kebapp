import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBLYnvOUyB4hTOLjKe7DYwHxdPQS8d35DY",
//     authDomain: "kebab-rater.firebaseapp.com",
//     databaseURL: "https://kebab-rater.firebaseio.com",
//     projectId: "kebab-rater",
//     storageBucket: "kebab-rater.appspot.com",
//     messagingSenderId: "238381580175",
//     appId: "1:238381580175:web:30a87394edb126c18655fa",
//     measurementId: "G-L8WCEM1JMJ",
// };

var firebaseConfig = {
    apiKey: "AIzaSyAuRXLlWY9T6ay5_0cVM529jxs74kLdv-8",
    authDomain: "kebapp-a8f69.firebaseapp.com",
    databaseURL: "https://kebapp-a8f69.firebaseio.com",
    projectId: "kebapp-a8f69",
    storageBucket: "kebapp-a8f69.appspot.com",
    messagingSenderId: "446955792896",
    appId: "1:446955792896:web:49c32899d31a6913d9c6e5",
    measurementId: "G-KH218Y2M4Q",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.erorr(`
error_code: ${errorCode}\n
error_Message: ${errorMessage}
`);
    });
};

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData,
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};
const getUserDocument = async (uid) => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data(),
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

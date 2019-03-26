import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAJGL91I_2fDFAWh-fXrl8Q8ecKxFKrz5c",
    authDomain: "no-loan-pay.firebaseapp.com",
    databaseURL: "https://no-loan-pay.firebaseio.com",
    projectId: "no-loan-pay",
    storageBucket: "no-loan-pay.appspot.com",
    messagingSenderId: "760952382897"  
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export default firebase;

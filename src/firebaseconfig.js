import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVfGtvb0vYHpyNbnNjbW9mIl__0DC2wFs",
    authDomain: "carros-alquiler.firebaseapp.com",
    databaseURL: "https://carros-alquiler-default-rtdb.firebaseio.com",
    projectId: "carros-alquiler",
    storageBucket: "carros-alquiler.appspot.com",
    messagingSenderId: "276127680231",
    appId: "1:276127680231:web:8616077bf57e941d72c442"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();

export {auth}

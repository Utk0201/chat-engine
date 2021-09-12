import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyABXhzAK2YO86pRPJIqbUknBL7lirO32VE",
    authDomain: "chat-room-67e96.firebaseapp.com",
    projectId: "chat-room-67e96",
    storageBucket: "chat-room-67e96.appspot.com",
    messagingSenderId: "11763724769",
    appId: "1:11763724769:web:d30b89305b71c857b262a0"
  }).auth();
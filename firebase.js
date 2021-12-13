import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2Ui3CyD9tRthxR3KfM4XSmOn9OjXT5fI",
  authDomain: "amznn-remade.firebaseapp.com",
  projectId: "amznn-remade",
  storageBucket: "amznn-remade.appspot.com",
  messagingSenderId: "793791557184",
  appId: "1:793791557184:web:c8b0ef522e76ea327b39a5"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
function StartFirebase() {
const firebaseConfig = {

    apiKey: "AIzaSyBO4SW8nU01v2jMsepn_YtHcEIrIDTEQWg",

    authDomain: "react-app-trying-again.firebaseapp.com",

    databaseURL: "https://react-app-trying-again-default-rtdb.firebaseio.com",

    projectId: "react-app-trying-again",

    storageBucket: "react-app-trying-again.appspot.com",

    messagingSenderId: "688175401101",

    appId: "1:688175401101:web:4234957a3d91db69cbfac4"

  };
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW3xDGl2avR1OE_lWTsa2vg6qcPaQXm6Y",
  authDomain: "gig-gather.firebaseapp.com",
  projectId: "gig-gather",
  storageBucket: "gig-gather.appspot.com",
  messagingSenderId: "792496646043",
  appId: "1:792496646043:web:8eaec144ca5532382aa33e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

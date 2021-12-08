// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4fXnBXvkfPeHgz8VjQ7j_E68zlI9WMSw",
  authDomain: "form-e9a06.firebaseapp.com",
  databaseURL: "https://form-e9a06-default-rtdb.firebaseio.com",
  projectId: "form-e9a06",
  storageBucket: "form-e9a06.appspot.com",
  messagingSenderId: "956046248989",
  appId: "1:956046248989:web:79a494303b226447fb8af4",
  measurementId: "G-VC3JQ56QHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
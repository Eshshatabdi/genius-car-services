// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqDVQcsgGtJcSaw7rnJ3Nj3WY-QOpN93Y",
    authDomain: "genius-car-services-823c3.firebaseapp.com",
    projectId: "genius-car-services-823c3",
    storageBucket: "genius-car-services-823c3.appspot.com",
    messagingSenderId: "105791882157",
    appId: "1:105791882157:web:8f58d5a843159d5c459724"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
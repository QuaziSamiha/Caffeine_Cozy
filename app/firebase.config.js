import { initializeApp } from "firebase/app";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiCzpb66P2qSKGaBbE7Rduq6Gt0b-b8CM",
  authDomain: "caffeinecozy-68ea0.firebaseapp.com",
  projectId: "caffeinecozy-68ea0",
  storageBucket: "caffeinecozy-68ea0.appspot.com",
  messagingSenderId: "477681450155",
  appId: "1:477681450155:web:5d841819ab5690cd500bee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

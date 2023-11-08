import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXRkegQEM2b4gV9w--fBp9RKNNQnLnhZ0",
  authDomain: "auctionsystem-84452.firebaseapp.com",
  projectId: "auctionsystem-84452",
  storageBucket: "auctionsystem-84452.appspot.com",
  messagingSenderId: "856553472206",
  appId: "1:856553472206:web:7a2a5b09150e41d736109f",
  measurementId: "G-2K05SHP95E"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

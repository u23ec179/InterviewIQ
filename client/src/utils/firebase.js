



import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect ,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-dc262.firebaseapp.com",
  projectId: "interviewiq-dc262",
  storageBucket: "interviewiq-dc262.firebasestorage.app",
  messagingSenderId: "101207349413",
  appId: "1:101207349413:web:1aec071162f908d112154c"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// const handleGoogleAuth = async () => {
//     try {
//         // Change from signInWithPopup(auth, provider) to:
//         await signInWithRedirect(auth, provider);
//     } catch (error) {
//         console.error("Error signing in with Google:", error);
//     }
//   }

export { auth, provider };


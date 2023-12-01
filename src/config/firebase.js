// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";

// Firebase configuration object containing API keys and other settings
const firebaseConfig = {
  apiKey: "AIzaSyBKgA6XRxTg8K-u6UQeszsTIsHh-Yoewbc",
  authDomain: "lp-portfolio-web-1698531996884.firebaseapp.com",
  projectId: "lp-portfolio-web-1698531996884",
  storageBucket: "lp-portfolio-web-1698531996884.appspot.com",
  messagingSenderId: "41271034664",
  appId: "1:41271034664:web:1d329aed54f4a52918c61d",
  measurementId: "G-2TTC23QYL5"
};

// Initialize Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Get the authentication and analytics instances from the app
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Log an event to analytics with the name 'FirebaseConfig'
logEvent(analytics, 'FirebaseConfig');

// Create a GoogleAuthProvider instance for Google Sign-In
const googleProvider = new GoogleAuthProvider();

// Function to handle Google Sign-In
const signInWithGoogle = async () => {
  try {
    // Attempt to sign in with Google using a popup
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    // Log and handle any errors that occur during the sign-in process
    console.error(err);
  }
};

// Function to handle user logout
const logout = async () => {
  try {
    // Attempt to sign out the authenticated user
    await signOut(auth);
  } catch (err) {
    // Log and handle any errors that occur during the logout process
    console.error(err);
  }
};

// Export authentication instance, Google Sign-In function, and logout function for use in other modules
export {
  auth,
  signInWithGoogle,
  logout
};

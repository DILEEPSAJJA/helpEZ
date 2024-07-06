import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyBmm1S4Pbpppai7rWuCpF5h0T0rv1phJXg",
  authDomain: "helpez.firebaseapp.com",
  projectId: "helpez",
  storageBucket: "helpez.appspot.com",
  messagingSenderId: "43832184547",
  appId: "1:43832184547:web:82090a664e7d4e47acffd6"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth =initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export { app,firestore, auth };
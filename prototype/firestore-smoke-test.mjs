//Smoke test that reads one Firestore document

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Connect to Firebase
const app = initializeApp({
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
});

const test = getFirestore(app);

// Read a test document
try {
  const result = await getDoc(doc(test, "prototype_status", "connection"));

  if (!result.exists() || result.data().ok !== true) {
    throw new Error("Test document missing");
  }

  console.log("PASS: Firestore connection works");
} catch (error) {
  console.error("FAIL:", error.message);
  process.exitCode = 1;
}
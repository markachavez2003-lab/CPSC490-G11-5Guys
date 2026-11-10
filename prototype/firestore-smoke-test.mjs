//Smoke test that reads one Firestore document

// Connect to Firebase
import { db } from "./firebase/client.js";
import { doc, getDoc } from "firebase/firestore";

// Read a test document
try {
  const result = await getDoc(doc(db, "prototype_status", "connection"));

  if (!result.exists() || result.data().ok !== true) {
    throw new Error("Test document missing or incorrect");
  }

  console.log("PASS: Firestore connection works!");
} catch (error) {
  console.error("FAIL:", error.message);
  process.exitCode = 1;
}
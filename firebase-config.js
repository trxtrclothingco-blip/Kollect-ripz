/**
 * Firebase Configuration
 * ----------------------
 * Replace the values below with your own Firebase project credentials.
 * Get them from: Firebase Console → Project Settings → Your apps → Web app
 *
 * Also set:
 * - Cloudinary cloud name + unsigned upload preset (for admin image uploads)
 * - Optional: Pokemon Price Tracker API key (server-side recommended)
 */

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Cloudinary (unsigned upload preset required for browser uploads)
const CLOUDINARY = {
  cloudName: "YOUR_CLOUD_NAME",
  uploadPreset: "kollect_vault"   // Create an unsigned preset named this in Cloudinary
};

// Buyback percentage of locked market value at open time
// Example: 0.70 = 70% of market value offered as cash
const BUYBACK_PERCENT = 0.70;

// Pack price in GBP
const PACK_PRICE = 25;

// Admin UIDs — add your Firebase Auth UID(s) here after first login
// You can also mark users as admin in Firestore: users/{uid}.role = "admin"
const ADMIN_UIDS = [
  // "paste-your-firebase-uid-here"
];

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Export for app.js (global for simplicity in this static build)
window.KollectConfig = {
  CLOUDINARY,
  BUYBACK_PERCENT,
  PACK_PRICE,
  ADMIN_UIDS,
  auth,
  db
};

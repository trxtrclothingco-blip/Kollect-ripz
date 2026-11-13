const firebaseConfig = {
  apiKey: "AIzaSyBO6Q4dh_i8Wy8K7e451w-kNzfMaGlW5bs",
  authDomain: "kollect-rips-aad8d.firebaseapp.com",
  projectId: "kollect-rips-aad8d",
  storageBucket: "kollect-rips-aad8d.firebasestorage.app",
  messagingSenderId: "193157459946",
  appId: "1:193157459946:web:bcc2e98eeb3bedec724c93"
};

const BUYBACK_PERCENT = 0.70;
const PACK_PRICE = 25;
const ADMIN_UIDS = [];

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

window.Kollect = {
  auth: auth,
  db: db,
  BUYBACK_PERCENT: BUYBACK_PERCENT,
  PACK_PRICE: PACK_PRICE,
  ADMIN_UIDS: ADMIN_UIDS
};

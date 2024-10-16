
const { initializeApp } = require("firebase/app");
const { getFirestore, collection } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAhQiScaUq5TZ_Prnkj3RQvgrfFjwvyxF8",
  authDomain: "simpleshub-37479.firebaseapp.com",
  databaseURL: "https://simpleshub-37479-default-rtdb.firebaseio.com",
  projectId: "simpleshub-37479",
  storageBucket: "simpleshub-37479.appspot.com",
  messagingSenderId: "49136668225",
  appId: "1:49136668225:web:b96e1c6fba62383eaf40c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersCollection = collection(db, "Users");

module.exports = usersCollection;

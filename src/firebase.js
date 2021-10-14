import firebase from "firebase";

const firebaseConfig = {
  apiKey: "Use Your Own Keys",
  authDomain: "Use Your Own Keys",
  projectId: "Use Your Own Keys",
  storageBucket: "Use Your Own Keys",
  messagingSenderId: "Use Your Own Keys",
  appId: "Use Your Own Keys",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

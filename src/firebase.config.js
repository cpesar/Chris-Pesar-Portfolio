import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3bg0ZKBQeB_pRbvJRzY6bZSpJdcszFqE",
  authDomain: "updated-portfolio-contact.firebaseapp.com",
  projectId: "updated-portfolio-contact",
  storageBucket: "updated-portfolio-contact.appspot.com",
  messagingSenderId: "855051577898",
  appId: "1:855051577898:web:9206ab94cddfa025f7b153",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

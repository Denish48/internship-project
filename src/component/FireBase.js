import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCer2X9AxgntRz2PYN86cAcsv2bJh-7EFA",
  authDomain: "allmoviedata-541b3.firebaseapp.com",
  projectId: "allmoviedata-541b3",
  storageBucket: "allmoviedata-541b3.appspot.com",
  messagingSenderId: "889746509797",
  appId: "1:889746509797:web:1270dfae4b64f95eb8290c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dt = getFirestore(app);


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEYYC6Opq3eiQo7wjOlScL8ZplDrbJ7QI",
  authDomain: "rajat-project-40e0b.firebaseapp.com",
  projectId: "rajat-project-40e0b",
  storageBucket: "rajat-project-40e0b.appspot.com",
  messagingSenderId: "250729396362",
  appId: "1:250729396362:web:bd4c183689b5f9d80d9573",
  databaseURL:"https://rajat-project-40e0b-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig);

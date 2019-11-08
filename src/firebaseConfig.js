import Firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDQTG0wQU8WpoOvqaUWvJYE4M3yziLiqgA",
  authDomain: "pizza-planet-658b6.firebaseapp.com",
  databaseURL: "https://pizza-planet-658b6.firebaseio.com",
  projectId: "pizza-planet-658b6",
  storageBucket: "pizza-planet-658b6.appspot.com",
  messagingSenderId: "101738118437",
  appId: "1:101738118437:web:89c91065eaab69a24faecc"
};
// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
export const dbMenuRef = db.ref("menu");
export const dbOrdersRef = db.ref("orders");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbwp5j2PwDTUItn5Vbc_vffD5EuNhAfDY",
  authDomain: "fyn-associates-724a7.firebaseapp.com",
  projectId: "fyn-associates-724a7",
  storageBucket: "fyn-associates-724a7.appspot.com",
  messagingSenderId: "634626289458",
  appId: "1:634626289458:web:ce2370f3598df9859b712b",
  measurementId: "G-JW7CZ75TH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var company = document.getElementById("company");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var telephone = document.getElementById("telephone");



window.contact = function(){
    var reference = ref(db, "clients/");
    var keyTasks = push(reference);

    var obj = {
        firstname: firstName.value,
        lastname: lastName.value,
        company: company.value,
        email: email.value,
        phone: phone.value,
        telephone: telephone.value,
        id: keyTasks.key
    }

    
    set(keyTasks, obj);
    console.log(obj);
}
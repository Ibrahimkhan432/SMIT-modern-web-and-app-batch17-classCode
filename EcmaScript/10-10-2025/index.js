// console.log(window.location.href = "./../01-09-2025/index.html")
// var windowOpen = window.open("","new1","width=500,height=500")
// var content = `<h1>This is new page</h1>`
// windowOpen.document.write(content)
// function checkForSelection() {
//     if (document.getElementById("states").selectedIndex === 0) {
//         alert("Please select a state.");
//         return false;
//     {
// }

// console.log("first log")


// try {
//     conso.log("second log")
// } catch (error) { 
//     throw "console wrong spelling api is not working"
// }
// console.log("third log")



// var signup_btn = document.getElementById("btn")

// function test(){
//     console.log("button clicked")
// }
// signup_btn.onclick = test
// or
// signup_btn.addEventListener("click",test)
// or
// signup_btn.addEventListener("click",function(){
//     console.log("button clicked")
// })



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getAuth,
   createUserWithEmailAndPassword ,
   onAuthStateChanged ,
   signInWithEmailAndPassword 
 } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAa3px47pRJnqQ94bkFrF1xujHUvVP8fFw",
    authDomain: "modern-wma-batch-17.firebaseapp.com",
    projectId: "modern-wma-batch-17",
    storageBucket: "modern-wma-batch-17.firebasestorage.app",
    messagingSenderId: "1031506221361",
    appId: "1:1031506221361:web:592c18a3392a9d559a3810",
    measurementId: "G-24YP5MD9DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)
const auth = getAuth(app);
console.log(auth)


var email = document.getElementById("semail")
var password = document.getElementById("spassword")


var signup_btn =document.getElementById("signupBtn")

signup_btn.addEventListener("click",signup)


// check already users
onAuthStateChanged(auth, (user) => {
  if (user) {
  console.log(user.email)
    const uid = user.uid;
  } else {
    
  }
});



function signup(){
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
  console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  console.log(errorMessage)
  });
}

// user login

var lemail = document.getElementById("lemail")
var lpassword = document.getElementById("lpassword")
var login_btn =document.getElementById("loginBtn")
login_btn.addEventListener("click",login)

function login(){
    signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
  .then((userCredential) => {
    console.log("user logged in")
    location.href = "https://facebook.com"
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}

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
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";
import {
  getFirestore,
  collection, addDoc,
  getDocs,
  doc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK3siS7mAt0EgGQMdXK_-YUeSqjdNi1X0",
  authDomain: "full-package-firebase.firebaseapp.com",
  projectId: "full-package-firebase",
  storageBucket: "full-package-firebase.appspot.com",
  messagingSenderId: "616758922997",
  appId: "1:616758922997:web:b7830020af1a181f7f7fbc",
  measurementId: "G-B90MDHN8YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(app)
const auth = getAuth(app);
// console.log(auth)

const db = getFirestore(app);
console.log("db connected", db)

var email = document.getElementById("semail")
var password = document.getElementById("spassword")
var signup_btn = document.getElementById("signupBtn")
var showUser = document.getElementById("renderUser")
var lemail = document.getElementById("lemail")
var lpassword = document.getElementById("lpassword")
var login_btn = document.getElementById("loginBtn")
var lgoutBtn = document.getElementById("lgoutBtn")
var authContainer = document.getElementById("authContainer")
var googleBtn = document.getElementById("googleBtn")
// todo app
var item = document.getElementById("todo-item")
var addBtn = document.getElementById("todoBtn")
var todoList = document.getElementById("todo-list")


// storage
var drag_file = document.getElementById("drag_file")
var upload_file = document.getElementById("upload_file")

// signup function
signup_btn.addEventListener("click", signup)
// login function
login_btn.addEventListener("click", login)
// signout
lgoutBtn.addEventListener("click", lgout)
// google login
googleBtn.addEventListener("click", googleLogin)

// todo app
addBtn.addEventListener("click", addTodo)

// storage
upload_file.addEventListener("click", uploadFile)




// check already users
onAuthStateChanged(auth, (user) => {
  if (user) {
    showUser.innerHTML = `Welcome  ${user.email}`
    lgoutBtn.style.display = "block"
    authContainer.style.display = "none"

  } else {
    lgoutBtn.style.display = "none"
    authContainer.style.display = "block"
  }
});

// create a user
function signup() {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      // console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage)
    });
}

// login user
function login() {
  signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
    .then((userCredential) => {
      // console.log("user logged in")
      // location.href = "https://facebook.com"
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage)
    });
}

// lgout user
function lgout() {
  signOut(auth).then(() => {
    // console.log("user lgout")
  }).catch((error) => {
    console.log(error.message)
  });
}

// continue with google
const provider = new GoogleAuthProvider();

function googleLogin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      // ...
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}


// todo app
getTodos()
const todosCollection = collection(db, "todos")

async function addTodo() {

  try {
    const obj = {
      item: item.value,
      createdAt: new Date().toLocaleString()
    }
    // console.log("todos=>", obj)
    const docRef = await addDoc((todosCollection), obj);
    console.log("todo added")
    getTodos()
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

getTodos()
async function getTodos() {
  try {
    const querySnapshot = await getDocs(todosCollection);

    querySnapshot.forEach((doc) => {
      // console.log(doc.id)
      // console.log(doc.data().item)
      //  destructure data
      const { item, createdAt } = doc.data()
      const todoItems = `<li id="${doc.id}">  ${item}  ${createdAt}</li>`
      todoList.innerHTML += todoItems



    });
    todoList.childNodes.forEach((items) => {
      items.addEventListener("click", deleteTodo)
    })


  } catch (error) {
  }
}


// delete todo 
async function deleteTodo() {
  try {
    const docId = this.id
    console.log(docId)
    await deleteDoc(doc(db, "todos", docId));
    console.log("todo deleted")
    item.value = ""
    getTodos()
  } catch (error) {
    console.log(error.message)
  }
}


// storege
const storage = getStorage();
console.log("storage=>", storage)



async function uploadFile() {

  console.log(drag_file.files[0])
  try {
    const bikeStorage = ref(storage,"bikes/"+drag_file.files[0].name);
    console.log("storage function is working")
    uploadBytes(bikeStorage,drag_file.files[0] ).
      then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log(snapshot)
      });
    getDownloadURL(bikeStorage)
      .then((url) => {
        console.log(url)
      });
  } catch (error) {
    console.log(error.message)
  }

}
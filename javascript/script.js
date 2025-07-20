

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
  import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

   const firebaseConfig = {
      apiKey: "AIzaSyDvJ5icMfg6QOSq1_RrdsY2qMnCNkdRyzs",
      authDomain: "fitnessbuddyapp-f08eb.firebaseapp.com",
      databaseURL: "https://fitnessbuddyapp-f08eb-default-rtdb.firebaseio.com",
      projectId: "fitnessbuddyapp-f08eb",
      storageBucket: "fitnessbuddyapp-f08eb.firebasestorage.app",
      messagingSenderId: "709503176678",
      appId: "1:709503176678:web:8fa732501ec7ca3a67d027",
      measurementId: "G-JF32SWZCRM"
    };


   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);
   const db = getDatabase(app);







window.registerBTNFn = function (event) {
  event.preventDefault();

  const name = document.getElementById("nameId").value.trim();
  const email = document.getElementById("emailId").value.trim();
  const password = document.getElementById("passwordId").value;
  const confPass = document.getElementById("confPassId").value;

  if (!name || !email || !password || !confPass) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confPass) {
    alert("Password and Confirm Password do not match.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const uid = userCredential.user.uid;

      set(ref(db, 'users/' + uid), {
        name: name,
        email: email,
      });

      alert("Registration successful!");
      document.getElementById("registerForm").reset();
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
};





window.subBTNFn = function (event) {
  event.preventDefault();

  const email = document.getElementById("mailId").value.trim();
  const password = document.getElementById("pswId").value;

  if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      const uid = userCredential.user.uid;
      window.location.href = "fitnessBuddy.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};










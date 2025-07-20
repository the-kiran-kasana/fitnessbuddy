
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAuth, onAuthStateChanged ,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
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





onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
    } else {
      console.log("User is logged in:", user.email);
    }
  });




window.createProfileFn = function (event) {
  event.preventDefault();

  const user = auth.currentUser;

  if (!user) {
    alert("User not logged in");
    return;
  }

  const uid = user.uid;

  const name = document.getElementById("profileNameId").value.trim();
  const gender = document.getElementById("profileGenderId").value;
  const age = document.getElementById("profileAgeId").value;
  const height = document.getElementById("profileHeightId").value;
  const weight = document.getElementById("profileWeightId").value;
  const location = document.getElementById("profileLocationId").value;
  const country = document.getElementById("profilecountryId").value;
  const activityLevel = document.getElementById("profileActivityId").value;
  const Workouts = document.getElementById("profileWorkoutsId").value;

  if (!name || !gender || !age || !height || !weight || !location || !activityLevel || !Workouts) {
    alert("Please fill in all fields.");
    return;
  }

  set(ref(db, 'users/' + uid), {
    name: name,
    gender: gender,
    age: age,
    height: height,
    weight: weight,
    location: location,
    activityLevel: activityLevel,
    Workouts: Workouts,
    Country:country,
    email: user.email // use authenticated user's email
  })
    .then(() => {
      alert("Profile saved successfully!");
      document.getElementById("creatProfile").reset();
      window.location.href = "fitnessBuddy.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
};



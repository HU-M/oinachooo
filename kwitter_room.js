var firebaseConfig = {
    apiKey: "AIzaSyAuc670uJ6WWfno_p180mEEbJZa_JF3cGQ",
    authDomain: "k-witter-70f22.firebaseapp.com",
    databaseURL: "https://k-witter-70f22-default-rtdb.firebaseio.com",
    projectId: "k-witter-70f22",
    storageBucket: "k-witter-70f22.appspot.com",
    messagingSenderId: "780516095759",
    appId: "1:780516095759:web:5bf1745d1be7160114b07a",
    measurementId: "G-MRZ2ZCJL9Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Start Code
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div></hr>";
  // End Code

  function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location + "kwitter_room.html";
}
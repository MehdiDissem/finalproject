// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDiF2keigbctdrHbadxtUq1rjbt3bkrjpQ",
  authDomain: "myform-5746f.firebaseapp.com",
  databaseURL: "https://myform-5746f.firebaseio.com",
  projectId: "myform-5746f",
  storageBucket: "",
  messagingSenderId: "666310553216",
  appId: "1:666310553216:web:488bd1df4626c3b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function submitForm() {
    var fname=document.getElementById("fname").value
    var lname=document.getElementById("lname").value
    var country=document.getElementById("country").value
    var subject=document.getElementById("subject").value
    sendData(fname,lname,country,subject)
    alert("We got it. You will get an answer ASAP");
}

function sendData(fname,lname,country,subject){

      firebase.database().ref('gomycode1/').push({
        fname: fname,
        lname: lname,
        country : country,
        subject : subject,
      });
    }

    // AU CAS OU J'EN AURAI BESOIN :D
// var video = document.getElementById("myVideo");
// var btn = document.getElementById("myBtn");

// function myFunction() {
//  if (video.paused) {
//    video.play();
//   btn.innerHTML = "Pause";
//  } else {
//    video.pause();
//    btn.innerHTML = "Play";
//  }
//}
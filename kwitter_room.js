
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyC1CR1nxYxL9xOj-OFpCIjmMJpOH3_VP6s",
      authDomain: "kwitterapp-37687.firebaseapp.com",
      databaseURL: "https://kwitterapp-37687-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-37687",
      storageBucket: "kwitterapp-37687.appspot.com",
      messagingSenderId: "68434615377",
      appId: "1:68434615377:web:ac83a61c7c1e571788ec70"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

 function addroom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  console.log("room name - "+Room_names);
  row ="<div class='room_name' id="+Room_names+"onclick='redirect_to_room_name(this.id)'>#"+ Room_names +'</div></hr>';
  document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect_to_room_name(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwtter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
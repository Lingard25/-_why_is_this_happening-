
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB42odQndVp4pvKnC2zydFEkH_Ixc5thew",
      authDomain: "jjkl-eaad7.firebaseapp.com",
      databaseURL: "https://jjkl-eaad7-default-rtdb.firebaseio.com",
      projectId: "jjkl-eaad7",
      storageBucket: "jjkl-eaad7.appspot.com",
      messagingSenderId: "201913880546",
      appId: "1:201913880546:web:4a5fbd15d283f2b41b33bb"
    };
    
    
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
  roomname = document.getElementById("roomname").value;

  firebase.database().ref("/").child(roomname).update({
    purpose : "adding room name"
  })

    localStorage.setItem("roomname", roomname);
    
    window.location = "LESSDAB.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Roomnames = childKey;

      console.log("Room Name - " + Room_names);
     row = "<div class='roomname' id="+Roomnames+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}
function redirectToRoomName(name) { console.log(name); localStorage.setItem("roomname", name); window.location = "LESSDAB.html"; }
    
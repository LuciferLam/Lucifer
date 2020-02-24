(function(){


  const firebaseConfig = {
    apiKey: "AIzaSyAKy8MzBhDqsTD1mIUh7IRGGQYfV0SaZVs",
    authDomain: "enjoin-69503.firebaseapp.com",
    databaseURL: "https://enjoin-69503.firebaseio.com",
    projectId: "enjoin-69503",
    storageBucket: "enjoin-69503.appspot.com",
    messagingSenderId: "361420381404",
    appId: "1:361420381404:web:2560c42fe4bdedb547a819"
  };
  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Get elements
  const preObject = document.getElementById('object');

  // Creat references
  const dbRefObject = firebase.database().ref().child('object');

  // Sync object changes
  dbRefObject.on('value', snap => console.log(snap,val()));

}());
















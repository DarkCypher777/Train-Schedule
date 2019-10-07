
// Initialize Firebase
// This is the code we copied and pasted from our app page
var config = {
    apiKey: "AIzaSyAjv_Myuo-Wu4t-KIxKae0f2ltJ8toy81U",
    authDomain: "bootcamp-train-schedule.firebaseapp.com",
    databaseURL: "https://bootcamp-train-schedule.firebaseio.com",
    projectId: "bootcamp-train-schedule",
    storageBucket: "",
    messagingSenderId: "1094548381366",
    appId: "1:1094548381366:web:ee9346eac6df4ab7d99017",
    measurementId: "G-DG03NW9498"
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

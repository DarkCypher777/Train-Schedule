$(document).ready(function () {

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

    // At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
    // This callback keeps the page updated when a value changes in firebase. ****Firebase Code HERE****
    database.ref().on("value", function (snapshot) {
        console.log(snapshot.val());


        // If any errors are experienced, log them to console.
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });


    // Whenever a user clicks the confirm-train button
    $("#confirm-train").on("click", function () {

        
        // Save new value to Firebase
        database.ref().set({
            // clickCount: clickCounter
        });

        // Log the value of 
        console.log();

    });

    // database.ref().set({
    //     clickCount: clickCounter
    //   });
});
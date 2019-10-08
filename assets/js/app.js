// 

// * Firebase config
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

// Button for adding trains
$("#confirm-train").on("click", function (event) {
    event.preventDefault();

    // user input
    // TODO use https://momentjs.com/docs/#/parsing/string-format/ for time
    var trainName = $("#name-input").val().trim();
    var trainDest = $("#dest-input").val().trim();
    var trainTime = moment($("#time-input").val().trim(), "HH/mm").format("X");
    var trainFreq = moment($("#freq-input").val().trim(), "mm").format("X");

    // Creates local temp object for holding train data
    var newTrain = {
        name: trainName,
        destination: trainDest,
        time: trainTime,
        frequency: trainFreq
    };

    // Uploads train data to the database
    database.ref().push(newTrain);

    // console logs
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);

    alert("Train Added")

    // clear text box after input
    $("#name-input").val("");
    $("#dest-input").val("");
    $("#time-input").val("");
    $("#freq-input").val("");
});;

//  At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase. ****Firebase Code HERE****
// Firebase is always watching for changes to the data.
// When changes occurs it will print them to console and html
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDest = childSnapshot.val().destination
    var trainTime = childSnapshot.val().time
    var trainFreq = childSnapshot.val().frequency

    // console log
    console.log(trainName);
    console.log(trainDest);
    console.log(trainTime);
    console.log(trainFreq);

    // TIME Calculation area (check timesheet logic and train example)

    // Next Arrival example 04:10 PM
    var trainFreq = "";

    // Minutes Away
    var trainProx = "";

    var trainProxConverted = moment(trainProx, "HH:mm").subtract(1, "years");
    console.log(trainProxConverted);

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var diffTime = moment().diff(moment(trainProxConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    var tRemainder = diffTime % trainFreq;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = trainFreq - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    // create new row
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDest),
        $("<td>").text(trainFreq),
        // next arrival
        $("<td>").text(trainTime),
        // minutes away
        $("<td>").text(trainProx)
    )

    // Append the new row to the table
    $("#train-table > tbody").append(newRow);

    // If any errors are experienced, log them to console.
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});



// // Assumptions
// var timeFreq = "";

// // Time is 3:30 AM
// var firstTime = "00:00";

// // First Time (pushed back 1 year to make sure it comes before current time)
// var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
// console.log(firstTimeConverted);

// // Current Time
// var currentTime = moment();
// console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// // Difference between the times
// var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
// console.log("DIFFERENCE IN TIME: " + diffTime);

// // Time apart (remainder)
// var tRemainder = diffTime % timeFreq;
// console.log(tRemainder);

// // Minute Until Train
// var tMinutesTillTrain = timeFreq - tRemainder;
// console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// // Next Train
// var nextTrain = moment().add(tMinutesTillTrain, "minutes");
// console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


// database.ref().set({
//     clickCount: clickCounter
//   });
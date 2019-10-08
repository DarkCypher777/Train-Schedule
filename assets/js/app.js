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

// Initial Variables (SET the first set IN FIREBASE FIRST)
// Note remember to create these same variables in Firebase!
$("#confirm-train").on("click", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // user input
    // TODO use https://momentjs.com/docs/#/parsing/string-format/ for time
    var trainName = $("#name-input").val().trim();
    var trainDest = $("#dest-input").val().trim();
    var trainTime = $("#time-input").val().trim();
    var trainFreq = $("#freq-input").val().trim();

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
    $("#name-input") > val("");
    $("#dest-input") > val("");
    $("#time-input") > val("");
    $("#freq-input") > val("");
});;

//  At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase. ****Firebase Code HERE****
// Firebase is always watching for changes to the data.
// When changes occurs it will print them to console and html
database.ref().on("child_added", function (childSnapshot) {
    console.log(snapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDest = childSnapshot.val().destination
    var trainTime = childSnapshot.val().time
    var trainFreq = childSnapshot.val().frequency

    // console log
    console.log(trainName);
    console.log(trainDest);
    console.log(trainTime);
    console.log(trainFreq);

    // make it look neat and clean
    var trainTimeUnify = moment.unix(trainTime).format("MM/DD/YYYY");

    // calculate next arivial
    // var empMonths = moment().diff(moment(trainTime, "X"), "months");
    // console.log(empMonths);

    // calculate minutes away


    // create new row
    var newRow = $("<>").append(
        $("<>").text(trainName),
        $("<>").text(trainDest),
        $("<>").text(trainFreq),
        $("<>").text(trainTime),
        $("<>").text(trainProx)
    )

      // Append the new row to the table
  $("#employee-table > tbody").append(newRow);

    // If any errors are experienced, log them to console.
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});




// database.ref().set({
//     clickCount: clickCounter
//   });
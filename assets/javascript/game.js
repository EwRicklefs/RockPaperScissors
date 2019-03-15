//Firebase connection



//Global Variables
var config = {
    apiKey: "AIzaSyAZQS4aaOFLnbCs45BNLtbSjNDgfliOSsY",
    authDomain: "rockpaperscissors-4a501.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-4a501.firebaseio.com",
    projectId: "rockpaperscissors-4a501",
    storageBucket: "rockpaperscissors-4a501.appspot.com",
    messagingSenderId: "291687069622"
};

firebase.initializeApp(config);

var database = firebase.database();


//on click to store user variables

$("#submit-button").on("click", function (event) {
    event.preventDefault();
    var trainName = $("#train-name-input").val().trim();
    var trDestination = $("#destination-input").val().trim();
    var trStart = $("#start-input").val().trim();
    var trFreq = $("#freq-input").val().trim();

    var newTrain = {
        name: trainName,
        dest: trDestination,
        start: trStart,
        freq: trFreq
    };

    database.ref().push(newTrain)

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#start-input").val("");
    $("#freq-input").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val())
    var newRow = $("<tr>")


    //TODO: Calculate these values
    var nextArrivalVal = 0
    var minsAwayVal = 0
    
    

    //creates new table value for each new value to be added
    var newTrain = $("<td>")
    var destination = $("<td>")
    var freq = $("<td>")
    var arrival = $("<td>")
    var minsAway = $("<td>")

    //TODO: Exact database var names may need to be updated
        //what exactly does the json object in firebase look like?  is snapshot.child.XXX needed?
    newTrain.text(childSnapshot.val().name)
    destination.text(childSnapshot.val().dest)
    freq.text(childSnapshot.val().freq)

    arrival.text(nextArrivalVal)
    minsAway.text(minsAwayVal)

    //appends each new item to the new row
    newRow.append(newTrain)
    newRow.append(destination)
    newRow.append(freq)
    newRow.append(arrival)
    newRow.append(minsAway)

    //appends new row to table
    $("#tableBody").append(newRow);
});

//particle background generator
window.onload = function () {
    Particles.init({
        selector:'.background',
        connectParticles: true,
        color: "#9df098"
    });
};
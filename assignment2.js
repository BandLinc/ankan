//Datepicker function for jquery
$("#datepicker").datepicker();
$(document).ready(function () {
    var age = "";
    $("#datepicker").datepicker({
        onSelect: function (value, ui) {
            var today = new Date();
            age = today.getFullYear() - ui.selectedYear;
        },
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        yearRange: '1970:2020'
    })
})

//Function for validating date 
//Function call zeller method
//Functions call ankan function
function myFunction() {

    var dob = document.getElementById("datepicker").value;

    var gender = document.getElementById("gender").value;

    if (dob == "" || gender == "") {
        alert("Sorry, you missed to enter some information");
    } else {
        var d = new Date(dob);
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        var day = Zeller(date, month, year);
        var calculator=[day,gender];
        var name=ankan(calculator);
        alert("You name is : " + name);
    }
}

//Zeller function that return the day of the week
function Zeller(D, M, Y) {
    var Day = "";

    if (M < 3) {
        M = M + 12;
        Y = Y - 1;
    }

    var C = Math.floor(Y / 100);
    var K = Y - (100 * C);

    var S = Math.floor(2.6 * M - 5.39) + Math.floor(K / 4) + Math.floor(C / 4) + D + K - (2 * C);

    var ans = S - (7 * Math.floor(S / 7));

    if (ans == 0) {
        Day = "Sunday";
    }
    else if (ans == 1) {
        Day = "Monday";
    }
    else if (ans == 2) {
        Day = "Tuesday";
    }
    else if (ans == 3) {
        Day = "Wednesday";
    }
    else if (ans == 4) {
        Day = "Thursday";
    }
    else if (ans == 5) {
        Day = "Friday";
    }
    else {
        Day = "Saturday";
    }
    return Day;
}
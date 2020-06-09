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

    if (isValidDate(dob) == false) {
        if (dob=="") {
            alert("Sorry, you didn't enter a date");
        } else {
            alert("Sorry, you entered an invalid date");
        }
    } else {
        var d = new Date(dob);
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();

        var day = Zeller(date, month, year);
        var calculator = [day, gender];
        var name = ankan(calculator);
        alert("Congratulations!! Your name is " + name + " because you were born on a " + day + " and you are " + gender + ".");
    }
}

//Validate Date
// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
function isValidDate(dateString) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
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

//function that return the ankan name
function ankan(calculator) {
    var name = "";
    var day = calculator[0];
    var gender = calculator[1];
    if (gender == "Male") {
        switch (day) {
            case "Monday":
                name = "Kwadwo";
                break;
            case "Tuesday":
                name = "Kwabena";
                break;
            case "Wednesday":
                name = "Kwaku";
                break;
            case "Thursday":
                name = "Yaw";
                break;
            case "Friday":
                name = "Kofi";
                break;
            case "Saturday":
                name = "Kwame";
                break;
            case "Sunday":
                name = "Kwasi";
                break;
        }
    } else {
        switch (day) {
            case "Monday":
                name = "Adwoa";
                break;
            case "Tuesday":
                name = "Abenaa";
                break;
            case "Wednesday":
                name = "Akua";
                break;
            case "Thursday":
                name = "Yaa";
                break;
            case "Friday":
                name = "Afua";
                break;
            case "Saturday":
                name = "Ama";
                break;
            case "Sunday":
                name = "Akosua";
                break;

        }
    }
    return name;
}
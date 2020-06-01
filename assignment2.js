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

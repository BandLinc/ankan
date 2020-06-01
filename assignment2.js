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
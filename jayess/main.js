var hotels = ["Maldives", "Bali", "Thailand"];
var dayRates = [1000, 900, 800];
//declaring the object that will display on the right

function validateForm() {
    var firstname = document.forms["hotelForm"]["firstname"].value;
    var lastname = document.forms["hotelForm"]["lastname"].value;
    var days = document.forms["hotelForm"]["days"].value;

    if (firstname == "") {
        alert("First name must be filled out");
        return false;
    } else if (lastname == "") {
        alert("Last name must be filled out");
        return false;
    } else if (days < 1) {
        alert("Number of days must be greater than 0");
        return false;
    }
}



function displayHotelAndDayRate() {
    var i;
    for (i = 0; i < hotels.length; i++) {
        document.getElementById('hotels').innerHTML = hotels[i] + ' Hotel ' + dayRates[i] + ' per night, pps';
    }
    
}

function displaySelectionAndPrice() {

    var person = {
        firstName: document.forms["hotelForm"]["firstname"].value,
        lastName: document.forms["hotelForm"]["lastname"].value,   
    }
    var i;
    for (i=0; i < hotels.length; i++) {
    var days = document.forms["hotelForm"]["days"].value;
    var total = dayRates[i] * days;

    document.getElementById('test').innerHTML =
    person['firstName'] + " " + person['lastName'] + " You are booking " + hotels[i] + 
    ". <br> Number of days: " + days + " <br>Daily Rate: R" + dayRates[i] + "pps <br>Total: " + total;
    }
}
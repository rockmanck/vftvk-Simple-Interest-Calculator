function compute()
{
    // valuate inputs
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // calculate interest
    var interest = principal * years * (rate / 100);
    var targetYear = new Date().getFullYear() + parseInt(years);

    // output interest and format key inputs
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit <span class='highlight'>" + principal + "</span><br/>" 
        + "at an interest rate of <span class='highlight'>" + rate + "%</span><br/>"
        + "You will receive an amount of <span class='highlight'>" + interest + "</span>,<br/>"
        + "in the year <span class='highlight'>" + targetYear + "</span>";
}

// sync text value of the rate with the slider
function updateRateValue() {
    var val = document.getElementById("rate").value;
    document.getElementById("rateValue").innerHTML = val;
}

// rejects negative principal(amount) values
function validatePrincipal() {
    var input = document.getElementById("principal")
    var principal = input.value;

    if (principal == '' || parseInt(principal) <= 0) {
        alert('Enter a positive amount');
        input.focus();
    }
}
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * (rate / 100);
    var targetYear = new Date().getFullYear() + parseInt(years);

    var result = document.getElementById("result");
    result.innerHTML = "If you deposit <span class='highlight'>" + principal + "</span><br/>" 
        + "at an interest rate of <span class='highlight'>" + rate + "%</span><br/>"
        + "You will receive an amount of <span class='highlight'>" + interest + "</span>,<br/>"
        + "in the year <span class='highlight'>" + targetYear + "</span>";
}

function updateRateValue() {
    var val = document.getElementById("rate").value;
    document.getElementById("rateValue").innerHTML = val;
}

function validatePrincipal() {
    var input = document.getElementById("principal")
    var principal = input.value;
    if (parseInt(principal) <= 0) {
        alert('Enter a positive number');
        input.focus();
    }
}
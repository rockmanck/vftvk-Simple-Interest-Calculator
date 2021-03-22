function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * (rate / 100);
    var targetYear = new Date().getFullYear() + parseInt(years);

    var result = document.getElementById("result");
    result.innerHTML = "If you deposit " + principal + "<br/>" 
        + "at an interest rate of " + rate + "% <br/>"
        + "You will receive an amount of " + interest + ",<br/>"
        + "in the year " + targetYear;
}

function updateRateValue() {
    var val = document.getElementById("rate").value;
    document.getElementById("rateValue").innerHTML = val;
}
        
function submit() {
    var firstname = document.getElementById("firstname").value;
    var firstnameprint = document.getElementById("firstnameprint");
    var lastname = document.getElementById("lastname").value;
    var lastnameprint = document.getElementById("lastnameprint");
    var num1 = parseInt(document.getElementById("num1").value);
    var num1print = document.getElementById("num1print");
    var num2 = parseInt(document.getElementById("num2").value);
    var num2print = document.getElementById("num2print");
    var sum = num1 + num2;
    var sumprint = document.getElementById("sumprint");
    var error = document.getElementById("error")

    firstnameprint.textContent = "";
    lastnameprint.textContent = "";
    num1print.textContent = "";
    num2print.textContent = "";
    sumprint.textContent = "";
    error.textContent = "";

    var roman = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
    "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"];

    if (num1 < 1 || num1 > 10 || num2 < 1 || num2 > 10) {
        error.textContent = "The number has to be between 1 and 10!";
    } else {
        firstnameprint.textContent = "First Name: " + firstname;
        lastnameprint.textContent = "Last Name: " + lastname;
        num1print.textContent = "Number 1: " + num1;
        num2print.textContent = "Number 2: " + num2;
        sumprint.textContent = "Sum: " + roman[sum];
    }

    if (sum <= 7) {
        sumprint.style.color = "red"
    } else if (sum > 14) {
        sumprint.style.color = "green"
    } else {
        sumprint.style.color = "orange"
    }
}
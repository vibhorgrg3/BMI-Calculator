
var form = document.querySelector("form");
var ans = document.querySelector("#ans");
document.querySelector("#ans").style.display = "none";
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var height = document.getElementById("h");
    var weight = document.getElementById("w");
    console.log(height);

    console.log(weight.value);
    document.querySelector("#ans").style.display = "flex";
    var bmi = parseInt(weight.value) / (parseFloat(height.value) * parseFloat(height.value));
    document.querySelector(".bmi").textContent = "Your BMI is :" + bmi.toFixed(2);
})

form.addEventListener("reset", function (event) {
    document.querySelector("#ans").style.display = "none";
    document.querySelector(".bmi").textContent = "Your BMI is :";
})
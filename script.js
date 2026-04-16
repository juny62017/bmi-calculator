let calcBtn = document.getElementById("calc");
let resetBtn = document.getElementById("reset");
let resultText = document.getElementById("result");

calcBtn.onclick = function () {

    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;

    if (h == "") {
        resultText.innerText = "enter height";
        return;
    }

    if (w == "") {
        resultText.innerText = "enter weight";
        return;
    }

    let h2 = Number(h);
    let w2 = Number(w);

    if (h2 <= 0) {
        resultText.innerText = "height is not valid";
        return;
    }

    if (w2 <= 0) {
        resultText.innerText = "weight is not valid";
        return;
    }

    let meter = h2 / 100;
    let total = meter * meter;
    let bmi = w2 / total;
    let final = bmi.toFixed(2);

    let msg = "";

    if (final < 18.5) {
        msg = "Underweight";
    }
    else if (final < 25) {
        msg = "Normal";
    }
    else if (final < 30) {
        msg = "Overweight";
    }
    else {
        msg = "Obese";
    }

    resultText.innerText = "BMI: " + final + " - " + msg;
};

resetBtn.onclick = function () {

    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";

    resultText.innerText = "";
};
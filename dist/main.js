"use strict";
function firstBmi(height, weight) {
    let bmi = weight / (((height / 100) * height) / 100);
    return bmi;
}
const getweight = function (bmi) {
    if (bmi < 18.5)
        return "کمبود وزن";
    if (bmi >= 18.5 && bmi < 25)
        return " وزن سلامت";
    if (bmi >= 25 && bmi < 30)
        return " اضافه وزن";
    if (bmi >= 30)
        return "چاقی";
};
document.addEventListener("DOMContentLoaded", function () {
    //your code here ....
    const weight = document.querySelector("#weight");
    const height = document.querySelector("#height");
    const result = document.querySelector("#result");
    const calculateBtn = document.querySelector("#calculateBtn");
    calculateBtn.addEventListener("click", function () {
        if (height.value.trim() !== "" && weight.value.trim() !== "") {
            const parsedHeight = Number(height.value);
            const parsedWeight = Number(weight.value);
            if (!isNaN(parsedHeight) &&
                !isNaN(parsedWeight) &&
                parsedHeight > 0 &&
                parsedWeight > 0) {
                const bmi = firstBmi(parsedHeight, parsedWeight);
                result.textContent = `نتیجه تست شما:${bmi.toFixed(2)} (${getweight(bmi)})`;
            }
            else {
                result.textContent = "لطفا مقادیر معتبر قد و وزن خود را وارد نمایید!";
            }
        }
        else {
            result.textContent = "لطفا مقادیر معتبر قد و وزن خود را وارد نمایید!";
        }
    });
});

const sides = document.querySelectorAll(".input-side");
const calculateBtn = document.querySelector("#calculate-button");
const outputDiv = document.querySelector("#output");

function calculateSum(a,b){
    sumOfSquares = a*a + b*b;
    return sumOfSquares;
}
function calculateHypotenuse(){
    const sumOfSquares = calculateSum(Number(sides[0].value),Number(sides[1].value));
    const hypotenuse = Math.sqrt(sumOfSquares);
    outputDiv.innerText = "The length of Hypotenuse is " + hypotenuse;
}

calculateBtn.addEventListener("click", calculateHypotenuse)
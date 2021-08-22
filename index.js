const inputs = document.querySelectorAll(".input-angle");
const checkBtn = document.querySelector("#check-button");
const outputDiv = document.querySelector("#output");

function calculateSum(angle1,angle2,angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

function checkTriangle(){
    const sumOfAngles = calculateSum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles===180)
    outputDiv.innerText="Yes, The Angles Form A Triangle"
    else
    outputDiv.innerText="Nope! Better Luck Next Time"
}

checkBtn.addEventListener("click", checkTriangle)
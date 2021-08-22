const baseAndHeight = document.querySelectorAll(".inputs");
const calculateBtn = document.querySelector("#calculate-button");
const outputDiv = document.querySelector("#output");


function calculateArea(){
    
    const Area = 0.5*Number(baseAndHeight[0].value)*Number(baseAndHeight[1].value);
    outputDiv.innerText = "The Area of Triangle is " + Area;
}

calculateBtn.addEventListener("click", calculateArea)
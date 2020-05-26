//Getting HTML elements and adding eventListener to trigger function on-click
document.getElementById("archiveBtnOne").addEventListener("click", showFirstTask);
document.getElementById("archiveBtnTwo").addEventListener("click", showSecondTask);
document.getElementById("archiveBtnThree").addEventListener("click", showThirdTask);
document.getElementById("archiveBtnFour").addEventListener("click", showFourthTask);

let firstContent = document.getElementById("aOverviewOne");
let secondContent = document.getElementById("aOverviewTwo");
let thirdContent = document.getElementById("aOverviewThree");
let fourthContent = document.getElementById("aOverviewFour");


//Functions to show current object, and hide other stacked objects
function showFirstTask(){
    firstContent.style.display = "block";
    secondContent.style.display = "none";
    thirdContent.style.display = "none";
    fourthContent.style.display = "none";
}

 function showSecondTask(){
    firstContent.style.display = "none";
    secondContent.style.display = "block";
    thirdContent.style.display = "none";
    fourthContent.style.display = "none";
}

function showThirdTask(){
    firstContent.style.display = "none";
    secondContent.style.display = "none";
    thirdContent.style.display = "block";
    fourthContent.style.display = "none";
}

function showFourthTask(){
    firstContent.style.display = "none";
    secondContent.style.display = "none";
    thirdContent.style.display = "none";
    fourthContent.style.display = "block";
}












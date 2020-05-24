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
    document.getElementById("aOverviewOne").style.display = "block";
    document.getElementById("aOverviewTwo").style.display = "none";
    document.getElementById("aOverviewThree").style.display = "none";
    document.getElementById("aOverviewFour").style.display = "none";
}

 function showSecondTask(){
    document.getElementById("aOverviewOne").style.display = "none";
    document.getElementById("aOverviewTwo").style.display = "block";
    document.getElementById("aOverviewThree").style.display = "none";
    document.getElementById("aOverviewFour").style.display = "none";
}

function showThirdTask(){
    document.getElementById("aOverviewOne").style.display = "none";
    document.getElementById("aOverviewTwo").style.display = "none";
    document.getElementById("aOverviewThree").style.display = "block";
    document.getElementById("aOverviewFour").style.display = "none";
}

function showFourthTask(){
    document.getElementById("aOverviewOne").style.display = "none";
    document.getElementById("aOverviewTwo").style.display = "none";
    document.getElementById("aOverviewThree").style.display = "none";
    document.getElementById("aOverviewFour").style.display = "block";
}

/* Need to solve the repetative code above in a function */







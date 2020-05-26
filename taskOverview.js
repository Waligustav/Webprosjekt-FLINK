//Getting HTML elements and adding eventListener to trigger function on-click
document.getElementById("taskBtnOne").addEventListener("click", showFirstTask);
document.getElementById("taskBtnTwo").addEventListener("click", showSecondTask);
document.getElementById("taskBtnThree").addEventListener("click", showThirdTask);
document.getElementById("taskBtnFour").addEventListener("click", showFourthTask);

let firstContent = document.getElementById("overviewOne");
let secondContent = document.getElementById("overviewTwo");
let thirdContent = document.getElementById("overviewThree");
let fourthContent = document.getElementById("overviewFour");

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


/* const outputTarget = document.querySelector('[data-draggable="dragtarget"]');
const dropTarget = document.querySelector("#transportToArchivePic");

for(const dropTarget of drops){
  dropTarget.addEventListener('dragover', dragOver);
}
*/

/*
const transportToArchivePic = JSON.parse(window.localStorage.getItem("transportToArchivePic")) || [];
window.localStorage.setItem("transportToArchivePic", JSON.stringify(transportToArchivePic));
*/









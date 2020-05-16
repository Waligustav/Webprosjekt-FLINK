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
    document.getElementById("overviewOne").style.display = "block";
    document.getElementById("overviewTwo").style.display = "none";
    document.getElementById("overviewThree").style.display = "none";
    document.getElementById("overviewFour").style.display = "none";
}

 function showSecondTask(){
    document.getElementById("overviewOne").style.display = "none";
    document.getElementById("overviewTwo").style.display = "block";
    document.getElementById("overviewThree").style.display = "none";
    document.getElementById("overviewFour").style.display = "none";
}

function showThirdTask(){
    document.getElementById("overviewOne").style.display = "none";
    document.getElementById("overviewTwo").style.display = "none";
    document.getElementById("overviewThree").style.display = "block";
    document.getElementById("overviewFour").style.display = "none";
}

function showFourthTask(){
    document.getElementById("overviewOne").style.display = "none";
    document.getElementById("overviewTwo").style.display = "none";
    document.getElementById("overviewThree").style.display = "none";
    document.getElementById("overviewFour").style.display = "block";
}

/* The following is a non-functioning suggestion to solve the repetative code above in a function

document.getElementById("taskBtnOne").addEventListener("click", showContent);
document.getElementById("taskBtnTwo").addEventListener("click", showContent);
document.getElementById("taskBtnThree").addEventListener("click", showContent);
document.getElementById("taskBtnFour").addEventListener("click", showContent);

let buttonArray = ["taskBtnOne", "taskBtnTwo", "taskBtnThree", "taskBtnFour"];
let contentArray = [firstContent, secondContent, thirdContent, fourthContent];


function showContent(){
    for(let i = 0; i < buttonArray.length; i++){
        if(!buttonArray[i]){
            contentArray[i].style.display = "none";
            console.log("Content square #" + i + " hidden");
        }
            contentArray[i].style.display = "block";
            console.log("Content square #" + i + " visible");
    }
} 
*/







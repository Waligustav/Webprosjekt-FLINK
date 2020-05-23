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

(function(){
    if(
      !document.querySelectorAll || !('draggable' in document.createElement('div'))
      ){
        return; 
      }
    
    //get the collection of draggable items and add their draggable attribute
    for(
      var outputs = document.querySelectorAll('[data-draggable="dragtarget"]'), 
      count = outputs.length, 
      i = 0; i < count; i ++)
      {
        outputs[i].setAttribute('draggable', 'true');
      }

  //variable for storing the dragging target reference 
    var dragtarget = null;

    	//dragstart event to initiate mouse dragging
        document.addEventListener('dragstart', function(e){
          dragtarget = e.target;
          e.dataTransfer.setData('text', '');
        }, false);

        //dragover event to allow the drag by preventing its default
        document.addEventListener('dragover', function(e){
          if(dragtarget){
            e.preventDefault();
          }
        }, false);	

        //drop event to allow the element to be dropped into valid targets
        document.addEventListener('drop', function(e){
           if(e.target.getAttribute('data-draggable') == 'target'){
             e.target.appendChild(dragtarget);
             e.preventDefault();
          }
        }, false);
        
        //dragend event to clean-up after drop or abort
        document.addEventListener('dragend', function(e){
          dragtarget = null;
        }, false);  
 })();	









/*Trigger darkmode function Counter to increment per button-click */
let counter = 0;
function toggleDark(){
    counter++;

darkmodeButton.addEventListener("click", function () {
    bodyObj[0].style.backgroundImage = "url('images/wave2.png')";
});

const taskOutputE2 = document.getElementById("combinedOutput2");
const archiveOutput2 = document.getElementById("archiveOutput2");


if(taskOutputE2.newBtn.onclick) {
    archiveOutput2.appendChild(taskEl); 
}


switch (newDiv.style.backgroundColor = "rgb(8, 201, 60)") {
    case "category.work":
        archiveOutput2.appendChild(taskEl); 
        break;
    let bodyObject = document.body;
    bodyObject.classList.toggle("dark-mode");

    /* Import objects to change */
    let speechBubbleObject = document.getElementById("speechBubble2");
    let archiveTextObject = document.getElementById("archiveText");

    /* Even/Uneven counter toggles object change */
    if( (counter % 2) == 1 ){
        speechBubbleObject.style.backgroundColor = "black";
        archiveTextObject.style.color = "white";
    }else if( (counter % 2) == 0 ){
        speechBubbleObject.style.backgroundColor = "white";
        archiveTextObject.style.color = "black";
    }
}

}

//document.getElementById("test").innerHTML = window.localStorage.getItem("id");
/*
var getData = window.localStorage.getItem("taskList", "id");

var archivedwork = document.getElementById("archivedWork");
archivedwork.innerHTML = " ";

const archivedOutput = document.createElement("p");
const {participant, duetime, description} = task;

archivedOutput.innerHTML = participant + " " + duetime + " " + description;
archivedwork.appendChild(archivedOutput);
*/

function renderTask(){
    const taskOutput = JSON.parse(window.localStorage.getItem("taskList")) || [];
    


    // Gets HTML-output divs
    const taskOutputEl = document.getElementById("archivedWork");
    const taskOutputE2 = document.getElementById("archivedSubject");
    const taskOutputE3 = document.getElementById("archivedHobby");
    const taskOutputE4 = document.getElementById("archivedVarious");
    taskOutputEl.innerHTML = "";
    taskOutputE2.innerHTML = "";
    taskOutputE3.innerHTML = "";
    taskOutputE4.innerHTML = "";

    // Loop to put local-storage values into their matching output-tab
    for (const task of taskOutput) {
        // Progression system
        let newDiv = document.createElement("div"); 
        // Creates a new button and new text. It also puts the text and button together
        // Lager ny knapp, lager ny tekst + limer teksten på knappen

       
        const taskEl = document.createElement("div");
        const {participant, duetime, description} = task;
 
        // Output text
        taskEl.innerHTML = "<div id = 'taskInnerHTML' draggable = 'true'> <strong> Deltaker(e): </strong> " + participant +
                            "<br> <strong> Frist: </strong> " + duetime + "<br>" + "<strong> Beskrivelse: </strong> " + description  + "<br>";
        
        // Text into the different tabs
        switch (document.querySelector("#category").value && task.category) {
            case "work":
                taskOutputEl.appendChild(taskEl); 
                taskOutputEl.appendChild(newDiv); 
                taskOutputEl.appendChild(newBtn); 
                newBtn.onclick = function() {
                    newDiv.style.backgroundColor = "rgb(8, 201, 60)"; 
                }
                break;

            case "subjects":
                taskOutputE2.appendChild(taskEl); 
                taskOutputE2.appendChild(newDiv); 
                taskOutputE2.appendChild(newBtn); 
                newBtn.onclick = function() {
                    newDiv.style.backgroundColor = "rgb(8, 201, 60)"; 
                }
                break;

            case "hobby":
                taskOutputE3.appendChild(taskEl);
                taskOutputE3.appendChild(newDiv); 
                taskOutputE3.appendChild(newBtn); 
                newBtn.onclick = function() {
                    newDiv.style.backgroundColor = "rgb(8, 201, 60)"; 
                }
        
                break;

            case "various":
                taskOutputE4.appendChild(taskEl);
                taskOutputE4.appendChild(newDiv); 
                taskOutputE4.appendChild(newBtn); 
                newBtn.onclick = function() {
                    newDiv.style.backgroundColor = "rgb(8, 201, 60)"; 
                }
                break;
        }

    }
}


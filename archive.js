/* Trigger darkmode function 
+ Counter to increment per button-click */
let counterw1 = 0;
function toggleDarkArchive(){
    counterw1++;

    let bodyObject = document.body;
    bodyObject.classList.toggle("dark-mode");

    /* Import objects to change */
    let logoContainerObject = document.getElementById("archiveLogoContainer");

    /* Even/Uneven counter toggles object change */
    if( (counterw1 % 2) == 1 ){
        logoContainerObject.innerHTML = "<img src = 'Images/flink_logo_hvit_smol.png' id = 'logoImage' alt = 'Website logo image'>";
        logoContainerObject.style.marginTop = "41px";
    }else if( (counterw1 % 2) == 0 ){
        logoContainerObject.innerHTML = "<img src = 'Images/flink_logo_sort_smol.png' id = 'logoImage' alt = 'Website logo image'>";
        logoContainerObject.style.marginTop = "32px";
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
/* Toggle nightmode-slider  -  get/set localstorage values */
const togglew1 = document.querySelector('.toggle-input');
const initialStatew1 = localStorage.getItem('toggleState') == 'true';
togglew1.checked = initialStatew1;

/* Eventlistener triggers slider function*/
togglew1.addEventListener('change', slideDark() );

function slideDark() {
    localStorage.setItem('toggleState', togglew1.checked);
}
//Trigger function upon page update to reset slider
slideDark();




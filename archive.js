// Gets data from localStorage
function renderTask(){
    const taskOutput = JSON.parse(window.localStorage.getItem("taskList")) || [];

    // Gets HTML-output divs
    const taskOutputEl = document.getElementById("combinedOutput");
    const taskOutputE2 = document.getElementById("combinedOutput2");
    const taskOutputE3 = document.getElementById("combinedOutput3");
    const taskOutputE4 = document.getElementById("combinedOutput4");
    taskOutputEl.innerHTML = "";
    taskOutputE2.innerHTML = "";
    taskOutputE3.innerHTML = "";
    taskOutputE4.innerHTML = "";

    // Loop to put local-storage values into their matching output-tab
    for (const task of taskOutput) {
        // Page will run normally after drag-and-dropping a task
        if (task.deleted) {
            continue;
        }

        // Progression system
        const taskEl = document.createElement("div");
        const {participant, duetime, description} = task;

        // PROGRESSION-BAR
        let newDiv = document.createElement("div"); 
        let newBtn = document.createElement("button");
        let btnText = document.createTextNode("Fullfør");
        newBtn.appendChild(btnText);
        newDiv.style.border = "3px solid black";
        newDiv.style.height = "10px";
        newDiv.style.backgroundColor = task.color; 
         
        newBtn.onclick = function() {
            if(task.color === "red"){
                task.color = "green"; 
                localStorage.setItem('taskList', JSON.stringify(taskOutput)); 
                newDiv.style.backgroundColor = task.color; 
            }
            else if(task.color === "green"){
                task.color = "red"; 
                localStorage.setItem('taskList', JSON.stringify(taskOutput)); 
                newDiv.style.backgroundColor = task.color; 
            }
        }

        // Output text
        taskEl.innerHTML = "<div id = 'taskInnerHTML' taskId = '" + task.id + "' draggable = 'true'> <strong> Deltaker(e): </strong> " + participant +
                            "<br> <strong> Frist: </strong> " + duetime + "<br>" + "<strong> Beskrivelse: </strong> " + description  + "<br> </div>" ;
     
        // Text into the different tabs
        switch (document.querySelector("#category").value && task.category) {
            case "work":
                taskOutputEl.appendChild(taskEl); 
                taskOutputEl.appendChild(newDiv); 
                taskOutputEl.appendChild(newBtn); 
                break;

            case "subjects":
                taskOutputE2.appendChild(taskEl);
                taskOutputE2.appendChild(newDiv); 
                taskOutputE2.appendChild(newBtn);  
                break;

            case "hobby":
                taskOutputE3.appendChild(taskEl);
                taskOutputE3.appendChild(newDiv); 
                taskOutputE3.appendChild(newBtn); 
                break;
            case "various":
                taskOutputE4.appendChild(taskEl);
                taskOutputE4.appendChild(newDiv); 
                taskOutputE4.appendChild(newBtn); 
                break;
        }
    }
} 

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




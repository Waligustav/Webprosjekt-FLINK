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
<<<<<<< HEAD
=======
        // Page will run normally after drag-and-dropping a task
        if (task.deleted) {
            continue;
        }

        // Progression system
>>>>>>> 6ead9b62ba07e8b1bffc8aebf1ceec15510ba4e4
        const taskEl = document.createElement("div");
        const {participant, duetime, description} = task;

        // PROGRESSION-BAR
        let newDiv = document.createElement("div"); 
        let newBtn = document.createElement("button");
        let btnText = document.createTextNode("Fullfør");
        newBtn.appendChild(btnText);
<<<<<<< HEAD

       newDiv.style.height = "10px";newDiv.style.backgroundColor = task.color;
         
        newBtn.onclick = function() {
            if(task.color === "red"){
                task.color = "green"; 
                localStorage.setItem('taskList', JSON.stringify(taskOutput)); 
                newDiv.style.backgroundColor=task.color
            }
            else if(task.color === "green"){
                task.color = "red"; 
                localStorage.setItem('taskList', JSON.stringify(taskOutput)); 
                newDiv.style.backgroundColor = task.color; 
            }
        }

=======
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

>>>>>>> 6ead9b62ba07e8b1bffc8aebf1ceec15510ba4e4
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
<<<<<<< HEAD
}
    
=======
}   

>>>>>>> 6ead9b62ba07e8b1bffc8aebf1ceec15510ba4e4
// Adds user-input data to localStorage
function addTask(event) {
    event.preventDefault();
     
    const category = document.querySelector("[name = 'category']").value;
    const participant = document.querySelector("[name = 'participant']").value;
    const duetime = document.querySelector("[name = 'duetime']").value;
    const description = document.querySelector("[name = 'description']").value;
<<<<<<< HEAD
=======
    const deleted = false;
>>>>>>> 6ead9b62ba07e8b1bffc8aebf1ceec15510ba4e4
    let color = "red"; 
    
    //Generating unique id 
    var task = {id: Date.now().toString() + 1 , category, participant, duetime, description, color, deleted};

    var taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList.push(task);
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
  
    renderTask();
<<<<<<< HEAD

=======
>>>>>>> 6ead9b62ba07e8b1bffc8aebf1ceec15510ba4e4
    event.target.reset();
}


// Runs when new inputs get added
window.addEventListener("storage", function(event) {
        if (event.key === "taskList") {
            renderTask();
        }
});
    
// Output will stay even when user update the page
renderTask();

/* Trigger darkmode function 
+ Counter to increment per button-click */
let counterw2 = 0;
function toggleDark(){
    counterw2++;

    let bodyObject = document.body;
    bodyObject.classList.toggle("dark-mode");

    /* Import objects to change */
    let infoBubbleObject = document.getElementById("infoBubbleBorder");
    let logoImageObject = document.getElementById("logoContainer");

    /* Even/Uneven counter toggles object change */
    if( (counterw2 % 2) == 1 ){
        infoBubbleObject.style.backgroundColor = "black";
        logoImageObject.innerHTML = "<img src = 'Images/flink_logo_hvit_smol.png' id = 'logoImage' alt = 'Website logo image'>";
        logoImageObject.style.marginTop = "41px";
    }else if( (counterw2 % 2) == 0 ){
        infoBubbleObject.style.backgroundColor = "white";
        logoImageObject.innerHTML = "<img src = 'Images/flink_logo_sort_smol.png' id = 'logoImage' alt = 'Website logo image'>";
        logoImageObject.style.marginTop = "32px";
    }
}

const togglew2 = document.querySelector('.toggle-input');
const initialStatew2 = localStorage.getItem('toggleStatew2') == 'true';
togglew2.checked = initialStatew2;

togglew2.addEventListener('change', function() {
  localStorage.setItem('toggleStatew2', togglew2.checked);
});


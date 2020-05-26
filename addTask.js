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
        // Progression system
        let newDiv = document.createElement("div"); 
        // Creates a new button and new text. It also puts the text and button together
        // Lager ny knapp, lager ny tekst + limer teksten på knappen
        let newBtn = document.createElement("button");
        let btnText = document.createTextNode("Fullfør");
        newBtn.appendChild(btnText);
        newDiv.style.border = "3px solid black";
        newDiv.style.height = "10px";   
        newDiv.style.backgroundColor = "orange"; 

       
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

    
// Adds user-input data to localStorage
function addTask(event) {
    event.preventDefault();
    
    const category = document.querySelector("[name = 'category']").value;
    const participant = document.querySelector("[name = 'participant']").value;
    const duetime = document.querySelector("[name = 'duetime']").value;
    const description = document.querySelector("[name = 'description']").value;
    const color = false;
    //var nextId = 0;
    
    var task = {id: Date.now().toString() + 1, category, participant, duetime, description, color};

    var taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList.push(task);

    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    renderTask();


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
let counter = 0;
function toggleDark(){
    counter++;

    let bodyObject = document.body;
    bodyObject.classList.toggle("dark-mode");

    /* Import objects to change */
    let speechBubbleObject = document.getElementById("speechBubble");
    let logoTextObject = document.getElementById("logoText");

    /* Even/Uneven counter toggles object change */
    if( (counter % 2) == 1 ){
        speechBubbleObject.style.backgroundColor = "black";
        logoTextObject.style.color = "white";
    }else if( (counter % 2) == 0 ){
        speechBubbleObject.style.backgroundColor = "white";
        logoTextObject.style.color = "black";
    }
}


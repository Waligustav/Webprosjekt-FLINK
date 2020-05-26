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
        newDiv.style.border = "1px solid black";
        newDiv.style.height = "10px";
        newDiv.style.backgroundColor = task.color; 
         
        newBtn.onclick = function() {
            if(task.color === "#900C3F"){
                task.color = "#00BFA6"; 
                localStorage.setItem('taskList', JSON.stringify(taskOutput)); 
                newDiv.style.backgroundColor = task.color; 
            }
            else if(task.color === "#00BFA6"){
                task.color = "#900C3F"; 
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

// Adds user-input data to localStorage
function addTask(event) {
    event.preventDefault();
     
    const category = document.querySelector("[name = 'category']").value;
    const participant = document.querySelector("[name = 'participant']").value;
    const duetime = document.querySelector("[name = 'duetime']").value;
    const description = document.querySelector("[name = 'description']").value;
    const deleted = false;
    let color = "#900C3F"; 
    
    //Generating unique id 
    var task = {id: Date.now().toString() + 1 , category, participant, duetime, description, color, deleted};

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



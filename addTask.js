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
        const taskEl = document.createElement("div");
        const {participant, duetime, description} = task;
        
        // Output text
        taskEl.innerHTML = "<div style = 'border: 1px solid black' draggable = 'true' id='userOutput'> <strong> Deltaker(e): </strong> " + participant +
                            "<br> <strong> Frist: </strong> " + duetime + "<br>" + 
                            "<strong> Beskrivelse: </strong> " + description + "<div>";
        
        // Text into the different tabs
        switch (document.querySelector("#category").value && task.category) {
            case "work":
                taskOutputEl.appendChild(taskEl);
                break;

            case "subjects":
                taskOutputE2.appendChild(taskEl);   
                break;

            case "hobby":
                taskOutputE3.appendChild(taskEl);
                break;

            case "various":
                taskOutputE4.appendChild(taskEl);
                break;
        }

        // Variable containing todays date (dd/mm/yyyy)
        var currentDate = new Date();
        currentDate = ("0"+currentDate.getDate()).slice(-2) + "/" + ("0"+(currentDate.getMonth() + 1)).slice(-2) + "/" + currentDate.getFullYear();

        // Display clickable notification image if any projects deadline has passed
        if(task.duetime < currentDate){
            document.getElementById("notificationBell").style.display = "block";
        }else{
            document.getElementById("notificationBell").style.display = "none";
        }

    }
}

// Alerts notification message on notification image onclick
function notificationTrigger(){
    alert("Du har prosjekt med utgått tidsfrist!");
}

    
// Adds user-input data to localStorage
function addTask(event) {
    event.preventDefault();
    
    const category = document.querySelector("[name = 'category']").value;
    const participant = document.querySelector("[name = 'participant']").value;
    const duetime = document.querySelector("[name = 'duetime']").value;
    const description = document.querySelector("[name = 'description']").value;
    
    const task = {category, participant, duetime, description};
    
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
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

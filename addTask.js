// gets data from localStorage
function renderTask(){
    const taskOutput = JSON.parse(window.localStorage.getItem("taskList")) || [];
    
    // with subject
    const taskOutputEl = document.getElementById("combinedOutput");
    const taskOutputE2 = document.getElementById("combinedOutput2");
    const taskOutputE3 = document.getElementById("combinedOutput3");
    const taskOutputE4 = document.getElementById("combinedOutput4");
    taskOutputEl.innerHTML = "";

    for (const task of taskOutput) {
        const taskEl = document.createElement("div");
        const {participant, duetime, description} = task;
        
        
        taskEl.innerHTML = "<div style='border: 1px solid black'> <strong>Deltaker(e):</strong> " + participant +
                            "<br> <strong>Frist:</strong> " + duetime + "<br>" + 
                            "<strong>Beskrivelse:</strong " + description + "<div><br>";
        

        taskOutputEl.appendChild(taskEl);

    }

    

    /* if(document.querySelector("#dropdown").value == "school"){
            taskOutputEl.appendChild(taskEl);
        }else if (document.querySelector("#dropdown").value == "sport"){
            taskOutputE2.appendChild(taskE1);
        }else if (document.querySelector("#dropdown").value == "leisure"){
            taskOutputE3.appendChild(taskE1);
        }else{
            taskOutputE4.appendChild(taskE1);
        } */

    }
    
// adds data to localStorage
function addTask(event) {
    event.preventDefault();
    
    const dropdown = document.querySelector("[name = 'dropdown']").value;
    const participant = document.querySelector("[name = 'participant']").value;
    const duetime = document.querySelector("[name = 'duetime']").value;
    const description = document.querySelector("[name = 'description']").value;
    
    const task = {dropdown, participant, duetime, description};
    
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList.push(task);

    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    renderTask();
        
    event.target.reset();
}

// runs when new inputs get added
window.addEventListener("storage", function(event) {
        if (event.key === "taskList") {
            renderTask();
        }
});
    
// output will stay even when user update the page
renderTask();

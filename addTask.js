// gets data from localStorage
function renderTask(){
    const taskOutput = JSON.parse(window.localStorage.getItem("taskList")) || [];
    
    const taskOutputEl = document.getElementById("combinedOutput");
    const taskOutputE2 = document.getElementById("combinedOutput2");
    const taskOutputE3 = document.getElementById("combinedOutput3");
    const taskOutputE4 = document.getElementById("combinedOutput4");
    taskOutputEl.innerHTML = "";
    taskOutputE2.innerHTML = "";
    taskOutputE3.innerHTML = "";
    taskOutputE4.innerHTML = "";
    for (const task of taskOutput) {
        const taskEl = document.createElement("div");
        const {subject, participant, duetime, description} = task;
        
        taskEl.innerHTML = "<div><b> Fag: </b>" + subject + "<br><b> Deltaker(e): </b>" + participant +
                            "<br><b> Frist: </b>" + duetime + "<br>" + 
                            "<b>Beskrivelse: </b>" + description + "<div><br>";
        
    /*
        if (dropdown) {
            taskEl.innerHTML = "<div> Fag: " + subject + "<br> Deltaker(e): " + participant +
                            "<br> Frist: " + duetime + "<br>" + 
                            "Beskrivelse: " + description + "<div><br>";
        } else {
            taskEl.innerHTML = "<div> Deltaker(e): " + participant +
                            "<br> Frist: " + duetime + "<br>" + 
                            "Beskrivelse: " + description + "<div><br>";
        }
    */

    
    taskOutputEl.appendChild(taskEl);

        
    }
}
    
// adds data to localStorage
function addTask(event) {
    event.preventDefault();
    
    const dropdown = document.querySelector("[name = 'dropdown']").value;
    const subject = document.querySelector("[name = 'subject']").value;
    const participant = document.querySelector("[name = 'participant']").value;
    const duetime = document.querySelector("[name = 'duetime']").value;
    const description = document.querySelector("[name = 'description']").value;
    
    const task = {dropdown, subject, participant, duetime, description};
    
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

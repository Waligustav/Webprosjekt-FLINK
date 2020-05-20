// gets data from localStorage
function renderTask(){
    const taskOutput = JSON.parse(window.localStorage.getItem("taskList")) || [];
    
    const taskOutputEl = document.getElementById("combinedOutput");
    const taskOutputEl2 = document.getElementById("combinedOutput2");
    const taskOutputEl3 = document.getElementById("combinedOutput3");
    const taskOutputEl4 = document.getElementById("combinedOutput4");
    taskOutputEl.innerHTML = "";
    taskOutputEl2.innerHTML = "";
    taskOutputEl3.innerHTML = "";
    taskOutputEl4.innerHTML = "";

    for (const task of taskOutput) {
        const taskEl = document.createElement("div");
        const {participant, duetime, description} = task;
        
        
        taskEl.innerHTML = "<div style = 'border: 1px solid rgb (0, 0, 0)'> <strong> Deltaker(e): </strong> " + participant +
                            "<br> <strong> Frist: </strong> " + duetime + "<br>" + 
                            "<strong> Beskrivelse: </strong> " + description + "<div><br>";
        
        /*if (document.querySelector('#dropdown').value == 'school'){
            taskEl.innerHTML = "<div> Fag: " + subject + "<br> Deltaker(e): " + participant +
            "<br> Frist: " + duetime + "<br>" + 
            "Beskrivelse: " + description + "<div><br>";
        } else {
            taskEl.innerHTML = "<div> Deltaker(e): " + participant +
                            "<br> Frist: " + duetime + "<br>" + 
                            "Beskrivelse: " + description + "<div><br>";
        } */

        if (document.querySelector("#dropdown").value == "work"){
            taskOutputEl.appendChild(taskEl);

        } else if (document.querySelector("#dropdown").value == "subjects"){
            taskOutputEl2.appendChild(taskEl);

        } else if (document.querySelector("#dropdown").value == "various"){
            taskOutputEl3.appendChild(taskEl);
            
        } else{
            taskOutputEl4.appendChild(taskEl);
        } 


    taskOutputEl.appendChild(taskEl);
    taskOutputEl2.appendChild(taskEl);
    taskOutputEl3.appendChild(taskEl);
    taskOutputEl4.appendChild(taskEl);


    }
    

    
/*
     if (document.querySelector("#dropdown").value == "work"){
            taskOutputEl.appendChild(taskEl);
        } else if (document.querySelector("#dropdown").value == "subjects"){
            taskOutputE2.appendChild(taskE1);
        } else if (document.querySelector("#dropdown").value == "various"){
            taskOutputE3.appendChild(taskE1);
        } else{
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

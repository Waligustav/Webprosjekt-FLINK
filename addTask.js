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
        let newDiv = document.createElement("div"); 
        // Lager ny knapp, lager ny tekst + limer teksten på knappen
        let newBtn = document.createElement("button");
        let btnText = document.createTextNode("Fullfør");
        newBtn.appendChild(btnText);
        newDiv.style.border = "3px solid black";
        newDiv.style.height = "10px";   
        newDiv.style.backgroundColor = "orange"; 

        newBtn.onclick = function() {
            newDiv.style.backgroundColor = "green"; 
        }

        const taskEl = document.createElement("div");
        const {participant, duetime, description} = task;
 
        // Output text

        taskEl.innerHTML = "<div style = 'border: 1px solid black' draggable = 'true'> <strong> Deltaker(e): </strong> " + participant +
                            "<br> <strong> Frist: </strong> " + duetime + "<br>" + 
                            "<strong> Beskrivelse: </strong> " + description  + "<br>" +
                            "<button onclick='move()'>Fullfør</button>" +
                            "<div id='myProgress'> <div id='myBar'></div>" + 
                          "</div></div>";

                taskEl.innerHTML = "<div id = 'taskInnerHTML' draggable = 'true'> <strong> Deltaker(e): </strong> " + participant +
                            "<br> <strong> Frist: </strong> " + duetime + "<br>" + "<strong> Beskrivelse: </strong> " + description  + "<br>";

                            

        //<input type = 'checkbox' id = 'myCheck' onclick = 'myFunction()'> --> kan fjernes senere bare noe jeg startet med
        
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
/*function notificationTrigger(){
    alert("Du har prosjekt med utgått tidsfrist!");
}*/

    
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


/*
var progressbars="";
  for (var i = 1; i <=10; i++) { 
    progressbars+='<div class="progress">'
        +'<div class="progress-bar" role="progressbar" style="width: '+i+'%" aria-valuenow="'+i+'" aria-valuemin="0" aria-valuemax="100">'+i+'%</div>'
    +'</div>';
  }
   document.querySelector(".feefo").innerHTML=progressbars; */

// Runs when new inputs get added
window.addEventListener("storage", function(event) {
        if (event.key === "taskList") {
            renderTask();
        }
});

    
// Output will stay even when user update the page
renderTask();





/*
function makeBoxAndBtn(){
        let newDiv = document.createElement("div"); 
        // Lager ny knapp, lager ny tekst + limer teksten på knappen
        let newBtn = document.createElement("button");
        let btnText = document.createTextNode("Fullfør");
        newBtn.appendChild(btnText);   

        newDiv.style.border = "3px solid black";
        newDiv.style.height = "70px";   
        newDiv.style.backgroundColor = "red"; 

        taskOutputEl.appendChild(newDiv); 
        taskOutputEl.appendChild(newBtn); 

        newBtn.onclick = function() {
            newDiv.style.backgroundColor = "green"; 
        }
}
*/

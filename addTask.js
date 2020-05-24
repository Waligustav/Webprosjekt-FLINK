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
        
        // the output text
                /* Dette er den opprinnelige jeg lagde før vi skulle implementere status */
        /*taskEl.innerHTML = "<div id = 'taskInnerHTML' draggable = 'true'> <strong> Deltaker(e): </strong> " + participant +
                            "<br> <strong> Frist: </strong> " + duetime + "<br>" + 
                            "<strong> Beskrivelse: </strong> " + description  + "<br>" +
                            "<button onclick='move()'>Fullført</button>" +
                            "<div id='myProgress'>" + "<div id='myBar'></div>" + 
                          "</div></div>";*/

                taskEl.innerHTML = "<div id = 'taskInnerHTML' draggable = 'true'> <strong> Deltaker(e): </strong> " + participant +
                            "<br> <strong> Frist: </strong> " + duetime + "<br>" + 
                            "<strong> Beskrivelse: </strong> " + description  + "<br>" +
                            "<button id = 'btn2'>Fullført</button> </div>";

        //<input type = 'checkbox' id = 'myCheck' onclick = 'myFunction()'> --> kan fjernes senere bare noe jeg startet med
        
        // into the different subjects
        switch (document.querySelector("#category").value && task.category) {
            case "work":
                taskOutputEl.appendChild(taskEl);
                taskOutputEl.appendChild(status());
                break;

            case "subjects":
                taskOutputEl2.appendChild(taskEl);   
                break;

            case "hobby":
                taskOutputEl3.appendChild(taskEl);
                break;

            case "various":
                taskOutputEl4.appendChild(taskEl);
                break;
        }

        
    // koden til Laurent
    btn2.onclick = function status() {
        
        var newDiv = document.createElement("div");
        
        var newBtn = document.createElement("buttom");
        var btnText = document.createTextNode("Fullfør");
        newBtn.appendChild(btnText);

        newDiv.style.border = "3px solid black";
        newDiv.style.height = "40px";
        newDiv.style.backgroundColor = "red";

        taskEl.appendChild(newDiv);
        taskEl.appendChild(newBtn);

        newBtn.onclick = function() {
            newDiv.style.backgroundColor = "green";
        }

    }

    }



    }
    
// adds data to localStorage
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


const btn2 = document.getElementById("btn2");
const statusTasks = document.getElementById("statusTasks");

btn2.onclick = function() {
    var newDiv = document.createElement("div");
    
    var newBtn = document.createElement("buttom");
    var btnText = document.createTextNode("Fullfør");
    newBtn.appendChild(btnText);

    newDiv.style.border = "3px solid black";
    newDiv.style.height = "40px";
    newDiv.style.backgroundColor = "red";

    taskEl.appendChild(newDiv);
    taskEl.appendChild(newBtn);

    newBtn.onclick = function() {
        newDiv.style.backgroundColor = "green";
    }

}

/*
var progressbars="";
  for (var i = 1; i <=10; i++) { 
    progressbars+='<div class="progress">'
        +'<div class="progress-bar" role="progressbar" style="width: '+i+'%" aria-valuenow="'+i+'" aria-valuemin="0" aria-valuemax="100">'+i+'%</div>'
    +'</div>';
  }
   document.querySelector(".feefo").innerHTML=progressbars; */

// runs when new inputs get added
window.addEventListener("storage", function(event) {
        if (event.key === "taskList") {
            renderTask();
        }
});
    
// output will stay even when user update the page
renderTask();

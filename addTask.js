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

// Adds user-input data to localStorage
function addTask(event) {
    event.preventDefault();
     
    const category = document.querySelector("[name = 'category']").value;
    const participant = document.querySelector("[name = 'participant']").value;
    const duetime = document.querySelector("[name = 'duetime']").value;
    const description = document.querySelector("[name = 'description']").value;
    const deleted = false;
    let color = "red"; 
    
<<<<<<< HEAD
    var task = {id: Date.now().toString() + 1, category, participant, duetime, description, color};
=======
    //Generating unique id 
    var task = {id: Date.now().toString() + 1 , category, participant, duetime, description, color, deleted};
>>>>>>> 4c527cd07ed649705c911ab975be5533db137e3c

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


//IIFE function for drag and drop
(function(){
    if(!document.querySelectorAll || !('draggable' in document.createElement('div')))
    {
        return; 
    }
    
    var taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    
    //get the collection of draggable items and add their draggable attribute
    for(var outputs = document.querySelectorAll('[data-draggable="dragtarget"]'), 
      count = outputs.length, 
      i = 0; i < count; i ++)
      {
        outputs[i].setAttribute('draggable', 'true');
      }
      

  //variable for storing the dragging target reference 
    var dragtarget = null;

    	//DRAGSTART event to initiate mouse dragging
        document.addEventListener('dragstart', function(e){
            dragtarget = e.target;
             e.dataTransfer.setData("taskId", dragtarget.getAttribute("taskId"));   
        }, false);

        //DRAGOVER event to allow the drag by preventing its default
        document.addEventListener('dragover', function(e){
          if(dragtarget){
            e.preventDefault();
          }
        }, false);	
            
        //DRAGDROP event to allow the element to be dropped into valid targets
        document.addEventListener('drop', function(e){
       
           if(e.target.getAttribute('data-draggable') == 'target'){
                const taskId = e.dataTransfer.getData("taskId");
                var taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
                const task = taskList.find(task => task.id === taskId);
                task.deleted = true;

                window.localStorage.setItem("taskList", JSON.stringify(taskList));
                
                e.target.appendChild(dragtarget);
                e.preventDefault();
                renderTask();
            }
        }, false);
        
        //DRAGEND event to clean-up after drop or abort
        document.addEventListener('dragend', function(e){
        dragtarget = null;
        }, false);  
 })();


/* Trigger darkmode function 
+ Counter to increment per button-click */
let counter = 0;
function toggleDark(){
    counter++;

    let bodyObject = document.body;
    bodyObject.classList.toggle("dark-mode");

    /* Import objects to change */
    let speechBubbleObject = document.getElementById("infoBubbleBorder");
    let logoTextObject = document.getElementById("logoContainer");

    /* Even/Uneven counter toggles object change */
    if( (counter % 2) == 1 ){
        speechBubbleObject.style.backgroundColor = "black";
        logoTextObject.style.color = "white";
    }else if( (counter % 2) == 0 ){
        speechBubbleObject.style.backgroundColor = "white";
        logoTextObject.style.color = "black";
    }
}


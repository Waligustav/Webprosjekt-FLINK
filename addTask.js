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
        taskEl.innerHTML = "<div id = 'taskInnerHTML' draggable = 'true' id='userOutput'> <strong> Deltaker(e): </strong> " + participant +
                            "<br> <strong> Frist: </strong> " + duetime + "<br>" + "<strong> Beskrivelse: </strong> " + description  + "<br>";
        
        // Text into the different tabs
        switch (document.querySelector("#category").value && task.category) {
            case "work":
                taskOutputEl.appendChild(taskEl); 
                taskOutputEl.appendChild(newDiv); 
                taskOutputEl.appendChild(newBtn); 
                newBtn.onclick = function() {
                    newDiv.style.backgroundColor = "green"; 
                }
                break;

            case "subjects":
                taskOutputE2.appendChild(taskEl); 
                taskOutputE2.appendChild(newDiv); 
                taskOutputE2.appendChild(newBtn); 
                newBtn.onclick = function() {
                    newDiv.style.backgroundColor = "green"; 
                }
                break;

            case "hobby":
                taskOutputE3.appendChild(taskEl);
                taskOutputE3.appendChild(newDiv); 
                taskOutputE3.appendChild(newBtn); 
                newBtn.onclick = function() {
                    newDiv.style.backgroundColor = "green"; 
                }
        
                break;

            case "various":
                taskOutputE4.appendChild(taskEl);
                taskOutputE4.appendChild(newDiv); 
                taskOutputE4.appendChild(newBtn); 
                newBtn.onclick = function() {
                    newDiv.style.backgroundColor = "green"; 
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
    
    const task = {category, participant, duetime, description, color};

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

//IIFE function for drag and drop
(function(){
    if(!document.querySelectorAll || !('draggable' in document.createElement('div')))
    {
        return; 
    }
    
    //get the collection of draggable items and add their draggable attribute
    for(var outputs = document.querySelectorAll('[data-draggable="dragtarget"]'), 
      count = outputs.length, 
      i = 0; i < count; i ++)
      {
        outputs[i].setAttribute('draggable', 'true');
      }

  //variable for storing the dragging target reference 
    var dragtarget = null;

    	//dragstart event to initiate mouse dragging
        document.addEventListener('dragstart', function(e){
          dragtarget = e.target;
          e.dataTransfer.setData('text', '');
         
        }, false);

        //dragover event to allow the drag by preventing its default
        document.addEventListener('dragover', function(e){
          if(dragtarget){
            e.preventDefault();
          }
        }, false);	

        //drop event to allow the element to be dropped into valid targets
        document.addEventListener('drop', function(e){
           if(e.target.getAttribute('data-draggable') == 'target'){
             e.target.appendChild(dragtarget);
             e.preventDefault();
          }
        }, false);
        
        //dragend event to clean-up after drop or abort
        document.addEventListener('dragend', function(e){
          dragtarget = null;
        }, false);  
 })();	
 
/* Trigger darkmode function */
let darkmodeButton = document.getElementById("darkmodeBtn");
let bodyObj = document.getElementsByTagName("body");

darkmodeButton.addEventListener("click", function () {
    bodyObj[0].style.backgroundImage = "url('images/wave2.png')"
});



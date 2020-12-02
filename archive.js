// Gets data from localStorage

function renderArchive(){
    const taskOutput = JSON.parse(window.localStorage.getItem("taskList")) || [];
    // Gets HTML-output divs
    const outputWork = document.getElementById("archivedWork");
    const outputSubject = document.getElementById("archivedSubject");
    const outputHobby = document.getElementById("archivedHobby");
    const outputVarious = document.getElementById("archivedVarious");
    
    outputWork.innerHTML = "";
    outputSubject.innerHTML = "";
    outputHobby.innerHTML = "";
    outputVarious.innerHTML = "";

    // Loop to put local-storage values into their matching output-tab
    for (const task of taskOutput) {
        const {participant, duetime, description} = task;
        const taskEl = document.createElement("div");
        
        // Output text
        taskEl.innerHTML = "<div id = 'taskInnerHTML' taskId = '" + task.id +"'> <strong> Deltaker(e): </strong> " + participant +
                            "<br> <strong> Frist: </strong> " + duetime + "<br>" + "<strong> Beskrivelse: </strong> " + 
                            description  + "<br> </div><hr id='hLine'</hr>" ;

        // Text into the different tabs
        if (task.deleted === true){
            switch(task.category){
                case "work": 
                    outputWork.appendChild(taskEl);
                    break;

                case "subjects":
                    outputSubject.appendChild(taskEl); 
                    break;

                case "hobby":
                    outputHobby.appendChild(taskEl); 
                    break;

                case "various":
                    outputVarious.appendChild(taskEl);
                    break;
            }      
        }
    } 
};

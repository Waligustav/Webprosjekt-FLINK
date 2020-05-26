<<<<<<< HEAD
/* Trigger darkmode function 
+ Counter to increment per button-click */
let counterw1 = 0;
function toggleDarkArchive(){
    counterw1++;

    let bodyObject = document.body;
    bodyObject.classList.toggle("dark-mode");

    /* Import objects to change */
    let logoContainerObject = document.getElementById("archiveLogoContainer");

    /* Even/Uneven counter toggles object change */
    if( (counterw1 % 2) == 1 ){
        logoContainerObject.innerHTML = "<img src = 'Images/flink_logo_hvit_smol.png' id = 'logoImage' alt = 'Website logo image'>";
        logoContainerObject.style.marginTop = "41px";
    }else if( (counterw1 % 2) == 0 ){
        logoContainerObject.innerHTML = "<img src = 'Images/flink_logo_sort_smol.png' id = 'logoImage' alt = 'Website logo image'>";
        logoContainerObject.style.marginTop = "32px";
    }
}

const togglew1 = document.querySelector('.toggle-input');
const initialStatew1 = localStorage.getItem('toggleState') == 'true';
togglew1.checked = initialStatew1;

togglew1.addEventListener('change', function() {
  localStorage.setItem('toggleState', togglew1.checked);
});

=======
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
>>>>>>> 6ead9b62ba07e8b1bffc8aebf1ceec15510ba4e4

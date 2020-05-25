/* Trigger darkmode function 
+ Counter to increment per button-click */
let counter = 0;
function toggleDark(){
    counter++;

darkmodeButton.addEventListener("click", function () {
    bodyObj[0].style.backgroundImage = "url('images/wave2.png')";
});

const taskOutputE2 = document.getElementById("combinedOutput2");
const archiveOutput2 = document.getElementById("archiveOutput2");


if(taskOutputE2.newBtn.onclick) {
    archiveOutput2.appendChild(taskEl); 
}


switch (newDiv.style.backgroundColor = "rgb(8, 201, 60)") {
    case "category.work":
        archiveOutput2.appendChild(taskEl); 
        break;
    let bodyObject = document.body;
    bodyObject.classList.toggle("dark-mode");

    /* Import objects to change */
    let speechBubbleObject = document.getElementById("speechBubble2");
    let archiveTextObject = document.getElementById("archiveText");

    /* Even/Uneven counter toggles object change */
    if( (counter % 2) == 1 ){
        speechBubbleObject.style.backgroundColor = "black";
        archiveTextObject.style.color = "white";
    }else if( (counter % 2) == 0 ){
        speechBubbleObject.style.backgroundColor = "white";
        archiveTextObject.style.color = "black";
    }
}
}

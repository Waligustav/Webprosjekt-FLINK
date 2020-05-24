/* Trigger darkmode function 
+ Counter to increment per button-click */
let counter = 0;
function toggleDark(){
    counter++;

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
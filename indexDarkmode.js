// Trigger darkmode function + Counter to increment per button-click 
let counter = 0;
function toggleDark(){
    counter++;

    let bodyObject = document.body;
    bodyObject.classList.toggle("dark-mode");

    // Import objects to change 
    let speechBubbleObject = document.getElementById("infoBubbleBorder");
    let logoTextObject = document.getElementById("logoContainer");

    // Even/Uneven counter toggles object change 
    if( (counter % 2) == 1 ){
        speechBubbleObject.style.backgroundColor = "black";
        logoTextObject.style.color = "white";
    }else if( (counter % 2) == 0 ){
        speechBubbleObject.style.backgroundColor = "white";
        logoTextObject.style.color = "black";
    }
}
// Trigger darkmode function + Counter to increment per button-click 
let counter = 0;
function toggleDark(){
    counter++;

    let bodyObject = document.body;
    bodyObject.classList.toggle("dark-mode");

    // Import objects to change 
    let infoBubbleObject = document.getElementById("infoBubbleBorder");
    let logoContainerObject2 = document.getElementById("logoContainer");

    // Even/Uneven counter toggles object change 
    if( (counter % 2) == 1 ){
        infoBubbleObject.style.backgroundColor = "black";
        logoContainerObject2.style.color = "white";
        logoContainerObject2.innerHTML = "<img src = './images/flink_logo_hvit_smol.png' id = 'logoImage' alt = 'The websites logo image in white, transparant with the text Flink'>";
        logoContainerObject2.style.marginTop = "41px";
    }else if( (counter % 2) == 0 ){
        infoBubbleObject.style.backgroundColor = "white";
        logoContainerObject2.style.color = "black";
        logoContainerObject2.innerHTML = "<img src = './images/flink_logo_sort_smol.png' id = 'logoImage' alt = 'The websites logo image in black, transparant with the text Flink'>";
        logoContainerObject2.style.marginTop = "32px";
    }
}
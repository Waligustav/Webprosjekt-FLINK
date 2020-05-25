/* Trigger darkmode function 
+ Counter to increment per button-click */
let counter = 0;
function toggleDarkArchive(){
    counter++;

    let bodyObject = document.body;
    bodyObject.classList.toggle("dark-mode");

    /* Import objects to change */
    let logoContainerObject = document.getElementById("archiveLogoContainer");

    /* Even/Uneven counter toggles object change */
    if( (counter % 2) == 1 ){
        logoContainerObject.innerHTML = "<img src = 'Images/flink_logo_hvit_smol.png' id = 'logoImage' alt = 'Website logo image'>";
        logoContainerObject.style.marginTop = "41px";
    }else if( (counter % 2) == 0 ){
        logoContainerObject.innerHTML = "<img src = 'Images/flink_logo_sort_smol.png' id = 'logoImage' alt = 'Website logo image'>";
        logoContainerObject.style.marginTop = "32px";
    }
}


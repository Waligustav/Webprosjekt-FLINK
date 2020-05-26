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

/* Toggle nightmode-slider  -  get/set localstorage values */
const togglew1 = document.querySelector('.toggle-input');
const initialStatew1 = localStorage.getItem('toggleState') == 'true';
togglew1.checked = initialStatew1;

/* Eventlistener triggers slider function*/
togglew1.addEventListener('change', slideDark() );

function slideDark() {
    localStorage.setItem('toggleState', togglew1.checked);
}
//Trigger function upon page update to reset slider
slideDark();




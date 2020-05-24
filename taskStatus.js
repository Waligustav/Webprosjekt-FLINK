/*
function myFunction() {
    // Get the checkbox
    let tInnerHTML = document.getElementById("taskInnerHTML");
    let checkBox = document.getElementById("myCheck");

    // If the checkbox is checked, display the output background colour
   if (checkBox.checked == addTask.status) {
        tInnerHTML.style.backgroundColor = "green";
    } else {
        tInnerHTML.style.backgroundColor = "red";
    } 

    if(checkBox.checked) {
        move();
    }

} */


/*
- noe feil med if statement -> farge endringen skjer kun på den første oppgaven under jobb samt. ved oppdatering forsvinner fargene
- lagre på localStorage
- sjekke om status på html stemmer med localstorage
*/ 

/*
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
*/

// koden til Laurent
const btn2 = document.getElementById("btn2");
btn2.onclick = function() {
    var newDiv = document.createElement("div");
    
    var newBtn = document.createElement("buttom");
    var btnText = document.createTextNode("Fullfør");
    newBtn.appendChild(btnText);

    newDiv.style.border = "3px solid black";
    newDiv.style.height = "40px";
    newDiv.style.backgroundColor = "red";

    taskEl.appendChild(newDiv);
    taskEl.appendChild(newBtn);

    newBtn.onclick = function() {
        newDiv.style.backgroundColor = "green";
    }

}
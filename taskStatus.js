function myFunction() {
    // Get the checkbox
    let taskInnerHTML = document.getElementById("taskInnerHTML");
    let checkBox = document.getElementById("myCheck");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        taskInnerHTML.style.backgroundColor = "green";
    } else {
        taskInnerHTML.style.backgroundColor = "red";
    }
}


/*
- lagre på localStorage
- sjekke om status på html stemmer med localstorage
*/ 
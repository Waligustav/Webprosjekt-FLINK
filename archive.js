/* Trigger darkmode function */
let darkmodeButton = document.getElementById("darkmodeBtn");
let bodyObj = document.getElementsByTagName("body");

darkmodeButton.addEventListener("click", function () {
    bodyObj[0].style.backgroundImage = "url('images/wave2.png')"
});
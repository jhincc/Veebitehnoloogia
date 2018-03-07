/*
When I hover on the navigation bar of your webpage, I want the hover effect to make the box white and the text inside the box Black
Please don't do this in real life, this is why css was invented
*/
var navButtons = document.querySelectorAll(".nav.navbar-nav a")
for (var i = 0; i < navButtons.length; i++) {
    var button = navButtons[i];
    var currColor = button.style.color;
    var currBg = button.style["background-color"];
    button.addEventListener("mouseover", function () {
        this.style.color = "black";
        this.style["background-color"] = "white";
    })
    button.addEventListener("mouseout", function () {
        this.style.color = currColor;
        this.style["background-color"] = currBg;
    })
}

/*
When I click the send button in the contact form I want to see all the information entered into the box popped up in an alert box

If any field is missing/empty when user clicks submit button on contact form, pop up and alert box saying the name of the missing field/fields
*/
var form = document.forms[0];

function validateForm() {
    for (var i = 0; i < 4; i++) {
        if (form[i].value == "") {
            alert("Form must be filled out");
            return 1;
        }

    }

}

form.addEventListener("submit", function(event) {
    if (validateForm()) return;
    var fields = [];
    for (var i = 0; i < form.length;i++) {
        fields.push(form[i].value);
    }
    alert("Name: " + fields[0] + " Email: " + fields[1] + " Subject: " + fields[2] + " Message: " + fields[3]);


})


/*
On click of the green button, change the text of the button to a different text and the color of the button to a different colour
*/

var greenButton = document.querySelector("a.green-btn")
greenButton.addEventListener("click", function (event) {
    event.preventDefault();
    this.innerText = "Rainbowzzz";
    this.style.color = "black";
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

    var i = 0;

    setInterval(function () {
        greenButton.style["background-color"] = colors[i++];
        i %= colors.length;
    }, 500)


})

/*
Link one of the div buttons to your public Facebook or Github profile (feel free to select any button you live"
*/

var ghButton = document.querySelector("a.blue-btn");
ghButton.innerText = "Github jhincc";
ghButton.href = "https://github.com/jhincc"
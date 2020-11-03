var menu = ["Neapolitan pizza ", " Chicago pizza", " New York-Style pizza", "Sicilian pizza", "Greek pizza", "California pizza", " Detroit pizza", " Louis pizza"];
var rgrg = [];

function neww() {
    var elementto = document.getElementById("plqg")
    var htmld = "<ol class='menulist'>";
    menu.sort();
    for (let i = 0; i < menu.length; i++) {

        htmld = htmld + "<li>" + menu[i] + "</li>";

    }
    htmld = htmld + "</ol>";
    elementto.innerHTML = htmld;
}


function uu() {
    var val = document.getElementById("add_item").value;
    var elementto = document.getElementById("display_addedmenu");
    var htmld = "<section class='cards'>";
    rgrg.push(val);
    rgrg.sort();
    for (let i = 0; i < rgrg.length; i++) {

        htmld = htmld + "<div class='card'><img src='images/pizzaImg.png'>" + rgrg[i] + "</div>";

    }
    htmld = htmld + "</ol>";
    elementto.innerHTML = htmld;
}
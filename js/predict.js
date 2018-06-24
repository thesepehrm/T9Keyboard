const API_URL = ""
const matchreg = ["(^", ")\\b"];
let dataloaded = false;

let dictData = "";

window.onload = function(e) {
    /* Do some fancy loading */
    loadDoc();

    /* Do completed loading */
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            dictData = this.responseText;
        }
    };
    xhttp.open("GET", "api/getdict.php", true);
    xhttp.send();
}

function predict(prefix) {
    regex = new RegExp(matchreg[0] + prefix + matchreg[1], 'gm');
    return dictData.match(regex);
}
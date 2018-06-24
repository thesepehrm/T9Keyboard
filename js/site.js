let delta = 0;
let createdstring = "";
let matchedstring = "";
let conststring = "";
let match = [];
let index = 0;
window.ontouchstart = window.onmousedown;
window.onmousedown = function (e) {
    if (e.target.localName == 'button') {
        delta = (new Date()).getTime() / 1000;
    }

};
window.onclick = function (e) {
    if (e.target.localName == 'button') {
        delta = (new Date()).getTime() / 1000 - delta;
        if (delta >= 1.5) {
            document.getElementById('txtoutput').value += e.target.id.replace('btn', '');
            createdstring = ""
            return;
        }
        delta = 0;
        let number = e.target.id.replace('btn', '');
        let numchars = {
            '1': function doDot() {
                document.getElementById('txtoutput').value += ".";
                conststring += matchedstring + ".";
                createdstring = "";
                matchedsting = "";
            },
            '2': '[abc]',
            '3': '[def]',
            '4': '[ghi]',
            '5': '[jkl]',
            '6': '[mno]',
            '7': '[pqrst]',
            '8': '[uvw]',
            '9': '[xyz]',
            '*': function cycle() {
                if (match !== null) {
                    index++;
                    matchedstring = match[index % match.length];
                    document.getElementById('txtoutput').value = conststring + matchedstring;
                }
            },

            '0': function nextWord() {
                conststring += matchedstring + " ";
                createdstring = "";
                matchedsting = "";
                document.getElementById('txtoutput').value += " ";
            },
            '#': function del() {
                if (createdstring == "") {
                    conststring = conststring.substr(0, conststring.length - 1);
                    document.getElementById('txtoutput').value = conststring;
                }
                document.getElementById('txtoutput').value = conststring;
                createdstring = ""
                matchedstring = ""
            }
        };
        if (typeof (numchars[number]) == 'string') {
            createdstring += numchars[number]
            match = predict(createdstring);
            if (match == null) {
                document.getElementById('txtoutput').value += numchars[number][1];
            } else {
                matchedstring = match[0];
                index = 0;
                document.getElementById('txtoutput').value = conststring + matchedstring;
            }

        } else {
            numchars[number]();
        }

    }

};
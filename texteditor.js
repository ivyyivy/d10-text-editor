// var input = document.getElementById("input");


var buttonClickCounts = {
    bold: 0,
    italic: 0,
    uppercase: 0,
    lowercase: 0
};

function makeBold() {
    if (buttonClickCounts.bold % 2 === 0) {
        input.style.fontWeight = "bold";
    } else {
        input.style.fontWeight = "normal";
    }
    buttonClickCounts.bold++;
}

function makeItalic() {
    if (buttonClickCounts.italic % 2 === 0) {
        input.style.fontStyle = "italic";
    } else {
        input.style.fontStyle = "normal";
    }
    buttonClickCounts.italic++;
}

function alignLeft() {
    input.style.textAlign = "left";
}

function alignCenter() {
    input.style.textAlign = "center";
}

function alignRight() {
    input.style.textAlign = "right";
}

function upperCase() {
    if (buttonClickCounts.uppercase % 2 === 0) {
        input.value = input.value.toUpperCase();
    } else {
        input.value = input.value.toLowerCase();
    }
    buttonClickCounts.uppercase++;
}

function lowerCase() {
    if (buttonClickCounts.lowercase % 2 === 0) {
        input.value = input.value.toLowerCase();
    } else {
        input.value = input.value.toUpperCase();
    }
    buttonClickCounts.lowercase++;
}

function capitalize() {
    input.value = input.value.toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

function clearText() {
    input.value = ''
    input.style.fontWeight = "normal";
    input.style.fontStyle = "normal";
    input.style.textAlign = "left";
    input.style.textTransform = "none";
    buttonClickCounts = {
        bold: 0,
        italic: 0,
        uppercase: 0,
        lowercase: 0
    };
}

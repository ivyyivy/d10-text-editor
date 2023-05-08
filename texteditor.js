var input = document.getElementById("input")

function makeBold() {
    // input.style.fontWeight = "bold";
    input.classList.toggle("makeBold")
}

function makeItalic() {
    input.classList.toggle("makeItalic")
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

function uppercase() {
    input.classList.toggle("uppercase");
}

function lowercase() {
    input.classList.toggle("lowercase")
}

function capitalize() {
    input.classList.toggle("capitalize")
}

function clearText() {
    input.value = ''
    input.style.fontWeight = "normal";
    input.style.fontStyle = "normal";
    input.style.textAlign = "left";
    input.style.textTransform = "none";
}


// var buttonClickCounts = {
//     bold: 0,
//     italic: 0,
//     alignLeft: 0,
//     alignCenter: 0,
//     alignRight: 0,
//     uppercase: 0,
//     lowercase: 0,
//     capitalize: 0
// };

// function makeBold() {
//     if (buttonClickCounts.bold % 2 === 0) {
//         input.style.fontWeight = "bold";
//     } else {
//         input.style.fontWeight = "normal";
//     }
//     buttonClickCounts.bold++;
// }

// function makeItalic() {
//     if (buttonClickCounts.italic % 2 === 0) {
//         input.style.fontStyle = "italic";
//     } else {
//         input.style.fontStyle = "normal";
//     }
//     buttonClickCounts.italic++;
// }



// function upperCase() {
//     if (buttonClickCounts.uppercase % 2 === 0) {
//         input.value = input.value.toUpperCase();
//     } else {
//         input.value = input.value.toLowerCase();
//     }
//     buttonClickCounts.uppercase++;
// }

// function lowerCase() {
//     if (buttonClickCounts.lowercase % 2 === 0) {
//         input.value = input.value.toLowerCase();
//     } else {
//         input.value = input.value.toUpperCase();
//     }
//     buttonClickCounts.lowercase++;
// }

// function capitalize() {
//     if (buttonClickCounts.capitalize % 2 === 0) {
//         input.value = input.value.toLowerCase().split(' ').map(function (word) {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         }).join(' ');
//     } else {
//         input.style.textTransform = "none"
//     }
//     buttonClickCounts.capitalize++;
// }



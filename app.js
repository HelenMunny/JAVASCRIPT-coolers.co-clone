
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.getElementById("btn");

let color1 = document.getElementById("color-1");
let color2 = document.getElementById("color-2");
let color3 = document.getElementById("color-3");
let color4 = document.getElementById("color-4");
let color5 = document.getElementById("color-5");

let colorName1 = document.getElementById("colorName-1");
let colorName2 = document.getElementById("colorName-2");
let colorName3 = document.getElementById("colorName-3");
let colorName4 = document.getElementById("colorName-4");
let colorName5 = document.getElementById("colorName-5");

btn.addEventListener('click', function () {
 // let hexColor = "#";
 // for (let i = 0; i < 6; i++){
 //  hexColor += hex[getRandomValue()];
 // }

 hexColor1 = "#" + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()];
 hexColor2 = "#" + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()];
 hexColor3 = "#" + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()];
 hexColor4 = "#" + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()] + hex[getRandomValue()];
 hexColor5 = "#"+hex[getRandomValue()]+hex[getRandomValue()]+hex[getRandomValue()]+hex[getRandomValue()]+hex[getRandomValue()]+hex[getRandomValue()];


 colorName1.textContent = hexColor1;
 colorName2.textContent = hexColor2;
 colorName3.textContent = hexColor3;
 colorName4.textContent = hexColor4;
 colorName5.textContent = hexColor5;

 color1.style.backgroundColor = hexColor1;
 color2.style.backgroundColor = hexColor2;
 color3.style.backgroundColor = hexColor3;
 color4.style.backgroundColor = hexColor4;
 color5.style.backgroundColor = hexColor5;
});

function getRandomValue() {
 return Math.floor(Math.random() * hex.length);
}
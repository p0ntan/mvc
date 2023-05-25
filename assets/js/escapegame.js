const container = document.getElementById("game-new-text");
const text = container.innerText;
let textArray;
let counter = 0;
let writingInterval;

container.innerText = "";
textArray = text.split(" ");

document.addEventListener('DOMContentLoaded', () => {
    writingInterval = setInterval(() => {
        container.innerText += ' ' + textArray[counter];
        counter++;

        if (counter === textArray.length) {
            clearInterval(writingInterval);
        }
    }, 50);
});
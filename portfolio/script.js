

let i = 0;
const textArray = ["Full Stack Developer", "Creative Designer", "Web Developer"];
const typingElement = document.getElementById('typing');
let currentText = textArray[0];

function typeEffect() {
  if (i < currentText.length) {
    typingElement.textContent += currentText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 2000);
  }
}

function deleteEffect() {
  if (i > 0) {
    typingElement.textContent = currentText.substring(0, i - 1);
    i--;
    setTimeout(deleteEffect, 50);
  } else {
    const nextIndex = (textArray.indexOf(currentText) + 1) % textArray.length;
    currentText = textArray[nextIndex];
    setTimeout(typeEffect, 500);
  }
}

window.onload = () => {
  typeEffect();
};

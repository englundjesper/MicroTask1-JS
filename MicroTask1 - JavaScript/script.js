const outputElement = document.getElementById("output");
const buttonElement = document.getElementById("btnProcess");
const cardElement = document.getElementById("card");
const backgroundColourElement = document.getElementById("backgroundColour");
const fontOptionElement = document.getElementById("fontOption");
const fontColourElement = document.getElementById("fontColour");
const fontSizeElement = document.getElementById("foSize");
const messageElement = document.getElementById("message");
const greetingMessageElement = document.getElementById('greetingMessage');

buttonElement.addEventListener('click', message);

function messageDetails() {
   cardElement.style.backgroundColor = backgroundColourElement.value;
   greetingMessageElement.style.fontFamily = fontOptionElement.value;
   greetingMessageElement.style.color = fontColourElement.value;
   greetingMessageElement.style.fontSize = fontSizeElement.value;
}

function message() {
    messageDetails();
    greetingMessageElement.innerHTML = messageElement.value;
}
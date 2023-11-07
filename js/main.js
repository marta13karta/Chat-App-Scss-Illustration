const widgetInput = document.querySelector(".message-input");
const svgWrapper = document.querySelector(".send-svg");
const chatMessages = document.querySelector(".chat-messages");

function addChatMessage() {
  var message = document.createElement("div");
  message.classList.add("message-outgoing");
  message.innerHTML = widgetInput.value;
  if (widgetInput.value == "") {
    return;
  }
  chatMessages.appendChild(message);
  widgetInput.value = "";
}

widgetInput.onkeypress = (e) => {
  var keyCode = e.code || e.key;
  if (keyCode == "Enter") {
    addChatMessage();
  }
};

svgWrapper.addEventListener("click", (e) => {
  addChatMessage();
});

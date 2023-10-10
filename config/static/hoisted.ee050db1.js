import "./hoisted.681d386c.js";

const n = document.querySelector("#main-img");
document.querySelector("#chat-clear").onclick = function () {
    document.querySelector("#chat-message-input").value = ""
};
const a = JSON.parse(document.getElementById("room-name").textContent),
    o = new WebSocket("ws://" + window.location.host + "/ws/chat/" + a + "/");
o.onmessage = function (t) {
    const e = JSON.parse(t.data);
    document.querySelector("#chat-log").value = e.message;
    n.src = "data:image/png;base64," + e.frame;
};
o.onclose = function (t) {
    console.error("Chat socket closed unexpectedly")
};
document.querySelector("#chat-message-input").focus();
document.querySelector("#chat-message-input").onkeyup = function (t) {
    t.key === "Enter" && document.querySelector("#chat-message-submit").click()
};
document.querySelector("#chat-message-submit").onclick = function (t) {
    const e = document.querySelector("#chat-message-input");
    console.log(e.value);
    const c = e.value;
    o.send(JSON.stringify({message: c})), e.value = ""
};

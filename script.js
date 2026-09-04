function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    chat.innerHTML += `
        <div class="message user">
            <strong>You:</strong><br>
            ${message}
        </div>
    `;

    chat.innerHTML += `
        <div class="message ai">
            <strong>STAR-X:</strong><br>
            I'm still learning. My AI brain will be connected soon! 🚀
        </div>
    `;

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}

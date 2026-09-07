async function sendMessage() {
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

try {
    const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message
        })
    });

    const data = await response.json();

    chat.innerHTML += `
        <div class="message ai">
            <strong>STAR-X:</strong><br>
            ${data.reply || data.error}
        </div>
    `;

} catch (error) {
    chat.innerHTML += `
        <div class="message ai">
            <strong>STAR-X:</strong><br>
            Sorry, I couldn't connect to my AI brain.
        </div>
    `;
}
}

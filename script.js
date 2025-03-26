async function sendMessage() {
    const inputBox = document.getElementById("inputBox");
    const chatbox = document.getElementById("chatbox");
    const userMessage = inputBox.value;

    // Display user message
    chatbox.innerHTML += `<div>User: ${userMessage}</div>`;
    inputBox.value = ''; // Clear input box

    // Send the message to the backend API
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();

    // Display AI response
    chatbox.innerHTML += `<div>AI: ${data.reply}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

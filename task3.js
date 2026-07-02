const input = document.getElementById("messageInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const charCount = document.getElementById("charCount");
const status = document.getElementById("status");
const container = document.getElementById("messageContainer");

let messages = [];

// Character Count
input.addEventListener("input", () => {
    charCount.textContent =
        "Character Count: " + input.value.length;
});

// Display Messages
function displayMessages() {

    // Clear old messages
    container.innerHTML = "<h2>Messages</h2>";

    messages.forEach((msg) => {

        const div = document.createElement("div");
        div.className = "message";

        // ⭐ message text
        const text = document.createElement("div");
        text.textContent = msg;

        // ⭐ time
        const time = document.createElement("div");
        time.className = "time";

        const now = new Date();
        time.textContent = "Time: " + now.toLocaleTimeString();

        div.appendChild(text);
        div.appendChild(time);

        container.appendChild(div);

        // Remove message after 10 seconds
        setTimeout(() => {

            if (messages.includes(msg)) {

                messages.splice(messages.indexOf(msg), 1);

                displayMessages();

                status.textContent = "Message Expired";
            }

        }, 10000);
    });
}

// Add Message
addBtn.addEventListener("click", () => {

    const message = input.value.trim();

    const promise = new Promise((resolve, reject) => {

        if (message.length >= 3) {
            resolve(message);
        } else {
            reject("Message must contain at least 3 characters");
        }

    });

    promise
        .then((msg) => {

            messages.push(msg);

            displayMessages();

            status.textContent =
                "Message Added Successfully";

            input.value = "";

            charCount.textContent =
                "Character Count: 0";
        })

        .catch((error) => {

            status.textContent = error;

        });

});

// Clear All Messages
clearBtn.addEventListener("click", () => {

    messages = [];

    container.innerHTML = "<h2>Messages</h2>";

    status.textContent = "All Messages Cleared";
});
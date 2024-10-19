const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "LA-342436404af74606acf94ecd12ce491f43fa71f816dd4c91a2dac320d01221d5"; // Replace with your actual Llama API key

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" 
        ? `<p>${message}</p>` 
        : `<span class="materials-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.example.com/data"; // Replace with the actual API endpoint

    const API_KEY = "LA-342436404af74606acf94ecd12ce491f43fa71f816dd4c91a2dac320d01221d5"; // Your API key

    const requestOptions = {
        method: "GET", // or "POST", "PUT", etc. depending on your request
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}` // Use Bearer authentication
        }
    };

    fetch(API_URL, requestOptions) 
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`); // Handle non-200 responses
            }
            return res.json(); // Parse the response as JSON
        })
        .then(data => {
            console.log(data); // Process the received data
        })
        .catch(error => {
            console.error('Error:', error); // Handle errors
        });

    }

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return; // Exit if the input is empty

    chatbox.appendChild(createChatLi(userMessage, "outgoing")); // Add user message to chat

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi); // Generate response from Llama model
    }, 600);
}

sendChatBtn.addEventListener("click", handleChat); // Set up event listener for sending chat

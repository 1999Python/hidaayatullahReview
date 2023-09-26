const toggleButton = document.getElementById("revealButton");
const messageDiv = document.getElementById("message");

// Add a click event listener to the button
toggleButton.addEventListener("click", () => {
    // Toggle the visibility of the message div
    if (messageDiv.style.display === "none" || messageDiv.style.display === "") {
        messageDiv.style.display = "block"; // Show the message
    } else {
        messageDiv.style.display = "none"; // Hide the message
    }
});
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const message = document.getElementById("message").value;

    // Send the message to the provided email using a backend service or API
    // For demonstration purposes, we'll just log the message to the console
    console.log("Message submitted:", message);

    // Clear the form after submission
    document.getElementById("message").value = "";
});
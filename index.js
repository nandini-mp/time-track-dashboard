document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "jeremy" && password === "password123") {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});

$("button.mode").click(function() {
    $("html").toggleClass("light");
});

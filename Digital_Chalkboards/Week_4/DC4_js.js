function greetUser() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 17) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    alert(greeting);
}

function changeButtonTextAndClass() {
    let button = document.getElementById("button2");
    console.log("Before change:", button.textContent, button.className);

    button.textContent = "Done";
    button.className = "btn btn-sucess";

    console.log("After change:", button.textContent, button.className);
}

document.getElementById("button1").addEventListener("click", greetUser);
document.getElementById("button2").addEventListener("click", changeButtonTextAndClass)
const cookieBox = document.querySelector(".wrapper")
const buttons = document.querySelectorAll(".button")


const executeCodes = () => {
    if (document.cookie.includes("matthew")) return;
    cookieBox.classList.add("show");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            // if button has acceptBtn id 
            if (button.id == "acceptBtn") {
                // set cookies for one month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days 
                document.cookie = "cookieBy= Matthew; max-age" + 60 * 60 * 24 * 30;
            }
        });
    })
}


//   executes function will be called on webpage load 

window.addEventListener("load", executeCodes);
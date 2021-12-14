var number = Math.floor(10 * Math.random())
var counter = document.getElementById("showNumber")
counter.innerHTML = number;
var button = document.getElementById("newGame");
button.addEventListener("click", function () {
    let interval = setInterval(
            function () {
                if (number === 1) {
                    clearInterval(interval);
                }
                number--;
                counter.textContent = number;
            },
            1000
            )
})
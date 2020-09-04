const container = document.getElementById('container');
const text = document.getElementById("text")

const totalDuration = 7500;
const breatheDuration = (totalDuration / 5) * 2;
const holdDuration = totalDuration / 5;

breathAnimation();

function breathAnimation() {
    text.innerText = "Breathe In"
    container.className = "container grow"

    setTimeout(() => {
        text.innerText = "Hold"
        setTimeout(() => {
            text.innerText = "Breathe Out"
            container.className = "container shrink"
        }, holdDuration);
    }, breatheDuration);
}

setInterval(breathAnimation, totalDuration);
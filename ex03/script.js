const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateDisplay() {
    countEl.textContent = count;
    if (count > 0) {
        countEl.className = "positive";
    } else if (count < 0) {
        countEl.className = "negative";
    } else {
        countEl.className = "";
    }
}

incrementBtn.addEventListener("click", function() {
    count = count + 1;
    updateDisplay();
});

decrementBtn.addEventListener("click", function() {
    count = count - 1;
    updateDisplay();
});

resetBtn.addEventListener("click", function() {
    count = 0;
    updateDisplay();
});
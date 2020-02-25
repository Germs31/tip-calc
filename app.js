const button = document.querySelector("button");

button.addEventListener("click", () => {
    const bill = document.querySelector("#bill").value
    const percent = document.querySelector("#percentage").value
    let sum = parseFloat(bill) * (parseFloat(percent)/ 100)
    let display = document.querySelector("#result")
    return display.innerHTML = `You should leave $${sum.toFixed(2)} as a tip`
});


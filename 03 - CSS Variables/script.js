const input = document.querySelectorAll(".controls input")


function updateVariable() {
    console.log(this.value);
}

input.forEach(input => input.addEventListener("change",updateVariable));
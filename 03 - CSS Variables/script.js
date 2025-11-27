const input = document.querySelectorAll(".controls input")


function updateVariable() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) // changing from root/html every input 
}

input.forEach(input => input.addEventListener("change",updateVariable));
input.forEach(input => input.addEventListener("mousemove",updateVariable));
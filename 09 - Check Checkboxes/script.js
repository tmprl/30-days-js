const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked = false;

function handleCheck(e) {

    if(e.shiftKey && this.checked && lastChecked) {
        let inBetween = false;

        checkBoxes.forEach(box => {
            if (box === this || box == lastChecked) {
                inBetween = !inBetween;
            }
            if(inBetween) {
                box.checked = true;
            }
        });
    } 
    lastChecked = this;
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

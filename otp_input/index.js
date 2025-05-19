const inputs = document.getElementById("inputs");
inputs.addEventListener("input", (e) => {
    const target = e.target;
    const val = target.value;
    if(isNaN(val)) {
        target.value = "";
        return;
    }
    if(val != "") {
        const next = target.nextElementSibling;
        if(next){
            next.focus();
        }
    }


});


// delete event 

inputs.addEventListener("keyup", (e) => {
    const target = e.target;
    const key = e.key.toLowerCase();


    if(key === "backspace" || key === "delete") {
        target.value = "";
        const prev = target.previousElementSibling;
        if(prev) {
            prev.focus();
        }
    }
});
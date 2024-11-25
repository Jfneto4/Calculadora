const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button")

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "del") {
            display.value = display.value.Slice(0, -1)
        } else {
            display.value += btn.id
        }
    })
})

function alternarModo(){
    document.body.classList.toggle("dark-mode");

    
     
    //toggle fazer e desfazer/// 
}

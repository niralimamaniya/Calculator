let allButtons = document.querySelectorAll("button");
let inputField = document.getElementById("result");
let inputVal = "";

console.log(inputField)
Array.from(allButtons).forEach((button) => {
    button.addEventListener("click",() => {
        const buttonValue = button.textContent;
        if(buttonValue === "C"){
            inputField.value = "";    
        } else if (buttonValue === "="){
            inputField.value = eval(inputField.value);
        } else if (buttonValue === "←"){
            inputField.value = inputField.value.slice(0, -1);
        } else {
            inputField.value += buttonValue;
        }
    });
});


let display = document.getElementById("userinput");




let calculate = (number) => {
    display.value += number;
}

let compute =() => {
    try {
        display.value = eval(display.value)
    }

    catch (err) {
        alert("valid input for e.g. 1 + 1!");
    }
} 


function clr ()  {
    display.value = "";
}

function del () {
    display.value = display.value.slice(0,-1);
}
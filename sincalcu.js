var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');
for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;

        if(btntext =='×')
        {
            btntext= '*';
        }

        if(btntext=='÷')
        {
            btntext='/';
        }
        screen.value+=btntext;
    });
}

function sin()
{
    screen.value=Math.sin(screen.value);
}

function cos()
{
    screen.value=Math.cos(screen.value);
}

function tan()
{
    screen.value=Math.tan(screen.value);
}

function pow()
{
    screen.value=Math.pow(screen.value,2);
}

function sqrt()
{
    screen.value=Math.sqrt(screen.value,2);
}

function log()
{
    screen.value=Math.log(screen.value);
}

function pi()
{
    screen.value= 3.14159265359;
}

function e()
{
    screen.value=2.71828182846;
}

function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}

// Hide scientific calculator buttons on page load
window.onload = function () {
    let sciButtons = document.querySelectorAll(".bracket, .sciRow");
    sciButtons.forEach((btn) => btn.classList.add("hidden"));
};

// Function to toggle scientific buttons
function hideScientifiCalculator() {
    let sciButtons = document.querySelectorAll(".bracket, .sciRow");
    sciButtons.forEach((btn) => btn.classList.toggle("hidden"));

    // Reverse the arrow direction
    let arrowBtn = document.querySelector(".btn-arrow");
    arrowBtn.innerText = arrowBtn.innerText === "↓" ? "↑" : "↓";
}
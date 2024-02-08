// Declaring Variables
let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let bars_container = document.getElementById("bars_container");
let minrange = 1;
let maxrange = 20;
let numofbars = 40;
let unsorted_array = new Array(numofbars);
// let audio = document.getElementById("audio");

function randomnum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creating  Random Array
function createrandomarray() {
    let array = new Array(numofbars);
    for (let i = 0; i< numofbars;i++){
        array[i] = randomnum(minrange,maxrange);
    }
    return array;
}

// Loading DOM Content
document.addEventListener("DOMContentLoaded", function ()  {
    createrandomarray();
    renderbars(unsorted_array);
});

// Rendering the bars on the screen
function renderbars(array) {
    for (let i = 0; i<numofbars; i++){
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * 10 + "px";
        bars_container.appendChild(bar);
    }
}

randomize_array.addEventListener("click", function () {
   unsorted_array = createrandomarray();
   bars_container.innerHTML = "";
   renderbars(unsorted_array);
});

// Creating the sleep function to aid in Visualization
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve,ms));
}

// Writing the Bubble Sort Function
async function bubblesort(array) {
    // audio.currentTime = 0;
    // audio.play();
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i< array.length; i++){
        for (let j=0; j < array.length - 1; j++){
            if (array[j] > array[j+1]){
                for (let k = 0; k < bars.length; k++) {
                    if (k !== j && k !== j+1){
                       bars[k].style.backgroundcolor = "aqua"; 
                    }
                }
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                bars[j].style.height = array[j] * 10 + "px";
                bars[j].style.backgroundcolor = "lightgreen";
                // bars[j].innerText = array[j];

                bars[j+1].style.height = array[j+1] * 10 + "px";
                bars[j+1].style.backgroundcolor = "lightgreen";
                // bars[j+1].innerText = array[j+1];
                await sleep(30);
            }
        }
        await sleep(30);
    }
    audio.pause();
    return array;
}

bubble_sort_btn.addEventListener("click",function() {
    let sorted_array = bubblesort(unsorted_array);
    console.log(sorted_array);
});

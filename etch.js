const container = document.querySelector('.container');
// Container width in px
let widthContainer = 600;


// clear button
const clear = document.querySelector('.clear.button');
clear.addEventListener('click', () => clearAll());


const btnDiv = document.querySelector('.forBtn');
const button = document.createElement('button');
button.textContent = 'Change Size';
button.classList.add('button');
btnDiv.appendChild(button);

button.addEventListener('click', () => {
    let number = Number(prompt('Give me a number between 0 and 100 to create a number * number grid:'));
    // Validate number
    if(!number) return;
    if(number <= 0 || number >100) return;
    
    // Remove old grid
    container.textContent = '';

    // Create new grid
    newGrid(number);

    // Activate hover effect
    hoverRainbow(number);
});

// Slide bar function
let size = document.querySelector('#sizeRange');
let sizeText = document.querySelector('.sizeText');
size.addEventListener('input', () => changeSize(size.value));

function changeSize(size){
    // Remove old grid
    container.textContent = '';

    // Create new grid
    newGrid(size);

    // Update size text
    sizeText.textContent = `${size} * ${size}`;
    console.log('size', size);
}


// Original 16*16 grid
newGrid(16);
//for (let i = 0; i < 16*16; i++){
//    let grid = document.createElement('div');
//    grid.classList.add('grid');
//    container.appendChild(grid);
//}
// Activate hover effect
hoverRainbow(16);


function newGrid(number){
    for (let i = 0; i < number*number; i++){
        let grid = document.createElement('div');
        grid.classList.add('grid');
        // Change grid width and height based on number
        grid.style.cssText = `width:${widthContainer/number}px; height:${widthContainer/number}px`;
        container.appendChild(grid);
    }
}

function hoverRainbow(){
    let gridDivs = document.querySelectorAll('.grid'); 
    gridDivs.forEach(gridDiv => {
        gridDiv.addEventListener('mouseover', ()=> {
            // gridDiv.classList.add('gridHover');
            // Random color
            let value1 = Math.floor(Math.random()*256);
            let value2 = Math.floor(Math.random()*256);
            let value3 = Math.floor(Math.random()*256);
            gridDiv.style.cssText = `background-color:rgb(${value1},${value2},${value3});
                                    width:${widthContainer/size.value}px; 
                                    height:${widthContainer/size.value}px;`;
            //console.log(`rgba(${value1},${value2},${value3})`);
            //console.log('mousehover grid');
        });
        //gridDiv.addEventListener('mouseleave', ()=> {
        //    gridDiv.style.cssText = 'background-color:gold';
        //    console.log('mouseleave grid');
        //});
    });
}

function hoverColor(color){
    let gridDivs = document.querySelectorAll('.grid');
    gridDiv.forEach(gridDiv => {
        gridDiv.addEventListener('mouseover', () => {
            gridDiv.style.cssText = `background-color:rgb(${color});
                                    width:${widthContainer/size.value}px; 
                                    height:${widthContainer/size.value}px;`;
        });
    });
}

function clearAll(){
    // Remove old grid
    container.textContent = '';

    // Create new grid
    newGrid(size.value);
}
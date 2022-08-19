const container = document.querySelector('.container');

// Container width in px
let widthContainer = 600;



// Buttons
const blackBtn = document.querySelector('.blackBtn');
const colorPicker = document.querySelector('.colorPicker');
const rainbowBtn = document.querySelector('.rainbow');
const eraserBtn = document.querySelector('.eraser');
const clearBtn = document.querySelector('.clear.button');

// Slide bar 
let size = document.querySelector('#sizeRange');
let sizeText = document.querySelector('.sizeText');

// Event listener
blackBtn.addEventListener('click', () => hoverColor('black'));
rainbowBtn.addEventListener('click', () => hoverRainbow());
eraserBtn.addEventListener('click', () => hoverColor('white'));
clearBtn.addEventListener('click', () => clearAll());
size.addEventListener('input', () => changeSize(size.value));
colorPicker.addEventListener('click', () => {
    colorPicker.classList.add('buttonHover');
    // Color picked
    let colorPicked = document.querySelector('#colorPicked').value;
    hoverColor(colorPicked);
});
colorPicker.addEventListener('input', () => {
    // Color picked
    let colorPicked = document.querySelector('#colorPicked').value;
    hoverColor(colorPicked);
});

// Default 16*16 grid
newGrid(16);

// Default hover effect in grid and button
hoverColor('black');
blackBtn.classList.add('buttonHover');


function changeSize(size){
    // Remove old grid
    container.textContent = '';

    // Create new grid
    newGrid(size);

    // Default hover effect in grid and button
    hoverColor('black');
    blackBtn.classList.add('buttonHover');

    // Update size text
    sizeText.textContent = `${size} * ${size}`;
    console.log('size', size);
}





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
    // Remove all buttons's hover effect
    removeAllHover();
    let gridDivs = document.querySelectorAll('.grid'); 
    gridDivs.forEach(gridDiv => {
        gridDiv.addEventListener('mouseover', ()=> {
            // Random color
            let value1 = Math.floor(Math.random()*256);
            let value2 = Math.floor(Math.random()*256);
            let value3 = Math.floor(Math.random()*256);
            gridDiv.style.cssText = `background-color:rgb(${value1},${value2},${value3});
                                    width:${widthContainer/size.value}px; 
                                    height:${widthContainer/size.value}px;`;           
        
                            });
    });
    // Add hover effect on rainbow button
    rainbowBtn.classList.add('buttonHover');
}

function hoverColor(color){
    // Remove all buttons's hover effect
    removeAllHover();

    let gridDivs = document.querySelectorAll('.grid');
    gridDivs.forEach(gridDiv => {
        gridDiv.addEventListener('mouseover', () => {
            gridDiv.style.cssText = `background-color:${color};
                                    width:${widthContainer/size.value}px; 
                                    height:${widthContainer/size.value}px;`;
        });
    });
    // Add hover effect on rainbow button
    if(color == 'black') blackBtn.classList.add('buttonHover');
    else if(color === 'white') eraserBtn.classList.add('buttonHover');
    else colorPicker.classList.add('buttonHover');
    console.log('color', color);
}


function removeAllHover(){
    blackBtn.classList.remove('buttonHover');
    colorPicker.classList.remove('buttonHover');
    rainbowBtn.classList.remove('buttonHover');
    eraserBtn.classList.remove('buttonHover');
}

function clearAll(){
    // Remove old grid
    container.textContent = '';

    // Create new grid
    newGrid(size.value);

    // Default hover effect in grid and button
    hoverColor('black');
    blackBtn.classList.add('buttonHover');
}
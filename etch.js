const container = document.querySelector('.container');
let widthContainer = 800;

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

// Original 16*16 grid
for (let i = 0; i < 16*16; i++){
    let grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}
// Activate hover effect
hoverRainbow(16);


function newGrid(number){
    for (let i = 0; i < number*number; i++){
        let grid = document.createElement('div');
        grid.classList.add('grid');
        // Change grid width and height based on number
        let widthContainer = 800;
        grid.style.cssText = `width:${widthContainer/number}px; height:${widthContainer/number}px`;
        container.appendChild(grid);
    }
}

function hoverRainbow(number){
    let gridDivs = document.querySelectorAll('.grid'); 
    gridDivs.forEach(gridDiv => {
        gridDiv.addEventListener('mouseover', ()=> {
            // gridDiv.classList.add('gridHover');
            // Random color
            let value1 = Math.floor(Math.random()*256);
            let value2 = Math.floor(Math.random()*256);
            let value3 = Math.floor(Math.random()*256);
            gridDiv.style.cssText = `background-color:rgb(${value1},${value2},${value3});
                                    width:${widthContainer/number}px; 
                                    height:${widthContainer/number}px;`;
            console.log(`rgba(${value1},${value2},${value3})`);
            console.log('mousehover grid');
        });
        //gridDiv.addEventListener('mouseleave', ()=> {
        //    gridDiv.style.cssText = 'background-color:gold';
        //    console.log('mouseleave grid');
        //});
    });
}


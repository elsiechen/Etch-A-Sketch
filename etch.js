const container = document.querySelector('.container');

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
});

for (let i = 0; i < 256; i++){
    let grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}

let gridDivs = document.querySelectorAll('.grid'); 
gridDivs.forEach(gridDiv => {
    gridDiv.addEventListener('mouseover', ()=> {
        gridDiv.classList.add('gridHover');
    });
    gridDiv.addEventListener('mouseleave', ()=> {
        gridDiv.classList.remove('gridHover');
    });
});





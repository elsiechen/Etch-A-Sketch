const container = document.querySelector('.container');

const btnDiv = document.querySelector('.forBtn');
const button = document.createElement('button');
button.textContent = 'Change Size';
button.classList.add('button');
btnDiv.appendChild(button);

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





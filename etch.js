const container = document.querySelector('.container');

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



const divContainer = document.querySelector('.container');
const resetStyle = document.querySelector('.reset');
const gridSize = prompt('enetr number of squre per side of div', 16);


if (gridSize > 100 || gridSize < 16) {
    alert("Enter grid size brtween 16-100");
    // return ;
}
else {
    for (let i = 1; i <= gridSize * gridSize; i++) {
        divContainer.appendChild(document.createElement('div'));
    }
    
}
const grid = document.querySelectorAll('.container > div');
grid.forEach(grid => {
    grid.classList.add('grid')
})

grid.forEach(grid => {
    grid.addEventListener('mouseenter', function () {
        grid.classList.add('grid-red');
    })
});
resetStyle.addEventListener('click', function () {
    grid.forEach(grid => {
        grid.classList.remove('grid-red');
    })
})
grid.forEach(grid => {
    grid.style.width = `calc(${960 / gridSize}px)`;
})


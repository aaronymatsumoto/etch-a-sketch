const gridContainer = document.querySelector('#grid-container');

let gridSize = 16;


function makeGrid(size) {
	gridContainer.style.setProperty('--row-size', size);
	gridContainer.style.setProperty('--col-size', size);

	//gridContainer.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`;

	for (let i = 0; i < (size * size); i++) {
		let cell = document.createElement("div");
		cell.classList = "cell";
		gridContainer.appendChild(cell);
	}

}




makeGrid(gridSize);
const gridContainer = document.querySelector('#grid-container');
let cell = [];


function makeGrid(size) {
	gridContainer.style.setProperty('--row-size', size);
	gridContainer.style.setProperty('--col-size', size);

	//gridContainer.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`;

	for (let i = 0; i < (size * size); i++) {
		cell[i] = document.createElement("div");
		cell[i].classList = "cell";
		gridContainer.appendChild(cell[i]);
	}

}
makeGrid(25);
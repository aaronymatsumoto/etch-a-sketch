const gridContainer = document.querySelector('#grid-container');
const controlsContainer = document.querySelector('#controls-container');
const clearButton = document.querySelector('#clear');
const colorButton = document.querySelector('#color-buttons');
const newGridButton = document.querySelector('#new-grid');
const newSize = document.querySelector('#new-size');
newSize.addEventListener('mousemove', showSize);

clearButton.addEventListener('click', clear);

let gridSize = 16;
let cell = []

// Create the grid given a size
function makeGrid(size) {
	gridContainer.style.setProperty('--row-size', size);
	gridContainer.style.setProperty('--col-size', size);

	for (let i = 0; i < (size * size); i++) {
		cell[i] = document.createElement("div");
		cell[i].classList = "cell";
		//cell[i].addEventListener("mouseover", selectColor);
		gridContainer.appendChild(cell[i]);
	}
	selectColor();
}

// set event listener to a certain color
function grayColor(e) {
	e.target.style.backgroundColor = 'rgb(212, 212, 211)';
}


// hover for a rgb color
function randomColor(e) {
	const randR = Math.floor(Math.random() * 256);
  const randG = Math.floor(Math.random() * 256);
  const randB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`;
}

function clear() {
	cell.forEach(
		item => {
			item.style.backgroundColor = 'rgb(255, 255, 255)';
		}
	)
}

function selectColor() {
	console.log(colorButton.color.value);
	if (colorButton.color.value == 'gray'){
		clear();
		cell.forEach(
			item => {
				item.removeEventListener("mouseover", randomColor);
				item.addEventListener("mouseover", grayColor);
			}
		)
	}
	else if (colorButton.color.value == 'random'){
		clear();
		cell.forEach(
			item => {
				item.removeEventListener("mouseover", grayColor);
				item.addEventListener("mouseover", randomColor);
			}
		)
	}
}

function showSize(){
	let displaySize = document.querySelector('#size-label');
	displaySize.textContent = newSize.value;
  displaySize.textContent = newSize.value;
}

function clearGrid() {
  document
    .querySelectorAll(".cell")
    .forEach((e) => e.parentNode.removeChild(e));
}

function newGridSize() {
	clearGrid();
	makeGrid(newSize.value);
}

makeGrid(gridSize);

newGridButton.addEventListener('click', newGridSize);

colorButton.addEventListener('click', selectColor);


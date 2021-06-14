const gridContainer = document.querySelector('#grid-container');
const controlsContainer = document.querySelector('#controls-container');
const clearButton = document.querySelector('#clear');
const colorButton = document.querySelector('#color-buttons');

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
		cell[i].addEventListener("mouseover", grayColor);
		gridContainer.appendChild(cell[i]);
	}
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
	if (colorButton.color.value == 'gray'){
		cell.forEach(
			item => {
				item.removeEventListener("mouseover", randomColor);
				item.addEventListener("mouseover", grayColor);
			}
		)
	}
	else if (colorButton.color.value == 'random'){
		cell.forEach(
			item => {
				item.removeEventListener("mouseover", grayColor);
				item.addEventListener("mouseover", randomColor);
			}
		)
	}
}

colorButton.addEventListener('click', selectColor);
makeGrid(gridSize);
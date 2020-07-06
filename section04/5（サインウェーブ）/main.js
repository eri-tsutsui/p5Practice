let xSpacing = 30;
let deg = 0;
let radius = 75;
let yValues = new Array[40];


function setup() {
	createCanvas(600, 400);

}

function draw() {
	background(0);

	// calcWave();
	renderWave();

}

function calcWave() {

	for(let i = 0; i < 40; i ++) {
		yValues[i] = sin(deg) * radius;
	}

	deg = deg + 0.01;

}

function renderWave() {

	noStroke();
	fill(255);
	
	for(let x = 0; x < 40; x ++) {
		ellipse(x * xSpacing, height / 2 + yValues[x], 20, 20);
	}

}
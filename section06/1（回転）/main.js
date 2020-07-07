let aa, av, angle;

function setup() {
	createCanvas(600, 600);
	colorMode(HSB);
	rectMode(CENTER);
	angle = 0;
	av = 0.1;
}

function draw() {
	background(100);
	translate(width / 2, height/ 2);
	rotate(angle);
	rect(0, 0, 50, 50);
	
	angle += av;
}


let y = 0; 
let v = 10;

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(255);
	noStroke();
	fill(0, 0, 200);
	ellipse(width / 2, y, 100, 100);
	
	y += v;

	if(y > height || y < 0) {
		v *= -1;
	}

}
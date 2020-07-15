let x = 0;
let v = 6;

function setup() {
	createCanvas(600, 600);
}

// 位置を求めるためには、加速度を速度に加える、速度を位置に加える
function draw() {
	background(255);
	noStroke();
	fill(200, 0, 0);

	ellipse(x, height / 2, 100, 100);

	x += v;

	if(x > width || x < 0) {
		v *= -1;
	}  
}
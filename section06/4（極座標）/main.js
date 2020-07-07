let range; // 長さ
let theta; // 角度

function setup() {
	createCanvas(600, 400);
	range = 50;
	theta = 0;
}

function draw () {
	background(255);
	translate(width / 2, height / 2);

	// 極座標->直行座標
	let x = range * cos(theta);
	let y = range * sin(theta);

	noStroke();
	fill(100);
	ellipse(x, y, 20, 20); 
	
	theta += 0.1;
}
let x = 0;
let noiseValuable = 0;

function setup() {
	createCanvas(600, 600);
	// frameRate(3);
}

function draw() {
	// random() 完全にランダム
	let randomValue = random(0, 100);
	point(x, 100 + randomValue);

	// 0〜1を返す
	let noiseValue = noise(noiseValuable) * 100;
	point(x, 300 + noiseValue);

	noiseValuable += 0.01;
	x += 1;
}


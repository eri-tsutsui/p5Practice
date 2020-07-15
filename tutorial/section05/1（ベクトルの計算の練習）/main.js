let v1, v2 , v3, v4;
let normal1, normal2;

function setup() {
	createCanvas(400, 400);
	v1 = createVector(1, 2);
	v2 = createVector(3, 4);

	v2.sub(v1);
	console.log(v2);

	v3 = v2;
	v3.mult(3);
	console.log(v3);

	v4 = v3;
	v4.div(2);
	console.log(v4);

	normal1 = createVector(1, 1);
	normal1.normalize();
	console.log(normal1); // 長さが1のベクター

	normal2 = createVector(3, 0); // 方向を決める
	normal2.normalize(); // 正規化する
	console.log(normal2); 
	normal2.mult(5); //スカラー倍して長さをとる
	console.log(normal2);
	


}

function draw() {


}


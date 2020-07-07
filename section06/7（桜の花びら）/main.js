let n = 4;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);
  translate(width / 2, height / 2);

  beginShape();
  // for(let theta = 0; theta < TWO_PI; theta += 0.01) {
  for(let theta = 0; theta < 360 / 4; theta++) {
    let A = n / PI * radians(theta); 
    let mod = floor(A) % 2; //floorは小数点の切り捨て、%は2で割った余り 

    let r0 = pow(-1, mod) * (A - floor(A)) + mod; //pow(-1. mod)で-1のmod乗
    let r = r0 + 2 * calculateH(r0);

    //極座標→直行座標
    let x = 100 * r * cos(radians(theta)); 
    let y = 100 * r * sin(radians(theta));

    vertex(x, y);
  }
  endShape(CLOSE);

}

function calculateH(x) {
  if(x < 0.8) {
    return 0;
  } else {
    return 0.8 - x;
  }
}
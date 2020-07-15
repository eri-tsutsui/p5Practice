// let n = 4;
let sakura = [];
let Num = 30;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  noStroke();

  for(let i = 0; i < Num; i ++) {
    sakura.push(new Sakura());
  }
}

function draw() {
  background(255);

  for(let i = 0; i < Num; i ++) {
    sakura[i].render();
  }
}

class Sakura {
  constructor() {
    this.n = 4;
    this.size = random(20, 50);
    this.vecLocation = createVector(random(width), random(height));

    this.hue = random(347, 353);
    this.saturation = random(25, 31);
    this.brightness = 100;
    this.alpha = random(0.6, 1);
  }

    // 計算
    update() {

    }

    // 描画
    render() {
      fill(this.hue, this.saturation, this.brightness, this.alpha);
      push();
      translate(this.vecLocation.x, this.vecLocation.y);
      beginShape();

      for(let theta = 0; theta < 360 / 4; theta++) {
        let A = this.n / PI * radians(theta); 
        let mod = floor(A) % 2; //floorは小数点の切り捨て、%は2で割った余り 

        let r0 = pow(-1, mod) * (A - floor(A)) + mod; //pow(-1. mod)で-1のmod乗
        let r = r0 + 2 * this.calculateH(r0);

        //極座標→直行座標
        let x = this.size * r * cos(radians(theta)); 
        let y = this.size * r * sin(radians(theta));

        vertex(x, y);
      }
      endShape(CLOSE);
      pop();
    }

    calculateH(x) {
      if(x < 0.8) {
        return 0;
      } else {
        return 0.8 - x;
      }
    }
}
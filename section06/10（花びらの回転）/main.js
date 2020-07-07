// let n = 4;
let sakura = [];
let Num = 100;

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
    sakura[i].update();
  }
}

class Sakura {
  constructor() {

    this.n = 4;
    this.size = random(20, 50);
    

    //x軸　ゆらゆら
    this.xBase = random(width);
    this.xRadius = random(50, 100);
    this.xTheta = random(360);
    this.xaVelocity = random(1, 2);

    this.vecLocation = createVector(this.xBase, random(height));

    this.yVelocity = this.size / 20;

    // 花びらの形を変える
    this.ySizeTheta = random(360);
    this.ySizeAVelocity = this.size / 20
    this.yScale = 1;

    //色設定
    this.hue = random(347, 353);
    this.saturation = random(25, 31);
    this.brightness = 100;
    this.alpha = random(0.6, 1);

  }

    // 計算
    update() {
      // sin(radian) -1 〜 1
      // 半径
      // xの基準の値
      // 基準値 + 半径 * sin(radian(角度)) 
      this.vecLocation.x = this.xBase + this.xRadius * sin(radians(this.xTheta));

      // 角速度=＞角度
      this.xTheta += this.xaVelocity;

      this.vecLocation.y += this.yVelocity;

      //花びらの形を変える
      // 絶対値 -1 ~ 1 => abs 0~ 1
      // 角速度→角度
      this.yScale = abs(sin(radians(this.ySizeTheta)));
      this.ySizeTheta += this.ySizeAVelocity;

      if(this.vecLocation.y > height) {
        this.vecLocation.y = -this.size;
      }

    }

    // 描画
    render() {
      fill(this.hue, this.saturation, this.brightness, this.alpha);
      push();
      translate(this.vecLocation.x, this.vecLocation.y);
      rotate(radians(this.xTheta));
      beginShape();

      for(let theta = 0; theta < 360 / 4; theta++) {
        let A = this.n / PI * radians(theta); 
        let mod = floor(A) % 2; //floorは小数点の切り捨て、%は2で割った余り 

        let r0 = pow(-1, mod) * (A - floor(A)) + mod; //pow(-1. mod)で-1のmod乗
        let r = r0 + 2 * this.calculateH(r0);

        //極座標→直行座標
        let x = this.size * r * cos(radians(theta)); 
        let y = this.size * this.yScale * r * sin(radians(theta));

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
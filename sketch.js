let font; // 載入字型文字
let points = []; // 轉成點狀文字
let r = 8; // 增加上下幅度
let angle = 0; // 三角函數內的角度

function preload() { // 在執行setup()前，必須先做此函數執行，主要先載入字型
 font = loadFont("fonts/Rowdies-Bold.ttf"); // 載入在fonts資料夾內的Rowdies-Bold.ttf字型
}

function setup() {
 createCanvas(windowWidth, windowHeight, WEBGL);
 points = font.textToPoints("TKUET", -300, 80, 200, {
 sampleFactor: 0.5
}); // 轉成文字圖檔，放在(0, 0)位置，圖形大小為200，sampleFactor為點數距離大小
 angleMode(DEGREES); // 宣告角度使用0~360
}

//===================================================

function draw() { // 畫圖
  // 背景圖案
 background("#edf6f9");
 translate(-width / 2, -height / 2);
 noFill();
 strokeWeight(2);
 let rect_width = 50;
 let bc_w = 50;
 let sc_w = 25;
 
  let scaleFactor = map(mouseY, 0, height, 1, 2); // 調整放大倍率
  rectMode(CENTER);
  for (let j = 0; j < 30; j++) {
  for (let x = 0; x < width; x += rect_width) {
    ellipse(x, 25 + 50 * j, bc_w * scaleFactor);
    rect(x, 25 + 50 * j, rect_width * scaleFactor);
    ellipse(25 + x + rect_width, 50 + 50 * j, sc_w * scaleFactor);
   }
 }

 // 前景動態效果
translate(width / 2, height / 2);
  rotateX(angle % 360);
  for (let i = 0; i < points.length - 1; i++) {
   fill("#eef4ed");
   ellipse(points[i].x + r * sin(angle + i * 25), points[i].y + r * sin(angle + i * 25), 10);
   strokeWeight(3);
   stroke("#efd3d7");
   line(points[i].x + r * sin(angle + i * 25), points[i].y + r * sin(angle + i * 25), points[i + 1].x, points[i + 1].y);
 }

  angle += 10; // 每畫圖一次就要調整角度+10
}


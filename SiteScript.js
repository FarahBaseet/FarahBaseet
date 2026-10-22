let puddlesY = [];
let puddlesX = [];
let puddlesD = [];
let puddles = 0;
let puddleOpacity = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  let blue = (sin(frameCount * (1/200))*25) + 70;
  background(23, blue, 117);
  //push();
  //fill((33, map(50, 35, 100, 85), 117));
  //ellipse();
  //pop();
  
  
  for(let i = 0; i <puddles; i++){
    if (puddleOpacity[i] <= 0){
         puddlesX.splice(i, 1);
         puddlesY.splice(i, 1);
         puddlesD.splice(i, 1);
         puddleOpacity.splice(i, 1);
         puddles--;
  } else{
    //stroke(107, 143, 205, puddleOpacity[i]);
    stroke(23+80, blue+80, 117+80, puddleOpacity[i]);

    noFill();
    ellipse(puddlesX[i], puddlesY[i], puddlesD[i]);
    puddlesD[i]++;
    puddleOpacity[i] -= random(.7, 1.5);
  }
  }

  push();
  fill(40, 97, 22);
  noStroke();
  translate(windowWidth/4, windowHeight/2);
  rotate(-PI/3);
  arc(0,  0, windowHeight/2, windowHeight/2, 0, PI + (PI*6/7));
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {  //add a new puddle
    puddlesX[puddles] = mouseX;
    puddlesY[puddles] = mouseY;
    puddlesD[puddles] = 0;
    puddleOpacity[puddles] = 255;

    puddles++;
}

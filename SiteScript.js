let lillypadsX  = [];
let lillypadsY  = [];
let lillypadsSize = [];
let lillypadsRot =  [];
let lillypadsArc = [];
let l;
let lillypadGreen = [];

let puddlesY = [];
let puddlesX = [];
let puddlesD = [];
let puddles = 0;
let puddleOpacity = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  l = random(3, 8);
  for(let i = 0; i<l; i++){
    lillypadsX[i] = random(windowWidth);
    lillypadsY[i] = random(windowHeight);
    lillypadsSize[i] = random(windowHeight/6, windowHeight/2);
    lillypadsRot[i] = random(2*PI);
    lillypadsArc[i] = random(PI + (PI*3/4), 2*PI);
    lillypadGreen[i] = random(25, 60);
  }
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

  
  for(let i = 0; i<l; i++){
        push();
        fill(lillypadGreen[i], 97, 22);
        noStroke();
        translate(lillypadsX[i], lillypadsY[i]);
        rotate(lillypadsRot[i]);
        arc(0,  0, lillypadsSize[i], lillypadsSize[i], 0, lillypadsArc[i]);
        pop();
  }
  

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

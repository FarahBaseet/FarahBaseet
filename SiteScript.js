var xValue = []
var yValue = [];
var coolcolor = [];
var speedy = [];
var speedx = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    for (var i = 0; i < 10; i++){
        xValue[i] = random(25, width-25);
        yValue[i] = random(25, height-25);
        coolcolor[i] = random(0, 255);
        speedy[i] = random(0, 5);
                speedx[i] = random(0, 5);

    }

}

function draw(){
    background(300, 0, 100);
    for (var e = 0; e  < 10; e++){
        fill(coolcolor[e], 50, 50);
        ellipse(xValue[e], yValue[e], 10, 10);
        xValue[e] = xValue[e] + speedx[e];
        yValue[e] = yValue[e] + speedy[e];

        if (yValue[e] <= 25 || yValue[e] >= height-25){
        speedy[e] = speedy[e]*(-1);
    }

    if (xValue[e] <= 25 || xValue[e] >= width-25){
        speedx[e] = speedx[e]*(-1);

    }
    }

    

}

function mouseDragged(){

}

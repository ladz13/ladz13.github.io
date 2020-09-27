let unicorn;
let uImg;
let tImg;
let bImg;
let trains = [];
let font,
  fontsize = 40;

function preload(){
  uImg = loadImage('DinosaurUnicorn.png');
  tImg = loadImage('DinosaurTrain.png');
  bImg = loadImage('DinosaurBackground.jpg');
}

function setup() {
  createCanvas(800, 450);
  unicorn = new Unicorn();
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function keyPressed() {
  if (key == ' ') {
    unicorn.jump();
  }
}

function draw() {
  if (random(1) < 0.01){
    trains.push(new Train());
  }
  
  background(bImg);
  
  for (let t of trains) {
    t.move();
    t.show();
    if(unicorn.hits(t)){
      text('game over',width/2,height/2);
      noLoop();
    }
  }
  
  unicorn.show();
  unicorn.move();
}
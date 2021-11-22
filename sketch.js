var jardim;
var coelho;
var maça;
var edges;
var folhaLaranja;
var folhaVermelha;
var jardimImg;
var coelhoImg;
var maçaImg;
var laranjaImg;
var folhaLaranjaImg;
var folhaVermelhaImg;



function preload(){
  jardimImg = loadImage("garden.png");
  coelhoImg = loadImage("rabbit.png");
  maçaImg = loadImage("apple.png");
  folhaLaranjaImg = loadImage("orangeLeaf.png");
  folhaVermelhaImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);

// Moving background
jardim=createSprite(200,200);
jardim.addImage(jardimImg);


//creating boy running
coelho = createSprite(160,340,20,20);
coelho.scale =0.09;
coelho.addImage(coelhoImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  coelho.x = World.mouseX;
  
  edges= createEdgeSprites();
  coelho.collide(edges);

  var select_elementos=Math.round (random(1,3));

  if (frameCount % 80 == 0) {
 if (select_elementos == 1) {
 gerarMaças ();
 }
 else if (select_elementos == 2) {
  gerarFolhasLaranjas ();
 }
else if (select_elementos == 3) {
  gerarFolhasVermelhas ();
}
}
drawSprites();}


function gerarMaças() {
maça = createSprite(random(50, 350),40, 10, 10);
maça.addImage(maçaImg);
maça.scale=0.07;
maça.velocityY = 3;
maça.lifetime = 150;
  
}

function gerarFolhasLaranjas() {
folhaLaranja = createSprite(random(50, 350),40, 10, 10);
folhaLarnja.addImage(folhaLaranjaImg);
folhaLarnja.scale=0.08;
folhaLarnja.velocityY = 3;
folhaLarnja.lifetime = 150;
}
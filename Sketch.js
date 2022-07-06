let human; 


function setup(){
  createCanvas(500, 500); 
	background(255); 
  human = loadImage("imagenes/human.png");  

  textFont('Rubik Glitch');
	textSize(80);
}

function draw(){
  image(human, 0, 0); 
  
  text("texto", 150, 350); 

}
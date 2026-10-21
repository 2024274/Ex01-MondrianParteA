function setup() {
  createCanvas(600, 600);
  }
//branco
function draw() {
  background(245);

//azul
  fill (20, 60, 160);
  rect(255, 365, 200, 200);
  
//amarelo
  fill (255, 200, 0);
  rect(0, 365, 65, 235);
  
//vermelho
  fill (255, 0, 0);
  rect(0, 0, 255, 205);
 
//linhas horizontais pretas
  fill (0, 0, 0);
  rect(0, 205, 600, 13);
  rect(0, 365, 600, 13);
  rect(255, 565, 200, 13);

//linhas verticais pretas
  fill (0, 0, 0);
  rect (255, 0, 8, 600);
  rect (455, 370, 8, 300);
  rect (57, 370, 8, 300);
}


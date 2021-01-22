function setup() {
  createCanvas(450, 450);
  fundo.loop();
 
}

function draw() {
  background(imagemTabuleiro);
  iniciaTabuleiro();
  movimentaBolinha();
}

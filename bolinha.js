let xBolinha = [130, 190, 250, 130, 190, 250, 5, 65, 130, 190, 250, 315, 375, 5, 65, 130, 190, 250, 315, 375, 5, 65, 130, 190, 250, 315, 375, 130, 190, 250, 130, 190, 250];

let yBolinha = [20, 20, 20, 80, 80, 80, 140, 140, 140, 140, 140, 140, 140, 200, 200, 200, 200, 200, 200, 200, 260, 260, 260, 260, 260, 260, 260, 322, 322, 322, 380, 380, 380];

let i = 0;
let mov = 1;

function criarBolinhas(x, y){
  for(var i = 0; i < 32; i++){
      imagemBolinhas[i] = image(bolinha, x, y, 70, 70);
  }
}

function movimentaBolinha(){
  if(frameCount%(70)==0){
    let func = "movimento"+mov.toString()+"()";
    setTimeout(func,1000);
    mov++;
  }
}
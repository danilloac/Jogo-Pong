//Propriedades da tela
function setup() {
  createCanvas(600, 400);
}

//Placar do jogo

let meusPontos = 0;
let pontosOponente = 0;

//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raio = diametro / 2;


//Velocidade da bolinha
function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
   xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;



}

// Váriáveis de raquete 1
 let xRaquete = 5;
 let yRaquete = 150;
 let raqueteComprimento = 10;
 let raqueteAltura = 90;
 let colidiu = false;


//Variáveis de raquete 2
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeYRaquete2;
let chanceDeErrar = 0;


// Propiedades de colisão
function colisaoBorda(){
   if (xBolinha + raio > width || 
      xBolinha - raio < 0) {
    
    velocidadeXBolinha *= -1;
   } 
  
  if (yBolinha + raio > height || 
      yBolinha - raio < 0) {
    
    velocidadeYBolinha *= -1;
   } 
}


function mostraRaquete(x, y){
   rect(x, y, raqueteComprimento, raqueteAltura);
  
   } 

function movimentaRaquete1() {
  if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}
 
 
function colisaoMinhaRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}
  
  
  function movimentaRaquete2(){
  velocidadeRaquete2 = yBolinha -yRaquete2 - raqueteComprimento / 2 - 30;
  yRaquete2 += velocidadeRaquete2 + chanceDeErrar
  calculaChanceDeErrar()
}
  function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosOponente, 470, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosOponente += 1;
    }
}

// Propriedades do jogo

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaquete2, yRaquete2);
  movimentaRaquete1();
  colisaoMinhaRaquete(xRaquete, yRaquete);
  movimentaRaquete2();
  colisaoMinhaRaquete(xRaquete2, yRaquete2);
  incluiPlacar();
  marcaPonto();
}
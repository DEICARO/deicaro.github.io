//color puede ser definido con multiples numeros de parametros:
//1 escala de grises 0 es negro y 255 es blanco
//3 es red, green blue
//2 es grayscale y alpha, donde cero es transparente y 255 es opaco
//4 es red green brlue alpha (transparencia)
//

//DECLARAR:
var diametro;
//despues de Declarar puedo darle un valor a la variable cuantas veces quiera

diametro = 20;


//crear un oscilador:

var osc;

//funcion para configurar el oscilador:

function setupOsc() {

  osc = new p5.Oscillator();
  osc.setType("sine");
  osc.freq(440);
  osc.amp(0.7);
  osc.start();
}

//las funciones tb dben ser declaradas asi:

function nombreFunction() {
  //linea 1 de lo que nombreFuncion()
  //lines 2 de lo que nombreFuncion()
  //etc
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 0);
  frameRate(1);

  setupOsc();

}

function draw() {

  //si el mouse esta en la mitad derechaque suene, si no qiue no suene:



  //osc.freq(mouseX);
  //osc.amp(0.1+mouseY/height)

  if (mouseX > width / 2) {
    osc.amp(0.7);
    osc.freq(500+3*random(100));
    
    
    
  } else {
    osc.amp(0);

  }

  var ancho;

  ancho = 255;


  //elejimos las opciones de dibujo de la elipse
  //strokeWeight()define el ancho del borde de la figura
  strokeWeight(5);
  //stroke elije el color del borde

  //background(255, 255, 0);

  estilo1();


  //crear una elipse en la coordenada 100,1000 de ancho 50 y altura 10
  //ellipse (posX, widh, heigh);
  ellipse(mouseX, mouseY, diametro, 20);

  estilo2();

  //triangle(x1, y1, x2, y2, x3, y3 )

  triangle(50, 0, 0, height, mouseX, mouseY)


  //escribir rectangulo: rect (posX, posY, wight, height)

  rect(mouseX, 255, 30, 60);
  
  muchasVeces();

}

//nueva funcion que define el estilo de la elipse llamada estilo 1



function estilo1() {

  strokeWeight(5);
  stroke(0, 0, 255, 100);
  fill(0, 255, 0, 100);

  //stroke elije el color del borde

}

//nueva funcion que define el estilo de la elipse llamada estilo 1



function estilo2() {

  strokeWeight(9);
  stroke(5, 5, 200, 2);
  fill(100, 255, 0, 100);

  //stroke elije el color del borde

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));

}


//funcion para iterar

function muchasVeces(){
  
//for(inicio; condicion; refresco) {}  
  for(var i = 0; i < 1000; i = i + 1){
  ellipse(random(width), random(height), random(100), random(100));
  }
}
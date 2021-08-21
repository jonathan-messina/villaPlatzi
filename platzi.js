var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);

var xLobo = 150;
var yLobo = 100;

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

function moverLobo(evento)
{
	var movimiento = 30;
	var teclas =
	{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
	switch(evento.keyCode)
	{
		case teclas.LEFT:
			xLobo = xLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.UP:
			yLobo = yLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.RIGHT:
			xLobo = xLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.DOWN:
			yLobo = yLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
	}
}

var fondo = {
  url: "tile.png",
  cargaOK: false
}

var lobo = {
	url: "lobo.png",
	carga: false
}

var vaca = {
 url: "vaca.png",
 cargaOK: false
}

var pollo = {
 url: "pollo.png",
 cargaOK: false
}

var cerdo = {
 url: "cerdo.png",
 cargaOK: false
}


var cantidad = aleatorio(3, 8);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargaLobo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);


function cargaLobo()
{
	lobo.cargaOK = true;
	dibujar();
}
function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  mantenerPosicion();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  mantenerPosicion();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  mantenerPosicion();
}

function dibujar ()
{
  if(fondo.cargaOK) //no es necesario == true, ya que se ejecuta si la condicion se da//
  {
    papel.drawImage(fondo.imagen, 0 , 0);
  }
  if(vaca.cargaOK)
   {
    for (var v=0; v < cantidad; v++)
    {
        papel.drawImage(vaca.imagen,xVaca[v], yVaca[v]);
    }
   }
  if(pollo.cargaOK)
    {
      for (var p=0; p < 1; p++)
      {
      papel.drawImage(pollo.imagen, xCerdo[p], yCerdo[p]);
      }
    }
  if(cerdo.cargaOK)
      {
        for (var c=0; c < cantidad; c++)
        {
        papel.drawImage(cerdo.imagen, xPollo[c], yPollo[c]);
        }
      }
  if(lobo.cargaOK)
      	{
      		papel.drawImage(lobo.imagen, xLobo, yLobo);
      	}
   }


function mantenerPosicion()
{
   	if(vaca.cargaOK)
   	{
   		var cantidad = aleatorio(1, 5);
   		for(var i=0; i<cantidad; i++)
   		{
   			var x = aleatorio(0, 6);
   			var y = aleatorio(0, 6);
   			x = x*70;
   			y = y*70;
   			xVaca[i] = x;
   			yVaca[i] = y;
   		}
   	}
   	if(cerdo.cargaOK)
   	{
   		var cantidad = aleatorio(1, 5);
   		for(var i=0; i<cantidad; i++)
   		{
   			var x = aleatorio(0, 6);
   			var y = aleatorio(0, 6);
   			x = x*70;
   			y = y*70;
   			xCerdo[i] = x;
   			yCerdo[i] = y;
   		}
   	}
   	if(pollo.cargaOK)
   	{
   		var cantidad = aleatorio(1, 10);
   		for(var i=0; i<cantidad; i++)
   		{
   			var x = aleatorio(0, 6);
   			var y = aleatorio(0, 6);
   			x = x*70;
   			y = y*70;
   			xPollo[i] = x;
   			yPollo[i] = y;
   		}
   	}
   	dibujar();
   }


/*las definiciones completas de un objeto son llamadas clases y
comienzan con Mayus ej: Image, Math */
function aleatorio(min, maxi) // las funciones u objetos no llevan ";"//
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
//resultado solo existe dentro de la funcion donde fue creada//

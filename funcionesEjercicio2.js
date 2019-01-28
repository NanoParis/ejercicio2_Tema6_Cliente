window.onload=iniciar;

var cont=0;
var totalFilas=0;

function iniciar(){
	var nombre=document.getElementById("nombre");
	var apellidos=document.getElementById("apellidos");
	var curso=document.getElementById("curso");
	document.getElementById("agregar").addEventListener('click',agregar,false);
}

function agregar(){
	
	var patronCampos=/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+(\s[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+)?$/;
	
	if(!patronCampos.test(nombre.value)){
		
	}else if(!patronCampos.test(apellidos.value)){
		
	}else{
	
	var nodoFila=document.createElement('tr');//Creo el tr
	nodoFila.setAttribute("id",cont);//Le asigno el contador como id a la fila, para luego borrarla
	var nodoTabla=document.getElementById('tabla');//Guardo en la variable nodoTabla el id tabla1
	nodoTabla.appendChild(nodoFila);//A la tabla le añado el tr (nodoFila)
		
	totalFilas++;	
	
	for(x=0;x<1;x++){
		nodoCelda=document.createElement("td");//Creo el td
		nodoFila.appendChild(nodoCelda);//Al tr le añado una celda
		valorTexto1=document.createTextNode((cont+1));//Muestro el mensaje en la celda
		nodoCelda.appendChild(valorTexto1);//Asigno el texto a la celda
	}
	
	for(x=0;x<1;x++){
		nodoCelda=document.createElement("td");
		nodoFila.appendChild(nodoCelda);
		valorTexto1=document.createTextNode(nombre.value);
		nodoCelda.appendChild(valorTexto1);
	}
	
	for(x=0;x<1;x++){
		nodoCelda=document.createElement("td");
		nodoFila.appendChild(nodoCelda);
		valorTexto1=document.createTextNode(apellidos.value);
		nodoCelda.appendChild(valorTexto1);
	}
	
	for(x=0;x<1;x++){
		nodoCelda=document.createElement("td");
		nodoFila.appendChild(nodoCelda);
		valorTexto1=document.createTextNode(curso.value);
		nodoCelda.appendChild(valorTexto1);
	}
	
	for(x=0;x<1;x++){
		nodoCelda=document.createElement("td");
		nodoFila.appendChild(nodoCelda);
		boton=document.createElement("button");
		valorTexto1=document.createTextNode("Borrar registro");
		boton.appendChild(valorTexto1);
		nodoCelda.appendChild(boton);
		boton.setAttribute("onclick","eliminarRe("+cont+")");
	}
	
	cont++;
	
	}
}

function eliminarRe(cont){
	totalFilas--;
	
	//alert(cont);
	
	document.getElementById(cont).remove();
	
	if(totalFilas==0){
		cont=0;
	}
	
}
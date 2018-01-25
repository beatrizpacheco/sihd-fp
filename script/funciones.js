
function cerrarComentarios(){
	var comentarios = document.getElementsByName("comentario");
	for (i=0;i<comentarios.length;i++){
		comentarios[i].style.visibility = "hidden";
	}
}

function mostrarMensaje(nombreComentario){
	cerrarComentarios();
	var comentario = document.getElementById(nombreComentario);
	comentario.style.visibility = "visible";
}

$.mostrarOcultar = function(ultimaFoto){
	//while(true){
		
		var demora = 3000;
		var numGrupo = ultimaFoto;
		while (numGrupo == ultimaFoto){
			numGrupo = 1 + Math.floor(Math.random() * 11);
		}
		var param = '$.mostrarOcultar(' + numGrupo + ');';
		setTimeout(param, demora*2+200);
		var prefijoFotos = "#imagen_grupo";
		var fotoMostrar = prefijoFotos + numGrupo;
		var foto = $(fotoMostrar);
		var anchoDisponible = $(".imagenes_grupos").width();
		var anchoFoto = foto.width();
		var margenIzquierdo = 1 + Math.floor(Math.random() * (anchoDisponible - anchoFoto + 1));
		if (margenIzquierdo < 0){ margenIzquierdo=0; }
		//var alturaDisponible = $(".titulo_principal").height();
		
		//var alturaFoto = foto.height();
		//alert((alturaDisponible - (alturaFoto * 0.88)));
		foto.css('padding-left', margenIzquierdo);
		//foto.css('margin-top', (alturaDisponible - (alturaFoto * 0.88)))
		foto.fadeIn(demora);
		foto.fadeOut(demora);
		
	//}
};

$(document).ready(
	function(){
		//$("#imagen_grupo1").fadeIn(5000);
		$.mostrarOcultar(0);
	}
);

$.extenderEncoger = function(elemento){
	var extendido = $(elemento).attr('data-extendido');
	if(extendido == 'true'){
		var anchoReducido = $(elemento).attr('data-anchoReducido');
		$(elemento).animate({width:anchoReducido},500);
		$(elemento).attr('data-extendido','false');
	}
	else{
		var anchoOriginal = $(elemento).attr('data-anchoOriginal');
		$(elemento).animate({width:anchoOriginal},500);
		$(elemento).attr('data-extendido','true');
	}
}
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
    
}

const listaDeTecla = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTecla.length; contador++){
    const tecla = listaDeTecla[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
}

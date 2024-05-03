function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName ==='audio'){
        elemento.play()
    }else{
        console.log('Elemento ou seletor não inválido');
    }
    
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
    tecla.onkeydown = function(){
        tecla.classList.add('ativa')
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}



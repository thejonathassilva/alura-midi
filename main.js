function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => tecla.onclick = function() {
    const instrumento = tecla.classList[1];
    const idAudio = `#som__${instrumento}`
    tocaSom(idAudio);

    tecla.onkeydown = function (evento) {
        if(evento.key === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
})
// document.querySelector('.tecla_pom');
//document é usado para pegar um escopo do projeto inteiro. Já o querrySelector pega os dados da classe selecionada.

function tocaSom(idAudio){
    document.querySelector(idAudio).play();
}
const teclas = document.querySelectorAll('.tecla');
const som = ['#som_tecla_pom', '#som_tecla_clap', '#som_tecla_tim','#som_tecla_puff','#som_tecla_splash','#som_tecla_toim','#som_tecla_psh','#som_tecla_tic','#som_tecla_tom']

for(let atual =0; atual< teclas.length; atual ++){
    teclas[atual].onclick = function (){
        tocaSom(som[atual]);
    }
    //Colocando vermelho quando a tecla for pressionada
    teclas[atual].onkeydown = function(evento){
        
    if(evento.code === 'Space'){
        teclas[atual].classList.add('ativa');

    }
    }
    //tirando o vermelho
    teclas[atual].onkeyup = function(){
        teclas[atual].classList.remove('ativa');
    }
}

//listaTeclas = teclas[atual].classList[1]

// teclas[0].classList
//faz uma lista dos atributos desse item do array.
// document.querySelector('.tecla_pom');
//document é usado para pegar um escopo do projeto inteiro. Já o querrySelector pega os dados da classe selecionada.

function tocaSom(idAudio){
    document.querySelector(idAudio).play();
}
const teclas = document.querySelectorAll('.tecla');
const som = ['#som_tecla_pom', '#som_tecla_clap', '#som_tecla_tim','#som_tecla_puff','#som_tecla_splash','#som_tecla_toim','#som_tecla_psh','#som_tecla_tic','som_tecla_tom']

for(let atual =0; atual< teclas.length; atual ++){
    teclas[atual].onclick = function (){
        tocaSom(som[atual]);
    }
}




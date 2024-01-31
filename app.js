let listanumerossorteados= [];
let numerolimite = 10; 
let numerosecreto = gerarnumeroaleatorio();
let tentativas = 1 ;



let paragrafo = document.querySelector ('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';


function exibirTextoNaTela (tag, texto) {

    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate:1.2});

}

function exibirmensageminicial() {

    exibirTextoNaTela('h1' , 'Jogo do Numero Secreto');
    exibirTextoNaTela ('p' , 'Escolha um numero entre 1 e 10');

}

exibirmensageminicial();



function verificarChute(){

    let chute =document.querySelector ('input') .value;
if (chute== numerosecreto){

    exibirTextoNaTela('h1', 'Parabens Voce acertou!');

    let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 

    let mensagemtentativas =  `Voce descobriu o Numero Secreto!, Com Apenas  ${tentativas} ${palavratentativa}!` ;

    exibirTextoNaTela ('p' , mensagemtentativas);

    document.getElementById('reiniciar').removeAttribute ('disabled');

} else {
    if (chute > numerosecreto)  {

        exibirTextoNaTela ('p', 'O numero é menor ');

    } else {

        exibirTextoNaTela ('p', 'O numero secreto é maior');

    }

    //tentativas = tentativas + 1 ;
    tentativas++;
    limparcampo();

}


}

function gerarnumeroaleatorio () {

    let numeroescolhido = parseInt( Math.random() * numerolimite + 1 );
    let quantidadedeelementosnalista =  listanumerossorteados .length;

    if (quantidadedeelementosnalista ==  numerolimite ) {

        listanumerossorteados = [];

    }

    if(listanumerossorteados .includes(numeroescolhido)){

            return gerarnumeroaleatorio();

    } else {

        listanumerossorteados.push(numeroescolhido);
        return numeroescolhido;

    }

}

function limparcampo(){

   
        chute = document.querySelector ('input') ; 
        chute.value = '';
        
}
function reiniciarjogo(){

numerosecreto = gerarnumeroaleatorio();
limparcampo();
tentativas = 1 ;
exibirmensageminicial()
document.getElementById ('reiniciar').setAttribute ('disabled' , true)


}





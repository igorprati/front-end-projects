// indica quais são meus inimigos e minhas armas
const inimigos = document.querySelectorAll('.inimigo');
const armas = document.querySelectorAll('.arma');

let inimigoSelecionado = 0;
let armaSelecionada = 0;
let nomeInimigo = 0;

// ENTENDER QUE EU CLIQUEI EM UM INIMIGO, E SELECIONAR ESTE INIMIGO
for(const inimigo of inimigos){

    inimigo.addEventListener('click', function(){
    
        if(document.getElementsByClassName('inimigo-selecionado').length < 1){ // caso a quantidade de classes 'inimigo-selecionado' forem MENOR que 1, ou seja, ZERO, executa o if abaixo
            this.classList.add('inimigo-selecionado'); // adiciona a classe 'inimigo-selecionado' ao elemento clicado
            inimigoSelecionado = this.getAttribute('data-vida'); // adiciona o valor de 'data-vida' do elemento clicado à variável inimigoSelecionado
            nomeInimigo = this.getAttribute('data-nome');
        }else{ // caso a quantidade de classes 'inimigo-selecionado' forem MAIOR que 1, executa o else
            this.classList.remove('inimigo-selecionado'); // ao ser clicado, remove a classe 'inimigo-selecionado' do meu elemento se este já possui esta classe
            inimigoSelecionado = 0
            nomeInimigo = 0
        }
    })
}

// ENTENDER QUE EU CLIQUEI EM UMA ARMA, E SELECIONAR ESTA ARMA
for(const arma of armas){

    arma.addEventListener('click', function(){

        if(document.getElementsByClassName('arma-selecionada').length < 1){
            this.classList.add('arma-selecionada');
            armaSelecionada = this.getAttribute('data-dano');
        }else{
            this.classList.remove('arma-selecionada');
            armaSelecionada = 0
        }
    })
}

function calcularDano(){

    const danoDados = rolarOsDados();
    const danoTotal = danoDados + Number(armaSelecionada);

    if(inimigoSelecionado == 0 || armaSelecionada == 0){
        window.alert('Você precisa selecionar um inimigo e uma arma!!!');
    }else{
        if(danoTotal >= inimigoSelecionado){
            window.alert(`Dano: ${danoTotal}! Você matou ${nomeInimigo}!!!`);
        }else{
            window.alert(`Dano: ${danoTotal}... ${nomeInimigo} sobreviveu ao ataque...`);
        }
    }
}

function rolarOsDados() {
    const min = Math.ceil(1);
    const max = Math.floor(10);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}




   




let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//A versão ineficiente de declarar o título e o parágrafo, bem como explicação dos comandos, em arquivo de texto na mesma pasta.
//Automatizando e tornando mais eficiente:

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

//Criar função para colocar as mensagens iniciais na tela. Faz-se isso pra não ter que repetir na hora de clicar em novo jogo.
//A função tem que ser chamada pra funcionar (logo abaixo).
function exibirMensagemInicial () {

    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

    exibirMensagemInicial();

//O verificarChute é o que acontece quando clica no botão. Tem que criar uma função com esse nome, e explicitar o que ela faz.

function verificarChute() {

    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Parabéns!');
        let plural = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto (${chute}) com ${tentativas} ${plural}!`;
        exibirTextoNaTela ('p', mensagemTentativa);

        //O botão "Novo jogo", disabled por padrão no html, deve ser ativado ao término do jogo. usa o id que tá no html.
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto) {

        exibirTextoNaTela ('h1', 'Vixe, foi quase!');
        let mensagemTentativa1 = `O número secreto é menor do que ${chute}. Tente de novo!`;
        exibirTextoNaTela ('p', mensagemTentativa1 );
        tentativas++;
        limparCampo();

    } else {

        exibirTextoNaTela ('h1', 'Vixe, foi quase!');
        let mensagemTentativa2 = `O número secreto é maior do que ${chute}. Tente de novo!`;
        exibirTextoNaTela ('p', mensagemTentativa2);
        tentativas++;
        limparCampo();

    }

}

//Retorna o número aleatório. Repare na necessidade de colocaro return, ou o número será gerado, mas não irá a lugar nenhum.
//Com o return, a variável pode obter esse valor gerado.

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ('');
}

function reiniciarJogo () {

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    //Aqui, disablitamos o botão de novo jogo até que haja vitória novamente. Repare que não é só colocar o atributo, deve-se dizer que o status dele é verdadeiro.
    document.getElementById('reiniciar').setAttribute('disabled',true);

}
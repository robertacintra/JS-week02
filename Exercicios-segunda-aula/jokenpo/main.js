let sobrenome;
let name = document.querySelector('#name').value;
let botaoEnviarNome = document.querySelector('#button');
let opcao = document.querySelector('#opcao');
let botaoEnviarJoken = document.querySelector('#button2')

botaoEnviarNome.addEventListener('click', function() {
    sobrenome = document.querySelector('#sobrenome').value;

    document.querySelector('#name').style.display = "none";
    document.querySelector('#jokenpo').style.display = "block";
});

botaoEnviarJoken.addEventListener('click', function() {
    let opcao = document.querySelector('#opcao').value;

    let pc = Math.random();

    if(pc <= 0.2) {
        pc = 'papel';
    } else if (pc <= 0.4) {
        pc = 'pedra';
    } else if (pc <= 0.6) {
        pc = 'tesoura';
    } else if (pc <= 0.8) {
        pc = 'lagarto';
    } else if (pc <= 1) {
        pc = 'spock';
    }
    
    switch(opcao) {
        case 'papel':
        if (pc === 'papel') {
            texto.innerHTML = `${sobrenome} escolheu ${opcao} e o computador escolheu ${pc}. Empate, jogar novamente!`
        } else if (pc === 'pedra' || pc === 'spock') {
            texto.innerHTML = `Você escolheu ${opcao} e o computador escolheu ${pc}. ${sobrenome} ganhou, e o computador perdeu. `
        } else {
            texto.innerHTML = `Você escolheu ${opcao} e o computador escolheu ${pc}. O computador ganhou.`
        }
        break;

        case 'tesoura':
        if (pc === 'tesoura') {
            texto.innerHTML = `${sobrenome} escolheu ${opcao} e o computador escolheu ${pc}. Empate, jogar novamente!`
        } else if (pc === 'papel' || pc === 'lagarto') {
            texto.innerHTML = `Você escolheu ${opcao} e o computador escolheu ${pc}. Você ganhou!`
        } else {
            texto.innerHTML = `${sobrenome} escolheu ${opcao} e o computador escolheu ${pc}. O computador vence.`
        }
        break;

        case 'lagarto':
        if (pc === 'lagarto') {
            texto.innerHTML = `${sobrenome} escolheu ${opcao} e o computador escolheu ${pc}. Empate, jogar novamente!`
        } else if (pc === 'papel' || pc === 'spock') {
            texto.innerHTML = `${sobrenome} escolheu ${opcao} e o computador escolheu ${pc}. Você ganhou!`
        } else {
            texto.innerHTML = `${sobrenome} escolheu ${opcao} e o computador escolheu ${pc}. O computador vence.`
        }
        break;

        case 'pedra':
        if (pc === 'pedra') {
            texto.innerHTML = `${sobrenome} escolheu ${opcao} e o computador escolheu ${pc}. Empate, jogar novamente!`
        } else if (pc === 'papel' || pc === 'spock') {
        texto.innerHTML = `${sobrenome} escolheu ${opcao} e o computador escolheu ${pc}. Você ganhou!`
        } else {
            texto.innerHTML = `${sobrenome} escolheu ${opcao} e o computador escolheu ${pc}. O computador vence.`
        }
        break;

        case 'spock':
        if (pc === 'spock') {
            texto.innerHTML = `${sobrenome} escolheu ${opcao} e o computador escolheu ${pc}. Empate, jogar novamente!`
        } else if (pc === 'papel' || pc === 'tesoura' || pc === 'pedra') {
            texto.innerHTML = `${sobrenome} escolheu ${opcao} e o computador escolheu ${pc}. Você ganhou!`
        } else {
            texto.innerHTML = `${sobrenome} escolheu ${opcao} e o computador escolheu ${pc}. O computador vence.`
        }
        break;
    }
});
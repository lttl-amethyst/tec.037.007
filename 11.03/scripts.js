let botao = document.getElementById('botão_cor');
botao.addEventListener('click', () => {
    //cor atual na variavel 
    let corAtual = document.body.style.backgroundColor;
    //muda a cor de fundo
    document.body.style.backgroundColor='pink';
    if (corAtual == 'pink') {
        document.body.style.backgroundColor='blue';
    } else {
        document.body.style.backgroundColor='pink';
    }

});
    
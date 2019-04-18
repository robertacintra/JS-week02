window.addEventListener('DOMContentLoaded', function(event) {

    let button = document.querySelector('#button');
    let result = document.querySelector('#result');
    
    button.addEventListener('click', function(){
    let checkedBoxes = document.querySelectorAll('input[name=question]:checked').length;
    
    document.querySelector('#result').scrollIntoView({
        behavior: 'smooth'
    });
    
    if (checkedBoxes <= 3) {
        result.innerHTML = `Você marcou ${checkedBoxes} de 11 nessa lista. Talvez os boatos tenham chego até você, ou você simplesmente trombou com alguns desses Pokémons e eles não deixaram uma boa impressão. Tudo bem! Não deixe essas experiências ou boatos influenciarem as próximas vezes, um Pidgey muito bacana pode estar te esperando na moita mais próxima :D`;
    } else if (checkedBoxes <= 4 || checkedBoxes <= 8) {
        result.innerHTML = `Você marcou ${checkedBoxes} de 11 nessa lista. Parabéns! Você ama muitos pokémons, apesar do que os outros podem dizer por aí sobre eles. Não ligue para eles, eles não sabem o que estão perdendo <3`;
    } else {
        result.innerHTML = `Você marcou ${checkedBoxes} de 11 nessa lista. A sua afinidade com esses lindinhos é incrível! Você não economiza no amor quando se trata de Pokémons. Muito bem <3`;
    }
    
    });
    
});
    
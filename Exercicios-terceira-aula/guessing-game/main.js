window.addEventListener('DOMContentLoaded', function() {
    const displayGifs = ['https://i.pinimg.com/originals/a2/d4/8b/a2d48b5a1ef49de8c2cbcf7701d5a4a9.gif', 'https://media1.tenor.com/images/a42b124a49aea6012357b9891129c532/tenor.gif?itemid=5247105', 'https://i.gifer.com/QIXX.gif'];
    const displayRespostas = [
        '✨ Sakura (Card Captors Sakura) ✨', 
        '✨ Usagi (Sailor Moon) ✨', 
        '✨ Kagome (Inuyasha) ✨'
    ];
    
    const btn = document.querySelector('#btn');
    const gif = document.querySelector('#gif');

    function btnOne() {
        gif.innerHTML = `<img width="600" src=${displayGifs[0]} />`;
    }
    function btnTwo() {
        gif.innerHTML = `<img width="600" src=${displayGifs[1]} />`;
    }
    function btnThree() {
        gif.innerHTML = `<img width="600" src=${displayGifs[2]} />`;
    }

    function respostasPersonagem() {
        gif.innerHTML = "";

        displayRespostas.forEach(function(item) {
            return respostasPersonagens.innerHTML += `<li>${item}</li>`;
        });
    }

    btn.addEventListener('click', function () {
    respostasPersonagens.innerHTML = "";

    btnOne();

    setTimeout(btnTwo, 5000);
    setTimeout(btnThree, 10000);
    setTimeout(respostasPersonagem, 15000);
    });

});
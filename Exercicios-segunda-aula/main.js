//Crie um array com no mínimo 5 nomes de cachorros (ou gatos, ou outro animal) e mostre na tela a quantidade de variáveis do array e também os nomes dos cachorros.

let kitties = ["Kuroo", "Yaku", "Kenma", "Lev", "Inuoka"];
let cats = document.querySelector('#cats');
let names = document.querySelector('#names');
let tamanho = kitties.length;

kitties.forEach(function(item) {
    //console.log(item);
    cats.innerHTML = `O array kitties tem ${tamanho} itens:`;
    names.innerHTML += `<li>${item}</li>`;
    //names.innerHTML += item;
});


// 'O array dogs tem ' + tamanho + ' itens:'
/*let kittiesKuroo = "Kuroo";
let kittiesYaku = "Yaku";
let kittiesKenma = "Kenma";
let kittiesLev = "Lev";
let kittiesInuoka = "Inuoka";*/
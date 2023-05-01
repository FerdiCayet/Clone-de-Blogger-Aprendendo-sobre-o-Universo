console.log("%c\tSeja muito bem-vindo ao meu site!\t",
    "border-radius: 5px; color: #f1ff0084; background: #0009ff84; background: linear-gradient(90deg, #0009ff81 0%, #ff00007f 100%);");

const artigo = document.querySelectorAll("article");
const pagerPoster = document.querySelector('.pager-posters');
const infoDate = document.querySelectorAll('.info-date');
const headerDate = document.querySelectorAll('.header-date');
const infoVisit = document.querySelector(".websiteInfo");
const rodape = document.querySelector('footer');

let mql = window.matchMedia('(max-width: 650px)');
let visitQuant = localStorage.getItem("pageView");

window.addEventListener("resize", function() {
    var w = window.innerWidth;
    if(650 >= w){
        artigo[1].style.borderBottomColor = 'rgb(204, 204, 204)';
        rodape.children[1].firstChild.textContent = 'Tecnologia do ';
    }else{
        artigo[1].style.borderBottomColor = 'transparent';
        rodape.children[1].firstChild.textContent = 'Tema Espetacular Ltda.. Tecnologia do ';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (visitQuant) { //Verifique se a entrada visitQuant está presente
        visitQuant = Number(visitQuant) + 1;
        localStorage.setItem("pageView", visitQuant);
    } else {
        visitQuant = 1;
        localStorage.setItem("pageView", 1);
    }
    infoVisit.innerHTML = visitQuant;
});

document.addEventListener('keyup', (e) => {
    navigator.clipboard.writeText('');
    /*document.querySelector('#infoDialog').setAttribute('open','true');
    document.querySelector('#infoDialog').textContent = 'Esta página não é permitida ao capturar a tela.';
    setTimeout(() => {
        document.querySelector('#infoDialog').removeAttribute('open');
    }, 7000);*/
});

function recarregarPagina(){
    window.location.reload(true);
}

function removeArtigo(){
    let i = 0;
    while (i < artigo.length) {
        artigo[i].remove();
        i++;
    }
}

document.querySelectorAll("[wm-nav]").forEach((link) => {
    const conteudo = document.getElementById('conteudo');

    link.onclick = function(e) {
        e.preventDefault();
        fetch(link.getAttribute("wm-nav"))
        .then((resp) => resp.text())
        .then((html) => (conteudo.innerHTML = html));

        removeArtigo();

        pagerPoster.children[1].remove();
        pagerPoster.style.marginTop = '25px';
        pagerPoster.children[0].style.margin = 'auto';
        pagerPoster.children[0].style.padding = 'auto';

    };
});

document.querySelector('nav .infoMore').addEventListener('click', () => {
    document.querySelector('.menuContent').classList.toggle('newlist');
    document.querySelector('.menuContent').addEventListener('mouseleave', () => {
        document.querySelector('.menuContent').classList.remove('newlist');
    })
});

document.querySelector('.pager-posters').children[1].addEventListener('click', () => {
    let msg = confirm('Deseja confirmar que a página oficial redireciona esta outra página?');
    if(msg){
        window.location.assign('https://aprendendosobreouniverso.blogspot.com/search?updated-max=2016-02-01T23:13:00-02:00&max-results=10');
    }
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'pt'}, 'google_translate_element');
}

document.querySelectorAll('[wm-folder]').forEach(folder => {
    const ul = folder.nextElementSibling;
    folder.onclick = function(e){
        const d = ul.style.display;
        ul.style.display = d === 'block' ? 'none' : 'block';
    }
});

infoDate.forEach((elem, i) => {
    if (infoDate[i+1] && elem.childNodes[0].textContent.includes(infoDate[i+1].childNodes[0].textContent)) {
        headerDate[i+1].remove();
        artigo[i].style.marginBottom = '0px';
        artigo[i].style.borderBottomColor = 'transparent';
        artigo[i+1].style.borderTopColor = 'transparent';
    }
});
/*
Milestone 0:
creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra. 
*/
const imagesArray = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
]; 



const imageListDom = document.querySelector('.image-list');
const thumbContainerDom = document.querySelector('.thumb-container');

let sliderContent = "";
let thumbContent = "";

// scorro l'array delle immagini e creo il codice html necessario alla stampa sulla pagina web
for (let i = 0; i < imagesArray.length; i++) {
    const imageArray = imagesArray[i]
    for(let key in imageArray){
        console.log(imageArray[key])
       
    }
    const newImageWrapper = `<div class="image-wrapper">
    <img class="image" src="${imageArray.image}" />
</div>`;

const newThumb =    `<div class="thumb-wrapper">
<img class="thumb-img" src="${imageArray.image}" />
</div>`;
sliderContent += newImageWrapper;       
thumbContent += newThumb;
}

imageListDom.innerHTML = sliderContent;
thumbContainerDom.innerHTML = thumbContent;

const imagesWrapperDom = document.getElementsByClassName('image-wrapper');
const thumbsDom = document.getElementsByClassName('thumb-wrapper');

for (let i = 0; i < thumbsDom.length; i++) {
    thumbsDom[i].style.height = `calc(100% / ${thumbsDom.length}`;
}

let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show'); 
thumbsDom[activeImage].classList.add('active');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click', 
    function() {

        

            imagesWrapperDom[activeImage].classList.remove('show');
            thumbsDom[activeImage].classList.remove('active');

            if (activeImage == imagesWrapperDom.length -1) {
                activeImage = 0;
            } else {
                activeImage = activeImage + 1;
            }

            imagesWrapperDom[activeImage].classList.add('show');
            thumbsDom[activeImage].classList.add('active');

        
    }
);

prevDom.addEventListener('click', 
    function() {
        if (activeImage > 0) {

            imagesWrapperDom[activeImage].classList.remove('show');
            thumbsDom[activeImage].classList.remove('active');

            if (activeImage == 0) {
                activeImage = imagesWrapperDom.length - 1;
            } else {
                activeImage--;
            }

            imagesWrapperDom[activeImage].classList.add('show');
            thumbsDom[activeImage].classList.add('active');

            
                nextDom.classList.remove('hide');
                if (activeImage == 0) {
                    prevDom.classList.add('hide');
                }
            

        }
    }
);
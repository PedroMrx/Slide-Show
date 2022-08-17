'use strict';

const images = [
    { 'id': '1', 'url': './imgs SS/r34.jpg'  },
    { 'id': '2', 'url': './imgs SS/Rx7.jpg'  },
    { 'id': '3', 'url': './imgs SS/supra.jpg'},
    { 'id': '4', 'url': './imgs SS/MF.jfif'},
    { 'id': '5', 'url': './imgs SS/X-wing.jpg'},
]


const containerItems = document.querySelector("#container-items");

const loadImages = ( images, container ) => {
    images.forEach (image => {
        container.innerHTML +=  
        `<div class="item">
            <img src = '${image.url}' 
        </div>
        ` // template string
    })
}

loadImages(images, containerItems); 

let items = document.querySelectorAll('.item');

const prev = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector("#prev").addEventListener('click', prev);
document.querySelector("#next").addEventListener('click', next);
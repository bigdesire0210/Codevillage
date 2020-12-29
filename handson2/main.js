// 'use strict';

// {
//     const open = document.getElementById('open')
//     const overlay = document.querySelector('.ham')
//     const close = document.getElementById('close')
//     const mnclose = document.getElementById('mn-close')
//     const cpclose = document.getElementById('cp-close')
//     const acclose = document.getElementById('ac-close')
//     const rsclose = document.getElementById('rs-close')


//     open.addEventListener('click', () => {
//         overlay.classList.add('show');
//         open.classList.add('hide');
//     });

//     close.addEventListener('click', () => {
//         overlay.classList.remove('show');
//         open.classList.remove('hide');
//     });

//     mnclose.addEventListener('click', () => {
//         overlay.classList.remove('show');
//         open.classList.remove('hide');
//     });

//     cpclose.addEventListener('click', () => {
//         overlay.classList.remove('show');
//         open.classList.remove('hide');
//     });

//     acclose.addEventListener('click', () => {
//         overlay.classList.remove('show');
//         open.classList.remove('hide');
//     });

//     rsclose.addEventListener('click', () => {
//         overlay.classList.remove('show');
//         open.classList.remove('hide');
//     });
// }

function hamburger() {
    document.getElementById('line1').classList.toggle('linea');
    document.getElementById('line2').classList.toggle('lineb');
    document.getElementById('line3').classList.toggle('linec');
    document.getElementById('target').classList.toggle('slidex');
    document.getElementById('nav_f').classList.toggle('fadein');
}

document.getElementById('target').addEventListener('click', function () {
    hamburger();
});

let list = document.getElementsByClassName('list');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        hamburger();
    });
}
'use strict';

let sounds = ['../sounds/tom-1.mp3', '../sounds/tom-2.mp3', '../sounds/tom-3.mp3', '../sounds/tom-4.mp3', '../sounds/snare.mp3', '../sounds/crash.mp3', '../sounds/kick-bass.mp3'];
let drums = document.querySelectorAll('.drum');

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener('click', function () {
        let tone = new Audio(sounds[i]);
        tone.play();
    });
}
document.addEventListener('keydown', function (e) {
    switch (e.key.toLowerCase()) {
        case 'w':
            document.querySelectorAll('.drum')[0].click();
            break;
        case 'a':
            document.querySelectorAll('.drum')[1].click();
            break;
        case 's':
            document.querySelectorAll('.drum')[2].click();
            break;
        case 'd':
            document.querySelectorAll('.drum')[3].click();
            break;
        case 'j':
            document.querySelectorAll('.drum')[4].click();
            break;
        case 'k':
            document.querySelectorAll('.drum')[5].click();
            break;
        case 'l':
            document.querySelectorAll('.drum')[6].click();
            break;
        default:
            console.log('INVALID');
            break;
    }
});
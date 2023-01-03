let light = document.querySelector('.light');
let dark = document.querySelector('.dark');
let body = document.querySelector('#body');

light.addEventListener('click', function() {
    body.style.background = 'white';
});

dark.addEventListener('click', function() {
    body.style.background = 'black';
});

let aboutMe = document.querySelector('#aboutMe');
let gitHub = document.querySelector('#gitHub');
let change = document.querySelector('#change');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let modalWindow = document.querySelector('#window');

change.addEventListener('click', function() {
    aboutMe.textContent = input1.value;
    gitHub.textContent = input2.value;
    gitHub.href = input2.value;
});

let close = document.querySelector('#close');
let close2 = document.querySelector('#close2')

close.addEventListener('click', function() {
    let window = modalWindow.parentNode;
    window.removeChild(modalWindow);
})

close2.addEventListener('click', function() {
    let window = modalWindow.parentNode;
    window.removeChild(modalWindow);
});
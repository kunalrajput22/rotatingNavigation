const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', ()=>{
    container.classList.add('show-nav');
});

close.addEventListener('click', ()=>{
    container.classList.remove('show-nav');
});

// add to open.addEventListener...
body.classList.add('no-scroll');
 
// add to close.addEventListener...
body.classList.remove('no-scroll');




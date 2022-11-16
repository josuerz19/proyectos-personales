
let btnToggle = document.querySelector('.btn-toggle');

let container = document.querySelector('.container');

btnToggle.addEventListener('click', abrir);

function abrir()
{
    container.classList.toggle('activar')
}
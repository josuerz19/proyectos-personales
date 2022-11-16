

const navigation = document.querySelector('.navigation');

const menuToggle = document.querySelector('.menu-toggle');


menuToggle.addEventListener('click', function()
{

    navigation.classList.toggle('open');
})


const listaMenu = document.querySelectorAll('.list');

function activarSelect()
{
    listaMenu.forEach((item)=>
    item.classList.remove('active')
    )
    this.classList.add('active')
}

listaMenu.forEach((item)=>
item.addEventListener('click', activarSelect)
)
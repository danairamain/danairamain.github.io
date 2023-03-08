
const botonMenu = document.querySelector('#boton-menu');
const sidebar = document.querySelector('#side-bar');

botonMenu.addEventListener('click', ()=>{
    sidebar.classList.toggle('cerrado');
})


const masInfo = document.querySelector('#mas-info');
const listaInfo = document.querySelector('#lista-info');

masInfo.addEventListener('click', ()=>{
    listaInfo.classList.toggle('desplegar-info');
})

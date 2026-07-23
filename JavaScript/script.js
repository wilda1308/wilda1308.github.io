const btnMenu = document.getElementById('btn-abrir-menu');
const detallElement = document.querySelectorAll('.box-proyecto');
const btnCollapsar = document.getElementById('btn-collapse');


btnMenu.addEventListener('click', function(){
    btnMenu.classList.add('girarboton');
    let header = document.querySelector('header');
    let nav_menu = header.lastElementChild;

    if(nav_menu.classList.contains("ocultar-menu")){
        btnMenu.classList.replace('girarboton', 'girarmitadboton');
        nav_menu.classList.replace('ocultar-menu', 'mostrar-menu');
    }else{
        btnMenu.classList.replace('girarmitadboton', 'girarboton');
        nav_menu.classList.replace('mostrar-menu', 'ocultar-menu');
    }
});


detallElement.forEach( details => {
    let encabezado = details.firstElementChild;
    let iconoFlecha = encabezado.lastElementChild;
    encabezado.addEventListener('click', function(){
        if(!details.open){
            iconoFlecha.classList.remove('details-abierto');
            iconoFlecha.classList.add('details-cerrado');
        }else{
            iconoFlecha.classList.remove('details-cerrado');
            iconoFlecha.classList.add('details-abierto');
        }
    })

    details.addEventListener('mouseenter', () => {
        iconoFlecha.classList.add('flecha-hover');
    })

    details.addEventListener('mouseleave', () => {
        iconoFlecha.classList.remove('flecha-hover');
    })

});

btnCollapsar.addEventListener('click', function(){
    detallElement.forEach(detalles =>{
        let encabezado = detalles.firstElementChild;
        if(detalles.open){
            encabezado.click();
        }
    })
});

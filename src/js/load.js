window.addEventListener('load',function(){
    var nombre_label=document.getElementById('nombre_div');


    nombre_label.addEventListener('click',function(){
        this.innerHTML='Ichiro65437';
        console.log('presionaste click');
    });
    console.log('componentes cargados');
});
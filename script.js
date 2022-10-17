let palabrita;
let cantidad_errores = 0;
let cantidad_aciertos = 0;

const textos = [
    "remeras",     
    "casamiento",     
    "calzado",     
    "agua",         
    "celular",     
    "cielo",       
    "parlante",  
    "terere", 
    "programar",
    "planeta"
]

const btn = document.getElementById('inicio');

btn.addEventListener('click', iniciar);


function obtener_random (num_min, num_max){
    const amplitud_valores = num_max - num_min; 
    const valor_azar = Math.floor( Math.random( ) * amplitud_valores) + num_min;
    return valor_azar;
}

function iniciar(event){
    imagen.src = 'img/img0.png';
    btn.disabled = true;
    for(let i = 0; i <btn_letras.length ; i++ ){
        btn_letras[i].disabled = false;
    }
    cantidad_errores = 0;
    cantidad_aciertos = 0;

    const parrafo = ( palabra_clave );
    parrafo.innerHTML = '';
    const cant_palabras = textos.length;
    const valor_azar = obtener_random( 0, cant_palabras);
    

    palabrita = textos[valor_azar];
    const cant_letras = palabrita.length;
    console.log(palabrita);

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }   
}

const btn_letras = document.querySelectorAll( "#letras button" );
for(let i = 0; i <btn_letras.length ; i++ ){
    btn_letras[i].addEventListener("click", click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll("#palabra_clave span")
    const button = event.target;
    button.disabled = true;
    
    
    const palabra = palabrita.toLowerCase( );
    const letras = button.innerHTML.toLowerCase( );

    let acerto = false;

    for( let i = 0; i <palabra.length; i++ ){
        if( letras == palabra[i]){
            spans[i].innerHTML = letras;
            cantidad_aciertos++;
            acerto = true;
        }
    }

    if(acerto == false){
        cantidad_errores++;
        const source = `img/img${cantidad_errores}.png`;
        imagen.src = source;
    }
    if(cantidad_errores == 7){
        alert("Perdiste, la palabra correcta es..." + palabrita );
        game_over( );
    }
    else if(cantidad_aciertos == palabrita.length){
        alert("lo lograste" );
        game_over( );
    }
    console.log("la letra"+ letras + "en la palabra" + palabra + "existe: " + acerto)
}
function game_over(){
    for(let i = 0; i <btn_letras.length ; i++ ){
        btn_letras[i].disabled = true;
    }
    btn.disabled = false;
    
}
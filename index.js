function mostrar( nombre){
    div = document.getElementById(nombre);
    if (div.style.display === 'none'){
        
        div.style.display="block";
        div.className += " animate__animated animate__bounceInRight"
        
        
    }
    else{
       
        div.style.display="none";
    }
    }
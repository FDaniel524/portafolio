/*Variables globales*/
localStorage.setItem("NumeroDeElemento", "1");
    
function container(elemento)
{
    
    //Recuperamos los elementos que se van a activar y el que está activo
    var lateral = "lateral" + elemento;
    var central = "central" + elemento;
    var activo = localStorage.getItem("NumeroDeElemento");

    //Vemos que contenedores estan activos recuperandolos de las variables locales
    var lateralActivo = "lateral" + activo;
    var centralActivo = "central" + activo;

    document.getElementById(lateralActivo).className = "containerLateralInicial";
    
    //Procedemos a activar los que llamaron a la funcion
    document.getElementById(lateral).className = "containerLateral";
    document.getElementById(central).className = "containerCentral";

    //También deshabilitamos el boton que hizo el llamado para evitar bugs
    var boton = "botonNav" + elemento;
    document.getElementById(boton).disabled = true;
    //Habilitamos el botón que se desactivó antes para que sirva si se le llama
    boton = "botonNav" + activo;
    document.getElementById(boton).disabled = false;
        
    //Procedemos a ocultar los elementos que estaban activos al inicio
    setTimeout(() => {document.getElementById(lateralActivo).className = "lateralOculto";}, 600);
    setTimeout(() => {document.getElementById(centralActivo).className = "centralOculto";}, 600);
    
    //Y se convierte al numero asociado en el nuevo activo
    localStorage.setItem("NumeroDeElemento", elemento);
}

/*Funciones que controlan el flujo de movimiento de los label input al recibir el foco y perderlo respectivamente*/
function entradaInput(labelId, porcentaje)
{
    //Obtenemos el elemento por su Id
    var nombreLabel = document.getElementById(labelId);
    //Desplazamos el label para que el usuario pueda escribir
    nombreLabel.style.top = porcentaje;
    //disminuimos el tamaño de la letra
    nombreLabel.style.fontSize = "15px";
    //disminuimos el color de la letra
    nombreLabel.style.color = "black";
}

function salidaInput(labelId, porcentaje, inputId)
{
    //Necesitamos el valor del respectivo input para determinar si se mueve el label o no
    var valorInput = document.getElementById(inputId).value;
    if(valorInput == "")
    {
        //Obtenemos el elemento por su Id
        var nombreLabel = document.getElementById(labelId);
        //Desplazamos el label para que el usuario pueda escribir
        nombreLabel.style.top = porcentaje;
        //disminuimos el tamaño de la letra
        nombreLabel.style.fontSize = "18px";
        //disminuimos el color de la letra
    nombreLabel.style.color = "gray";
    }
}


/*Funcion para boton de moviles*/
function activadorNav()
{
    var clase = document.getElementById("barraNav");
    //Si esto se cumple, es porque queremos mostrar el menú, caso contrario se oculta
    if(clase.className == "barraNav")
    {
        clase.className = "barraNavVisible";
    }
    else
    {
        clase.className = "barraNav";
    }
}

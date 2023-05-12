/**
 * @author rnevesphp - Romeu Neves
 * 
 * @version 1.0.1
 */


var web
let webTitle = document.title


/** 
 * Funcion responsable de llamar el evento que cambia el titulo de la web e inicializar el código fuente
 */
window.onload = function () {
    this.dispatchEvent(new CustomEvent('changeWebTitle'));

    if (document.readyState == "complete") {
        web = new init();
    }
}

/**
 * Este evento es el responsable de cambiar el titulo de la web cuando el usuario abandone la pestaña donde
 * está abierto el programa 
 */
window.addEventListener('changeWebTitle', () => {
    window.addEventListener('blur', () => {
        webTitle = document.title
        document.title = '¡Vuelve! 😭😭😭'
    })
    window.addEventListener('focus', () => {
        document.title = webTitle;
    })
})

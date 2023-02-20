var web
let webTitle = document.title

window.onload = function () {
    this.dispatchEvent(new CustomEvent('changeWebTitle'));

    if (document.readyState == "complete") {
        web = new init();
    }
}

window.addEventListener('changeWebTitle', () => {
    window.addEventListener('blur', () => {
        webTitle = document.title
        document.title = '¡Vuelve! 😭😭😭'
    })
    window.addEventListener('focus', () => {
        document.title = webTitle;
    })
})

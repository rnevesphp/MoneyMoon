class navbar {
    constructor() {
        this.createNav()
    }

    createNav() {
        let navBarHtml = `
        <nav id = "sidenav-1" class="sidenav sidenav-fixed col s2" >
            <ul class="ul-sidenav" >
                <li class="li-sidenav" id="transaccion" > Operaciones</li>
                <li class="li-sidenav" id="cards" > Tarjetas</li>
                <li class="li-sidenav" id="seguros" >Seguros</li>
                <li class="li-sidenav" id="chat" >Mensajería</li>
                <li class="li-sidenav" id="dash" > Dashboard </li>
                <li class="li-sidenav" id="wallets" > Wallets</li>
                <li class="li-sidenav" id="settings" > Settings </li>
                <li class="li-sidenav" id="profile" > Profile </li>
            </ul>
        </nav>
    
        <div id="container-main">
            <h1 class="h1-main">DashBoard</h1>
            <p class="p-main">Balance del Mes</p>
        </div>`;

        return navBarHtml;
    }
}
class creator {
    constructor() {
        console.log('Hey creator');

        this.doc = document
    }

    destroyEl(element) {
        element.innerHTML = ""
        return element;
    }

    addTitle(elem, text) {
        elem.innerHTML = text;
        return this.elem;
    }

    addSubTitle(elem, text) {
        elem.innerHTML = text;
        return elem;
    }

    newElement(el) {
        this.elem = this.doc.createElement(el)
        return this.elem;
    }

    addAttr(elem, attr, value) {
        elem.setAttribute(attr, value);
        return elem;
    }

    dashElem() {
        this.container = this.doc.getElementById('container-main');

        this.nav();
        this.linkPages();
    }

    nav() {
        this.mainCode = this.doc.getElementById('main-code')
        this.addAttr(this.mainCode, 'class', "main-code main-principal row")

        this.StringWithHtmlToBeInserted = `
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

        this.mainCode.innerHTML = this.StringWithHtmlToBeInserted;
    }

    linkPages() {
        this.linkTransaction = this.doc.getElementById('transaccion');
        this.linkTransaction.addEventListener('click', this.transaction.bind(this))

        this.linkCards = this.doc.getElementById('cards');
        this.linkCards.addEventListener('click', this.cards.bind(this))

        this.linkAssurance = this.doc.getElementById('seguros');
        this.linkAssurance.addEventListener('click', this.seguros.bind(this))

        this.linkMessages = this.doc.getElementById('chat');
        this.linkMessages.addEventListener('click', this.chatBotBank.bind(this))

        this.linkDashInit = this.doc.getElementById('dash');
        this.linkDashInit.addEventListener('click', this.initialPage.bind(this))

        this.linkWallets = this.doc.getElementById('wallets');
        this.linkWallets.addEventListener('click', this.wallets.bind(this))

        this.linkUserSettings = this.doc.getElementById('settings');
        this.linkUserSettings.addEventListener('click', this.settings.bind(this))

        this.linkUserProfile = this.doc.getElementById('profile');
        this.linkUserProfile.addEventListener('click', this.profile.bind(this))
    }

    wallets() {
        this.w = new wallets();
    }

    initialPage() {
        this.dashB = new initialPage();
    }

    struc() {
        this.st = new navStruc();
    }

    profile() {
        this.pf = new profile();
    }

    settings() {
        this.config = new config();
    }

    transaction() {
        this.tr = new transactions();
    }

    cards() {
        this.card = new cards();
    }

    seguros() {
        this.ass = new seguros();
    }

    chatBotBank() {
        this.mgs = new messages();
    }
}
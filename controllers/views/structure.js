
class navStruc {
  constructor() {
    console.log('Structureeeeeeeeeee dashboard')
    this.doc = document

    this.mainCode = this.doc.getElementById('main-code')
    this.mainCode.className = "main-code main-principal row"

    this.nav()
    this.linkPages()
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

  nav() {
    this.sideNav = this.doc.createElement('div')
    this.sideNav.className = "sidenav sidenav-fixed col s2"

    this.content = this.doc.createElement('div')
    this.content.className = "container s10 graphs"

    this.mainCode.appendChild(this.sideNav)
    this.mainCode.appendChild(this.content)
  }











  linkPages() {
    this.ul = this.doc.createElement('ul')
    this.ul.className = "ul-sidenav";

    this.linkTransaction = this.doc.createElement('li');
    this.linkTransaction.setAttribute('id', 'transaccion');
    this.linkTransaction.setAttribute('class', 'li-sidenav');
    this.linkTransaction.innerHTML = "Operaciones"
    this.linkTransaction.addEventListener('click', this.transaction.bind(this))

    this.linkCards = this.doc.createElement('li');
    this.linkCards.setAttribute('id', 'cards');
    this.linkCards.setAttribute('class', 'li-sidenav');
    this.linkCards.innerHTML = "Tarjetas"
    this.linkCards.addEventListener('click', this.cards.bind(this))

    this.linkAssurance = this.doc.createElement('li');
    this.linkAssurance.setAttribute('id', 'cards');
    this.linkAssurance.setAttribute('class', 'li-sidenav');
    this.linkAssurance.innerHTML = "Seguros"
    this.linkAssurance.addEventListener('click', this.seguros.bind(this))

    this.linkMessages = this.doc.createElement('li');
    this.linkMessages.setAttribute('id', 'cards');
    this.linkMessages.setAttribute('class', 'li-sidenav');
    this.linkMessages.innerHTML = "Mensajería"
    this.linkMessages.addEventListener('click', this.chatBotBank.bind(this))

    this.ul.appendChild(this.linkTransaction)
    this.ul.appendChild(this.linkCards)
    this.ul.appendChild(this.linkAssurance)
    this.ul.appendChild(this.linkMessages)

    this.sideNav.appendChild(this.ul)
  }
}

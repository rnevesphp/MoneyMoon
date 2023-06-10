class cards {
    constructor() {
        this.cards = [];
        this.ct = new creator();
        this.mainCards()

        this.btnAction = document.querySelector('custom-btn-rounded');
        this.btnAction.addEventListener('click', this.generateCard.bind(this))
    }

    generateCard() {
        console('Nueva tarjeta')
    }

    mainCards() {
        this.container = this.doc.getElementById('container-main');
        this.container.innerHTML = "";

        this.divCard = this.newElement('div');
        this.divCard2 = this.newElement('div');
        this.ttl = this.newElement('h1');
        this.msgTtl = this.newElement('p');
        this.ibtn = this.newElement('i');
        this.btn = this.newElement('div');


        this.addAttr(this.ibtn, 'class', 'fa-solid fa-plus')
        this.addAttr(this.ttl, 'class', 'h1-main')
        this.addAttr(this.msgTtl, 'class', 'p-main')
        this.addAttr(this.btn, 'class', 'custom-btn-rounded');
        this.addAttr(this.divCard, 'class', 'tarjetas')

        this.btn.addEventListener('click', this.newCard.bind(this))

        this.addTitle(this.ttl, 'Tarjetas');
        this.addSubTitle(this.msgTtl, 'Crea tarjetas digitales para uso diario  .');

        this.divCard2.appendChild(this.ttl)
        this.divCard2.appendChild(this.msgTtl)

        this.divCard.appendChild(this.divCard2)
        this.divCard.appendChild(this.btn)
        this.btn.appendChild(this.ibtn)

        this.container.appendChild(this.divCard);
    }

    newCard() {
        this.cards.generateCard();
    }
}
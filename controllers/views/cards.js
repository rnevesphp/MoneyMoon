class cards {
    constructor() {
        this.cards = [];
        this.ct = new creator();
        this.ct.mainCards()

        this.btnAction = document.querySelector('custom-btn-rounded');
        this.btnAction.addEventListener('click', this.generateCard.bind(this))
    }

    generateCard() {
        console('Nueva tarjeta')
    }
}
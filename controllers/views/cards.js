class cards {
    constructor() {
        this.doc = document;
        this.cards = {};
        this.ct = new creator();
        this.mainCards()

        this.storage = localStorage;

        this.newCardCredentials = {
            cardNumber: this.cardNum,
            cardSecurityCode: this.cvv
        };
    }

    mainCards() {

        this.container = this.doc.getElementById('container-main');
        this.container.innerHTML = "";

        this.cardHeaderHTML = `
        <div> 
            <div class="tarjetas">
                <h1 class="h1-main">Tarjetas</h1>
                <p class="p-main">Crea tarjetas digitales para uso diario</p>
            </div>
            <div id="btn-card" class="custom-btn-rounded" >
                <i class="fa-solid fa-plus"></i>
            </div>
        </div>`;

        this.container.innerHTML = this.cardHeaderHTML;

        this.btn = this.doc.getElementById('btn-card')
        this.btn.addEventListener('click', this.newCard.bind(this))
    }

    newCard() {
        this.generateCard();
    }

    generateCard() {
        console.log('Nueva tarjeta')

        this.generateRandomNumberForCard();
        this.generateSecurityCodecard();
    }

    generateSecurityCodecard() {
        alert('SECURITY CODE');

        this.cvv = [];
        for (var n = 0; n < 3; n++) {
            this.randomSecurityCode = Math.floor(Math.random() * 9)
            this.cvv.push(this.randomSecurityCode);
        }
        console.log(this.cvv)
    }

    generateRandomNumberForCard() {
        alert('NUM GENERADO');

        this.cardNum = [];
        for (var t = 0; t < 16; t++) {
            this.randomNum = Math.floor(Math.random() * 10)
            this.cardNum.push(this.randomNum);
        }
        console.log(this.cardNum);
    }

    sendCardsToLocal() {

    }
}


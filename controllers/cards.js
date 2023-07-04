class cards {
    constructor() {
        this.doc = document;
        this.cards = {};
        this.mainCards()
        this.countCards = 0;

        this.storage = localStorage;

        this.newCardCredentials = {
            cardNumber: this.cardNumStr,
            cardSecurityCode: this.cvvStr,
            cardExpireDate: this.dateOfExp
        };
    }

    // general method to create the main of card class
    mainCards() {
        this.container = this.doc.getElementById('container-main');
        this.container.innerHTML = "";

        this.cardHeaderHTML = `
        <div class="card-container"> 
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
        this.btn.addEventListener('click', this.generateCard.bind(this))
    }

    // call all methods to crceate a new card
    generateCard() {
        console.log('Nueva tarjeta')

        this.countCards = this.countCards + 1;

        this.generateRandomNumberForCard();
        this.generateSecurityCodecard();
        this.generateDateOfExp()
        this.sendCardsToLocal();
        // this.generateVisualCard(this.cardNumStr, this.cvvStr, this.dateOfExp);

    }

    // generate random numbers for the security code of the card
    generateSecurityCodecard() {
        console.log('SECURITY CODE');

        this.cvv = [];
        for (var n = 0; n < 3; n++) {
            this.randomSecurityCode = Math.floor(Math.random() * 9)
            this.cvv.push(this.randomSecurityCode);
        }
        console.log(this.cvv)

        this.cvvStr = this.cvv.toString();
        console.log(this.cvvStr);
    }

    // generate random numbers for the card 
    generateRandomNumberForCard() {
        console.log('NUM GENERADO');

        this.cardNum = [];
        for (var t = 0; t < 16; t++) {
            this.randomNum = Math.floor(Math.random() * 10)
            this.cardNum.push(this.randomNum);
        }

        this.cardNumStr = this.cardNum.toString();
        console.log(this.cardNumStr);
    }

    // generate an expiration date
    generateDateOfExp() {
        const todayDate = new Date();

        let m = todayDate.getMonth()
        let y = todayDate.getFullYear()

        let fixedMont = m + 1;
        let fixedYear = y + 5;

        this.dateOfExp = `${fixedMont}/${fixedYear}`;

        console.log(`${fixedMont}/${fixedYear}`)
    }


    // setar a info dos cartoes em um objeto JSON com id , numero de cartao, cvv e data de validade
    setInfoCard() {
        /** 
         * YOUR CODE GOES HERE!
         */
    }

    // criar funcao para mandar todos os cartoes com seus respectivos id's e numeros gerados
    sendCardsToLocal() {
        /** 
         * YOUR CODE GOES HERE!
         */
    }

    generateVisualCard(cardNum, cvv, dateOfExp) {
        let newCard = new cardTemplate(cardNum, cvv, dateOfExp);

        return newCard;
    };
}
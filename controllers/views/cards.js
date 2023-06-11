class cards {
    constructor() {
        this.doc = document;
        this.cards = {};
        this.mainCards()

        this.storage = localStorage;

        this.newCardCredentials = {
            cardNumber: this.cardNum,
            cardSecurityCode: this.cvv,
            cardExpireDate: this.dateOfExp
        };
    }

    // general method to create the main of card class
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
        this.btn.addEventListener('click', this.generateCard.bind(this))
    }

    // call all methods to crceate a new card
    generateCard() {
        console.log('Nueva tarjeta')

        this.generateRandomNumberForCard();
        this.generateSecurityCodecard();
        this.generateDateOfExp()
        this.sendCardsToLocal();
    }

    // generate random numbers for the security code of the card
    generateSecurityCodecard() {
        alert('SECURITY CODE');

        this.cvv = [];
        for (var n = 0; n < 3; n++) {
            this.randomSecurityCode = Math.floor(Math.random() * 9)
            this.cvv.push(this.randomSecurityCode);
        }
        console.log(this.cvv)
    }

    // generate random numbers for the card 
    generateRandomNumberForCard() {
        alert('NUM GENERADO');

        this.cardNum = [];
        for (var t = 0; t < 16; t++) {
            this.randomNum = Math.floor(Math.random() * 10)
            this.cardNum.push(this.randomNum);
        }
        console.log(this.cardNum);

        this.convertArrNumCardToNormalNum();
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

    // convert the arr with the card number into an integer with all numbers
    convertArrNumCardToNormalNum() {
        for (var j = 0; j < this.cardNum.length; j++) {
            console.log(this.cardNum[j]);
        }
    }

    // sends the card info to relate with the user session
    sendCardsToLocal() {

    }
}


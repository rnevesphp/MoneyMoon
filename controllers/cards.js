class cards {
    constructor() {
        this.doc = document;
        this.cards = [];
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
            <div id="cardtemplate">
                ${this.newCard}
            </div>
        </div>`;
    
        this.container.innerHTML = this.cardHeaderHTML;

        this.btn = this.doc.getElementById('btn-card')
        this.btn.addEventListener('click', this.generateCard.bind(this))
    
    }

    // call all methods to crceate a new card
    generateCard() {
        this.countCards = this.countCards + 1;

        // nova funcionalidade: limitar à 5 o numero de cartoes criados
        // this.ctCards(); 

        this.generateRandomNumberForCard();
        this.generateSecurityCodecard();
        this.generateDateOfExp()
        this.sendCardsToLocal();
        this.generateCardObject()
    }

    // this method returs an object with card info 
    generateCardObject() {
        let card = {
            "id": `${this.countCards}`,
            "number": `${this.cardNumStrF}`,
            "securityCode": `${this.cvvStrF}`
        }

        // this method create the HTML template to inserto into the code
        this.generateVisualCard(this.cardNumStrF, this.dateOfExp, this.cvvStrF );

        return JSON.stringify(card);
    }

    // generate random numbers for the security code of the card
    generateSecurityCodecard() {
        this.cvv = [];
        for (var n = 0; n < 3; n++) {
            this.randomSecurityCode = Math.floor(Math.random() * 9)
            this.cvv.push(this.randomSecurityCode);
        }

        this.cvvStr = this.cvv.toString();
        this.cvvStrF = this.cvvStr.replaceAll(',' , '');
    }

    // generate random numbers for the card 
    generateRandomNumberForCard() {
        this.cardNum = [];
        for (var t = 0; t < 16; t++) {
            this.randomNum = Math.floor(Math.random() * 10)
            this.cardNum.push(this.randomNum);
        }

        this.cardNumStr = this.cardNum.toString();
        this.cardNumStrF = this.cardNumStr.replaceAll(',', '');

        //console.log(this.cardNumStrF);
    }

    // generate an expiration date
    generateDateOfExp() {
        const todayDate = new Date();

        let m = todayDate.getMonth()
        let y = todayDate.getFullYear()

        let fixedMont = m + 1;
        let fixedYear = y + 5;

        this.dateOfExp = `${fixedMont}/${fixedYear}`;

        //console.log(`${fixedMont}/${fixedYear}`)
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
        this.newCard = new cardTemplate(cardNum, cvv, dateOfExp);

    };
}
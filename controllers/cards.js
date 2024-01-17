class cards {
    constructor() {
        this.doc = document;
        this.cards = [];
        this.mainCards();
        this.countCards = 0;

        this.storage = localStorage;

        this.newCardCredentials = {
            cardNumber: this.cardNumStr,
            cardSecurityCode: this.cvvStr,
            cardExpireDate: this.dateOfExp,
        };
    }

    // general method to create the main of card class
    mainCards() {
        this.container = this.doc.getElementById("container-main");
        this.container.innerHTML = "";

        this.cardHeaderHTML = `
            <div class="card-container row"> 
                <div class="tarjetas">
                    <h1 class="h1-main">Tarjetas</h1>
                    <p class="p-main">Crea tarjetas digitales para uso diario</p>
                </div>
                <div id="btn-card" class="custom-btn-rounded" >
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>

            <div id="cardtemplate" class="template-card row">

            </div>`;

        this.container.innerHTML = this.cardHeaderHTML;

        this.btn = this.doc.getElementById("btn-card");
        this.btn.addEventListener("click", this.generateCard.bind(this));



    }


    // call all methods to crceate a new card
    generateCard() {
        this.countCards = this.countCards + 1;

        // nova funcionalidade: limitar à 5 o numero de cartoes criados
        this.limitsCard(this.countCards, this.cardInfo);

        this.generateCardObject();
        this.sendCardsToLocal();
        this.createCardCredentials()

        console.log("Cartão gerado com sucesso!");
    }

    createCardCredentials() {
        // date of card ======================================================================
        const todayDate = new Date();

        let m = todayDate.getMonth();
        let y = todayDate.getFullYear();

        let fixedMont = m + 1;
        let fixedYear = y + 5;

        this.dateOfExp = `${fixedMont}/${fixedYear}`;

        // card cvv 3char ====================================================================
        this.cvv = [];
        for (var n = 0; n < 3; n++) {
            this.randomSecurityCode = Math.floor(Math.random() * 9);
            this.cvv.push(this.randomSecurityCode);
        }

        this.cvvStr = this.cvv.toString();
        this.cvvStrF = this.cvvStr.replaceAll(",", "");

        // card number 16char ================================================================
        this.cardNum = [];
        for (var t = 0; t < 16; t++) {
            this.randomNum = Math.floor(Math.random() * 10);
            this.cardNum.push(this.randomNum);
        }

        this.cardNumStr = this.cardNum.toString();
        this.cardNumStrF = this.cardNumStr.replaceAll(",", "");

    }

    // this method returs an object with card info
    generateCardObject() {
        let card = {
            id: `${this.countCards}`,
            number: `${this.cardNumStrF}`,
            securityCode: `${this.cvvStrF}`,
        };

        this.cards.push(card);

        // this method create the HTML template to inserto into the code
        this.generateVisualCard(this.cardNumStrF, this.dateOfExp, this.cvvStrF)
        this.sendCardsToLocal();
        // this.printCards();

        return JSON.stringify(card);
    }


    // this method sends the cards to LocalStorage 
    sendCardsToLocal() {

        for (let i = 0; this.cards.length > i; i += 1) {
            this.storage.setItem(i, this.cards[i])
        }
    }

    // this methos will be used to limits the number of cards in 5
    limitsCard(numC, info) {
        this.arrOfCards = [];

        if (numC == 5) {
            this.arrOfCards.push(info);
            console.log(this.arrOfCards);
        } else {
            console.log("Ya no puedes crear tarjetas");
        }
    }

    // this method generate the card template into the HTML
    generateVisualCard(cardNum, cvv, dateOfExp) {
        this.newCard = new cardTemplate(cardNum, cvv, dateOfExp);
        this.usr = this.newCard.getUser();
        let template = this.newCard.cardTempl(cardNum, cvv, dateOfExp, this.usr);
        this.cardsContainer = this.doc.getElementById("cardtemplate");
        this.cardsContainer.innerHTML = template;
    }

    eraseCards() {
        this.eleToErase = this.doc.getElementsByClassName('container-cards')

        this.btnEraseCard = this.doc.getElementById('btnErase');
        this.btnEraseCard.addEventListener('click', this.eraseCards.bind(this));

        this.eleToErase.innerHTML = ""
    }

    deleteAllCards() {
        alert('BORRANDOOOOOO');
    }
}

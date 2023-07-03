class cardTemplate {
    constructor(numCard, dateCard, cvvNum) {
        // this.auth = 'auth';

        // this.getUser();
        // this.cardTempl();

        this.sStorage = sessionStorage;

        this.numCvv = cvvNum;
        this.numberCard = numCard;
        this.expirationDate = dateCard

        this.auth = this.clsAuth.getUser();

        console.log(this.auth)
    }

    cardTempl() {
        let cardTemplate = `
            <div class="template-card">
                <div class="card-name">
                    <span>${}</span>
                </div>
                <div class="card-num">
                    <span>${this.numberCard}</span>
                </div>
                <div class="card-date">
                    <span>${this.expirationDate}</span>
                </div>
                <div class="card-cvv">
                <span>${this.numCvv}</span>
                </div>
            </div>
        `;

        return cardTemplate;
    }
}
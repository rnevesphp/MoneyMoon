class cardTemplate {
    constructor(numCard, dateCard, cvvNum) {
        this.auth = 'auth';
        this.sStorage = sessionStorage;

        this.user = this.getUser();
        this.cardTempl(this.user);

        this.numCvv = cvvNum;
        this.numberCard = numCard;
        this.expirationDate = dateCard

    }

    getUser() {
        this.getUserFromSession = JSON.stringify(this.sStorage.getItem(this.auth));

        this.userInfoSeted = {
            user: this.getUserFromSession.username,
            mail: this.getUserFromSession.mail,
            passwd: this.getUserFromSession.password
        }
        console.log(this.userInfoSeted)

        return this.userInfoSeted;
    }

    cardTempl(user) {
        let cardTemplate = `
            <div class="container template-card">
                <div class="card-name">
                    <span>${user}</span>
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
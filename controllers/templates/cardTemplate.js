class cardTemplate {
    constructor(numCard, dateCard, cvvNum) {
        this.auth = 'auth';

        this.user = this.getUser();
        this.cardTempl(this.user);

        this.sStorage = sessionStorage;

        this.numCvv = cvvNum;
        this.numberCard = numCard;
        this.expirationDate = dateCard

        console.log(this.auth)
    }

    getUser() {
        this.getUserFromSession = JSON.parse(this.sStorage.getItem(this.auth));

        this.userInfoSeted = {
            user: this.getUserFromSession.username,
            mail: this.getUserFromSession.mail,
            passwd: this.getUserFromSession.password
        }

        let user = user;

        return user;
    }

    cardTempl(user) {
        let cardTemplate = `
            <div class="template-card">
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
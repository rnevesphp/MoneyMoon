class cardTemplate {
  constructor(numCard, dateCard, cvvNum) {
    this.sStorage = sessionStorage;
    this.userJSON = this.getUser();

    this.cardTempl(numCard, dateCard, cvvNum, this.userJSON);
  }

  getUser() {
    this.getUserFromSession = JSON.parse(this.sStorage.getItem("auth"));

    this.userInfoSeted = {
      user: this.getUserFromSession.username,
      mail: this.getUserFromSession.mail,
      passwd: this.getUserFromSession.password,
    };

    // console.log(`${this.userInfoSeted}\n\n ${this.getUserFromSession.username}`)

    return this.getUserFromSession.username;
  }

  cardTempl(numCard, dateOfExp, numCVV, userJSON) {
    console.log(`${userJSON}\n${numCard}\n${dateOfExp}\n${numCVV}`);

    let cardTemplate = `
        <div class="container-cards center-align container">
        <div class="valign-wrapper center-align row template-card">
            <div class="g1 col s6">
            <div class="card-name">
                <span>${userJSON}</span>
            </div>
            <div class="card-num">
                <span>${numCard}</span>
            </div>
            </div>
            <div class="g2 col s6">
            <div class="card-date">
                <span>${dateOfExp}</span>
            </div>
            <div class="card-cvv">
                <span>${numCVV}</span>
            </div>
            </div>
        </div>
        <div class="deleteCard center-align  btn-small">
            <i class="fa-solid fa-trash"></i>
        </div>
        </div>
    `;

    return cardTemplate;
  }
}

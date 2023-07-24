class cardTemplate {
  constructor(numCard, dateCard, cvvNum) {
    this.sStorage = sessionStorage;
    this.userJSON = this.getUser();

    return this.cardTempl(numCard, dateCard, cvvNum, this.userJSON);
  }

  getUser() {
    this.getUserFromSession = JSON.parse(this.sStorage.getItem("auth"));

    this.userInfoSeted = {
      user: this.getUserFromSession.username,
      mail: this.getUserFromSession.mail,
      passwd: this.getUserFromSession.password,
    };

    return this.getUserFromSession.username
  }

  cardTempl(numCard, dateOfExp, numCVV, userJSON) {
    console.log(`${userJSON}\n${numCard}\n${dateOfExp}\n${numCVV}`);

    this.cardTemplate = `
        <div class="container-cards">

          <div class="valign-wrapper row template-card-final">
              <div class="g1 col s12">
              <div class="card-name">
                  <span>${userJSON}</span>
              </div>
              <div class="card-num">
                  <span>${numCard}</span>
              </div>
              </div>
              <div class="g2 col s12">
              <div class="card-date">
                  <span>Cad: ${dateOfExp}</span>
              </div>
              <div class="card-cvv">
                  <span>CVV: ${numCVV}</span>
              </div>
              </div>
          </div>
          <div class="deleteCard center-align btn-small">
              <i class="fa-solid fa-trash"></i>
          </div>
        </div>
    `;
    
    console.log(this.cardTemplate)
    return this.cardTemplate
  }
}

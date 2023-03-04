class initialPage {
  constructor() {
    console.log("AQUI LLEGA... welcome... dashboard..");

    this.ct = new creator();


    this.mainCode = document.getElementById('main-code')
    this.a = document.getElementById('logOutHref')
    this.btnMobile = document.getElementById('btnMobile')
    this.iconLogOut = document.getElementById('icon-btnMobile');

    this.btnMobile.addEventListener('click', this.logout.bind(this));
    this.iconLogOut.className = "fa-solid fa-xmark";

    this.ct.destroyEl(this.a)
    this.ct.destroyEl(this.mainCode)

    this.createLogOut();
  }




  /**
   * this method create a button to logout from the user account
   */
  createLogOut() {
    this.logOutBTN = this.ct.newElement('i');
    this.ct.addAttr(this.logOutBTN, 'class', 'icon-logout fa-solid fa-xmark')
    this.li = document.getElementById('logoutbtn')
    this.li.appendChild(this.logOutBTN)
    this.logOutBTN.addEventListener("click", this.logout.bind(this));
  }

  /**
   * This method contains the logout logical
   */
  logout() {
    console.log("TAMO AQUI NO CLICK DO LOGOUT ")
    this.session = sessionStorage;

    this.session.clear()
    location.reload();
  }
}

class initialPage {
  constructor() {
    console.log("AQUI LLEGA... welcome... dashboard..");

    this.ct = new creator();

    this.mainCode = document.getElementById('main-code')
    this.footr = document.getElementById('main-footer')

    this.a = document.getElementById('logOutHref')
    this.btnMobile = document.getElementById('btnMobile')
    this.iconLogOut = document.getElementById('icon-btnMobile');

    this.btnMobile.addEventListener('click', this.logout.bind(this));
    this.iconLogOut.className = "fa-solid fa-xmark";

    this.ct.destroyEl(this.a);
    this.ct.destroyEl(this.mainCode)
    this.ct.destroyEl(this.footr)

    this.createLogOut();
  }

  /**
   * this method create a button to logout from the user account
   */
  createLogOut() {
    this.logOutBTN = `<i id="closeSession" class="icon-logout fa-solid fa-xmark"></i>`

    this.li = document.getElementById('logoutbtn')
    this.li.innerHTML = this.logOutBTN

    this.logoutbtn = document.getElementById('closeSession');
    this.logoutbtn.addEventListener("click", this.logout.bind(this));
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

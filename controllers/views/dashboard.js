class dashboard {
  constructor() {
    console.log("AQUI LLEGA... welcome... dashboard..");

    this.mainCode = document.getElementById('main-code')
    this.deleteMaincode(this.mainCode);

    this.a = document.getElementById('logOutHref')
    this.erase(this.a);

    this.btnMobile = document.getElementById('btnMobile')
    this.btnMobile.addEventListener('click', this.logout.bind(this));

    this.icon = document.getElementById('icon-btnMobile');
    this.icon.className = "fa-solid fa-xmark";


    /**
     * creamos una instancia de la clase structure que es la responsable 
     */
    this.st = new structure();

    this.dashElem();
  }

  deleteMaincode(elem) {
    elem.remove();

    return elem;
  }

  erase(elem) {
    this.createLogOut();
    elem.innerHTML = "";

    return elem;
  }


  createLogOut() {

    // this.btnMobile.className.remove("large fa-solid fa-user")
    // this.btnMobile.className.add("large fa-solid fa-xmark")

    this.logOutBTN = document.createElement('a');
    this.logOutBTN.classList = "logOut"
    this.logOutBTN.innerHTML = "LogOut"

    this.li = document.getElementById('logoutbtn')
    this.li.appendChild(this.logOutBTN)

    this.logOutBTN.addEventListener("click", this.logout.bind(this));
  }

  logout() {
    console.log("TAMO AQUI NO CLICK DO LOGOUT ")
    this.session = sessionStorage;

    this.session.clear()
    location.reload();
  }



  dashElem() {
    this.doc = document;

    this.navbar = this.doc.getElementById('nav-wrapper');

    this.ul1 = this.doc.createElement('ul')
    this.ul1.setAttribute('class', 'center')
    this.ul1.setAttribute('id', 'nav-mobile-2')



    this.li1 = this.doc.createElement('li')
    this.li1.innerHTML = 'Dashboard';

    this.li2 = this.doc.createElement('li')
    this.li2.innerHTML = 'Wallets';

    this.li3 = this.doc.createElement('li')
    this.li3.innerHTML = 'Settings';

    // this.lista = [this.li1, this.li2, this.li3]

    this.ul1.appendChild(this.li1);
    // this.ul.appendChild(this.li2);
    // this.ul.appendChild(this.li3);

    this.navbar.appendChild(this.ul1);


    this.logo = this.doc.querySelector('.brand-logo');
    this.logo.remove()
  }
}

class creator {
    constructor() {
        console.log('Hey creator');
    }

    destroyEl(element) {
        element.innerHTML = ""
        return element;
    }

    newElement(el) {
        this.elem = this.doc.createElement(el)
        return this.elem;
    }

    addAttr(elem, attr, value) {
        elem.setAttribute(attr, value);
        return elem;
    }

    dashElem() {
        this.doc = document;
        this.navbar = this.doc.getElementById('nav-wrapper');

        this.ul1 = this.newElement('ul')
        this.addAttr(this.ul1, 'class', 'ul-dash hide-on-med-and-down')
        this.addAttr(this.ul1, 'id', 'ul-dash')

        // creando los elementos de una lista
        this.li1 = this.newElement('li')
        this.li2 = this.newElement('li')
        this.li3 = this.newElement('li')
        this.li4 = this.newElement('li')

        // añadimos una clase a los elementos creados
        this.addAttr(this.li1, 'class', 'dash-li')
        this.addAttr(this.li2, 'class', 'dash-li')
        this.addAttr(this.li3, 'class', 'dash-li')
        this.addAttr(this.li4, 'class', 'dash-li')

        // añadiendo contenido dentro de los elementos de las lista
        this.li1.innerHTML = 'Dashboard';
        this.li2.innerHTML = 'Wallets';
        this.li3.innerHTML = 'Settings';
        this.li4.innerHTML = 'Profile';

        // añadiendo los clicks
        // this.li1.addEventListener('click', this.initialPage.bind(this))
        this.li2.addEventListener('click', this.wallets.bind(this))
        this.li3.addEventListener('click', this.settings.bind(this))
        this.li4.addEventListener('click', this.profile.bind(this))

        // añadiendo los elementos creados a la lista desordenada
        this.ul1.appendChild(this.li1);
        this.ul1.appendChild(this.li2);
        this.ul1.appendChild(this.li3);
        this.ul1.appendChild(this.li4);

        // añadiendo la lista dentro del navbar 
        this.navbar.appendChild(this.ul1);

        // Haciendo el remove del logo para que este cuadrante entre la lista desordenada
        this.logo = this.doc.querySelector('.brand-logo');
        this.destroyEl(this.logo)

        this.iP = new initialPage()
        this.iP.createLogOut();
    }
    wallets() {
        this.w = new wallets();
    }
    struc() {
        this.st = new navStruc();
    }

    profile() {
        this.pf = new profile();
    }
    settings() {
        this.config = new config();
    }
}
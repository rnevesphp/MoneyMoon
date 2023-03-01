
class dashStructure {
  constructor() {
    this.ds = new dashboard();

    this.doc = document;
    console.log('Structureeeeeeeeeee dashboard')

  }

  deleteMaincode(elem) {
    elem.remove();

    return elem;
  }

  dashElem() {
    this.doc = document;

    this.navbar = this.doc.getElementById('nav-wrapper');

    this.ul1 = this.doc.createElement('ul')
    this.ul1.setAttribute('class', 'ul-dash hide-on-med-and-down')
    this.ul1.setAttribute('id', 'ul-dash')

    // icon 1
    this.i1 = this.doc.createElement('i')
    this.i1.setAttribute('class', 'fa-solid fa-table-columns')
    this.i1.setAttribute('id', 'nav-mobile-2-icon')
    // icon 2 
    this.i2 = this.doc.createElement('i')
    this.i2.setAttribute('class', 'fa-solid fa-wallet')
    this.i2.setAttribute('id', 'nav-mobile-2-icon')
    // icon 3
    this.i3 = this.doc.createElement('i')
    this.i3.setAttribute('class', 'fa-solid fa-gear')
    this.i3.setAttribute('id', 'nav-mobile-2-icon')
    // icon 4
    this.i4 = this.doc.createElement('i')
    this.i4.setAttribute('class', 'fa-solid fa-user')
    this.i4.setAttribute('id', 'nav-mobile-2-icon')

    // creando los elementos de una lista
    this.li1 = this.doc.createElement('li')
    this.li2 = this.doc.createElement('li')
    this.li3 = this.doc.createElement('li')
    this.li4 = this.doc.createElement('li')

    // añadimos una clase a los elementos creados
    this.li1.setAttribute('class', 'dash-li')
    this.li2.setAttribute('class', 'dash-li')
    this.li3.setAttribute('class', 'dash-li')
    this.li4.setAttribute('class', 'dash-li')

    // añadiendo contenido dentro de los elementos de las lista
    this.li1.innerHTML = 'Dashboard';
    this.li2.innerHTML = 'Wallets';
    this.li3.innerHTML = 'Settings';
    this.li4.innerHTML = 'Profile';

    // añadiendo los iconos como hijos de los elementos
    this.li1.appendChild(this.i1)
    this.li2.appendChild(this.i2)
    this.li3.appendChild(this.i3)
    this.li4.appendChild(this.i4)

    // añadiendo los elementos creados a la lista desordenada
    this.ul1.appendChild(this.li1);
    this.ul1.appendChild(this.li2);
    this.ul1.appendChild(this.li3);
    this.ul1.appendChild(this.li4);

    // añadiendo la lista dentro del navbar 
    this.navbar.appendChild(this.ul1);

    // Haciendo el remove del logo para que este cuadrante entre la lista desordenada
    this.logo = this.doc.querySelector('.brand-logo');
    this.logo.remove()


    // buscamos los botones en version mobile
    this.ul_mobile = this.doc.querySelector('.mobile-buttons')

    // creamos un elemento que añadiremos a la lista
    this.li_mobile_1 = this.doc.createElement('li')
    this.a_li_mobile_1 = this.doc.createElement('a')
    this.i_li_mobile_1 = this.doc.createElement('i')

    // creamos un elemento ancla (enlace)
    this.a_li_mobile_1.setAttribute('class', 'btn-floating')

    // creamos iconos
    this.i_li_mobile_1.setAttribute('class', 'icon-mobilefa-solid fa-gear')

    // añadimos el icono dentro del ancla
    this.a_li_mobile_1.appendChild(this.i_li_mobile_1)

    // dentro de la lista añadiremos el elemento ancla (enlace) creado anteriormente
    this.li_mobile_1.appendChild(this.a_li_mobile_1);

    // añadiremos el elemento de la lista con el ancla dentro de la lista desordenada 
    this.ul_mobile.appendChild(this.li_mobile_1)
  }

}

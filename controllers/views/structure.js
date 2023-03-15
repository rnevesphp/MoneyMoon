
class navStruc {
  constructor() {
    console.log('Structureeeeeeeeeee dashboard')
    this.doc = document

    this.panelPrincipal()
  }

  panelPrincipal() {
    this.ct = new creator();

    this.c = this.doc.getElementById('container-main')

    this.panel = this.ct.newElement('div')
    this.ct.addAttr(this.panel, 'class', 'col s8 panel')

    this.c.appendChild(this.panel);
  }


}

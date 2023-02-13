
class structure {
  constructor() {

    this.doc = document;
    console.log('Structureeeeeeeeeee js')
  }

  createElement(el) {
    this.e = this.doc.createElement(el);
  }

  getElement(idValue) {
    this.e = this.doc.getElementById(idValue)
  }

  addInnerText(el, txt) {
    this.e = el.innerHTML = txt;
  }

  // addId(el, pValueID) {
  //   this.e = el.setAttribute('id', pValueID);
  // }

  setAttr(el, attr, value) {
    this.e = el.setAttribute(attr, value);
  }

  appendNode(elParent, elChild) {
    this.e = elParent.appendChild(elChild);
  }
}

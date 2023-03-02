class creator {
    constructor() {
        this.doc = document
    }

    destroyEl(element) {
        element.innerHTML = ""

        return element;
    }

    newElement(el) {
        this.doc.createElement(el)

        return el;
    }

    addAttr(el, attr, value) {
        el.setAttribute(attr, value);

        return el;
    }
}
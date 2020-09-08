

class ElementWrapper {
    constructor(type) {}
    setAttribute(name, value) {}
    appendChild() {}
}

class TextWrapper {
    constructor() {}
    // appendChild() {}
}

export function createElement(type, attributes, ...children) {
    let e;
    if (typeof type === 'string') {
        const e = document.createElement(type);
    }
    else {

    }

    for (const p in attributes) {
        if (attributes.hasOwnProperty(p)) {
            // const element = attributes[p];
            e.setAttribute(p, attributes[p]);
        }
    }

    for (let child of children) {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }
        e.appendChild(child);
    }
    return e;
}

export function render() {

}

export class Component {
    constructor(type) {
        this.props = Object.create(null);
    }
    setAttribute(name, value) {}
    appendChild() {}
}
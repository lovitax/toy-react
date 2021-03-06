
const RENDER_TO_DOM = Symbol('render to dom');


class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }
    setAttribute(name, value) {
        if (name.match(/^on([\s\S]+)$/)) {
            this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLocaleLowerCase()), value);
        } else {
            if (name === 'className') {
                this.root.setAttribute('class', value);
            }
            else {
                this.root.setAttribute(name, value);
            }
        }
    }
    appendChild(component) {
        // this.root.appendChild(component.root);
        let range = document.createRange();
        range.setStart(this.root, this.root.childNodes.length);
        range.setEnd(this.root, this.root.childNodes.length);
        component[RENDER_TO_DOM](range);
    }
    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }
    // appendChild() {}
}

export class Component {
    constructor(type) {
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
        this._range = null;
    }
    setAttribute(name, value) {
        this.props[name] = value;
    }
    appendChild(component) {
        this.children.push(component);
    }
    [RENDER_TO_DOM](range) {
        this._range = range;
        this.render()[RENDER_TO_DOM](range);
    }
    rerender() {
        this._range.deleteContents();
        this[RENDER_TO_DOM](this._range);
    }
    // get root() {
    //     if (!this._root) {
    //         this._root = this.render().root;
    //     }
    //     return this._root;
    // }
    setState(newState) {
        if (this.state === null || typeof this.state !== 'object') {
            this.state = newState;
            this.rerender();
            return;
        }
        let merge = (oldState, newState) => {
            for (const key in newState) {
                if (oldState[key] === null || typeof oldState[key] !== 'object') {
                    oldState[key] = newState[key];
                }
                else {
                    merge(oldState[key], newState[key]);
                }
            }
        }

        merge(this.state, newState);
        this.rerender();
    }
}

export function createElement(type, attributes, ...children) {
    let e;
    if (typeof type === 'string') {
        e = new ElementWrapper(type);
    }
    else {
        e = new type;
    }

    for (const p in attributes) {
        // if (attributes.hasOwnProperty(p)) {
        e.setAttribute(p, attributes[p]);
        // }
    }

    let insertChildren = (children) => {
        for (let child of children) {
            if (typeof child === 'string') {
                child = new TextWrapper(child);
            }
            if (child === null) {
                // insertChildren(child);
                continue;
            }
            if (typeof child === 'object' && child instanceof Array) {
                insertChildren(child);
            }
            else {
                e.appendChild(child);
            }
        }
    };
    insertChildren(children);
    return e;
}

export function render(component, parentNode) {
    // parentNode.appendChild(component.root);
    let range = document.createRange();
    range.setStart(parentNode, 0);
    range.setEnd(parentNode, parentNode.childNodes.length);
    range.deleteContents();
    component[RENDER_TO_DOM](range);
}
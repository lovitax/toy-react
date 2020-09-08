
import { createElement, Component, render } from './toy-react';


class MyComponent extends Component {
    render() {
        return <div>
            <h1>My Comp</h1>
            {this.children}
        </div>
    }
}


const comp = <MyComponent id="my-comp">
    <div>these</div>
    <div>are</div>
    <div>children</div>
</MyComponent>;

render(comp, document.body);
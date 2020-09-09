
import { createElement, Component, render } from './toy-react';


class MyComponent extends Component {
    constructor() {
        super(); // 不调用super的话，其实没有this
        this.state = {
            a: 1
        };
    }
    render() {
        return <div>
            <h1>My Comp </h1>
            {this.state.a.toString()} {/* 这里要是不toString就会有问题，因为render 其实只处理了数组和字符串*/}
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
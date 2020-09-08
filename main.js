
import {creatElement, Component, render} from './toy-react';


class MyComponent extends Component {}


const div = <MyComponent>
    <div>111</div>
    <div></div>
    <div></div>
</MyComponent>;

console.log(div)
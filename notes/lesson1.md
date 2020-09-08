## 首先分析react jsx语法的原理

其实可以理解为如何将jsx转换为dom

通过查看webpack打包后的的代码，发现就是将xml格式的标签转化为createElement函数调用，然后标签名和属性以及子标签作为函数调用参数。

第一步模拟实现原生dom的jsx，基本就是对原生api的包装，调用document.createElement创建dom，props部分使用setAttribute，children部分使用appendChild。注意这个时候还有文本节点的情况，因为文本节点只能出现在jsx的子元素部分（否则不符合js语法），所以需要判断children是否是字符串，然后使用createTextNode创建文本节点。

## 自定义组件实现

前述已经包含了两种创建dom节点，自定义的组件其实可以理解为第三种形式，为了统一这三种情况，我们将其抽象为三个类，使用相同的接口便于createElement的实现。

通过上一步的经验，我们大概需要三个接口，dom节点的抽象（root），props的抽象（setAttribute），children抽象（appendChildren）。

三个类分别是dom节点（ElementWrapper），文本节点（TextWrapper），组件（Component）。

ElementWrapper构造函数中创建并保存dom节点到root，setAttribute只做原生api代理，appendChild同理（注意真实dom是挂在root上的，所以要取root）；

TextWrapper实际上比较简单，因为没有属性也没有子节点，所以只在一开始就createTextNode就可以了。

Component稍微复杂一点，首先其实没有root，因为没有对应的dom，或者说对应的其实是render函数返回的实dom，但是如果render函数中也是调用的组件呢，那么这个时候其实是个递归过程，继续调子组件的render，查看是否返回了实dom，否则一直继续。

然后是props问题，其实也是代理一下setAttribute，因为没有实dom所以就保存到this.props中即可。

children同理，appendChild即pushu到this.children;


## createElement 实现

还是三个步骤的扩展。

首先判断第一个参数，如果是字符串即认为是标签名，这个时候不使用document.createElement了，改为new ElementWrapper(type)。否则认为是自定义组件，new type。

属性处理，很简单，统一调用setAttribute即可。

children的处理稍微复杂一些，首先作为数组处理（参数用...操作符处理了）。
遍历，然后判断是否是文本节点，new TextWrapper(child)，然后再append；
还有一种情况是render函数中使用 {this.children} 形式的，这时候传进来的就是一个数组，而不是，剩余参数，这个时候需要将这个数组再遍历一遍，对，这个时候就需要递归了。

## 总结

首先是分析jsx编译后的createElement传参，有几种情况。

然后封装三个类，主要对应第一个参数type，string的情况对应实dom，标识符对应Component。然后将dom节点封装到类里面，然后处理props和children。

creareElement也是三个步骤不变，创建节点，改为实例化wrapper，处理属性不变，添加children注意数组的情况（this.children）即可。
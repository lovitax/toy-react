## 第一遍看视频的问题和总结

### 问题

事件绑定，只处理标签上的属性，组件上的怎么办？不管了么

range API

renderToDom


## render方式改造 && setState
render的方式改为range的api（why？）

setState做了一个简单的深拷贝逻辑，然后自动触发一下rerender

修复了createElement的bug，其实之前只处理了字符串和数组，对象的情况，还有数字和null的情况等等需要处理


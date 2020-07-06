## 选择器
选中html元素
- document.getElementByClassName()
- ...

## 操作属性
元素对象.属性

## 修改元素内部内容
元素对象.innerHTML = '新内容'

## 设置css样式
行内样式
    元素对象.style.css属性 = '值'
添加class 类名
    元素对象.className = 'class类名重新赋值'

## 获取html元素样式兼容性
var res = getComputedStyle(wrap, null) || wrap.currentStyle;
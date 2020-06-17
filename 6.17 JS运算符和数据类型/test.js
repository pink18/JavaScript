var person={
    name:'aaa-'
}
console.log(person);
console.log(12);
console.log(34);

var a=2
for(var i=0;i<10;i++){
    a+=2
    console.log(a)
}
// 需求 看到 person 具体内容 又要阻止下面代码执行
// ---> 打断调试 watch监听某一个变量 是否声明 以及赋值的过程
// ---> 没声明 no available 有声明 初始 undefined 值的变化

// callback 表示 动画执行完毕后做其他事情
function ani(el, str, end, time, callback) {
  // 错误优先元素
  var len = arguments.length;
  if(len===0){
    throw new Error('args cannot length 0')
  }
  if(el.nodeType !== 1){
    throw new Error(`"Elemnent:" is not element `)
  }
  if(typeof str !=='string'){
    throw new Error(`"cssStyle:" of DataType must be string `)
  }
  if(typeof end !=='number'){
    throw new Error(`"cssStyleValue:" of DataType must be number  `)
  }
  if(typeof time !=='number'){
    throw new Error(`"timer:" of DataType must be number `)

  }
  var start = getStyle(el, str);
  start = parseFloat(start);
  console.log(str, start);
  var s = end - start; // 求过度值
  time = time * 1000;
  var timer = setInterval(function () {
    //   time/16.7 ----> fun 执行的次数
    // s / time/16.7   每16.7ms 的值变化量 （平均值 ）
    start += s / (time / 16.7);
    // s 不同出口条件不同
    if (s > 0) {
      if (start >= end) {
        // 出口前；也需要 el 的str 属性赋值 ；
        // ---> 区分；哪些str 需要px 哪些不需要px
        str == "opacity" || str === "zIndex"
          ? (el.style[str] = end)
          : (el.style[str] = end + "px");
        clearInterval(timer); // 作用：标志着动画执行完毕

        // 作用:设置回掉函数可以传 也可以 不传
        if (typeof callback === "function") {
          callback();
        }
      }
    } else {
      if (start <= end) {
        str == "opacity" || str === "zIndex"
          ? (el.style[str] = end)
          : (el.style[str] = end + "px");
        clearInterval(timer);
        if (typeof callback === "function") {
          callback();
        }
      }
    }

    // 普通的赋值 区分 哪些属性需要单位
    // 处理【没有单位 css 属性】
    if (str == "opacity" || str === "zIndex") {
      el.style[str] = start;
    } else {
      el.style[str] = start + "px";
    }
  }, 16.7); // 浏览器刷新时间是16.7ms
}

function getStyle(el, str) {
  var res;
  if (el.currentStyle) {
    // ie
    res = el.currentStyle[str];
  } else {
    // 非IE
    res = getComputedStyle(el, null)[str];
  }

  return res;
}
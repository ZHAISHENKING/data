/** 一. Array.prototype.slice.call */
// function sum(a,b){
//     let args = [].slice.call(arguments)
//     console.log(args.reduce((sum, cur) => sum + cur))
// }

/** 二. Array.from */
// function sum(a, b) {
//     let args = Array.from(arguments);
//     console.log(args.reduce((sum, cur) => sum + cur));
// }

/** 三. es6扩展运算符 */
// function sum(a,b){
//     let args = [...arguments]
//     console.log(args.reduce((sum, cur) => sum + cur));
// }

/** 四. concat+apply */
function sum(a, b) {
    let args = Array.prototype.concat.apply([], arguments);//apply方法会把第二个参数展开
    console.log(args.reduce((sum, cur) => sum + cur));//args可以调用数组原生的方法啦
  }

sum(1,2)
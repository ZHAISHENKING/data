/** 这里使用了 void 关键字代替传统的立即执行函数写法(function (){}()), 可以避免语法错误 */
// void function(){
//     var a=1;
//     console.log(a)
// }()

// void function(){
//     var a=2;
//     console.log(a)
// }()


// var b = 1;
// void function(){
//     var env = {b:1};
//     b = 2;
//     console.log("In function a:", b);
//     with(env) {
//         var b = 3;
//         console.log("In with b:", b);
//     }
// }();
// console.log("Global b:", b);

// var b = 2;
// function foo () {
//   console.log(b); // 2
//   console.log(a); // error
// }

// void function () {
//     var a = 1
//     foo()
// }()

/** 箭头函数指向外层this， */
var o = {}
o.foo = function foo(){
    console.log(this);
    return () => {
        console.log(this);
        return () => console.log(this);
    }
}

o.foo()()(); // o, o, o
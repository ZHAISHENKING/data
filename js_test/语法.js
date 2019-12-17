/** 此脚本为理解预处理机制 */


void function(){
    var a = 1;
    function foo() {
        console.log(a);  // undefined
        var a = 2;
    }
    foo();
}()

void function(){
    var a = 1;
    function foo() {
        console.log(a); // undefined
        if(false) {
            var a = 2;
        }
    }
    foo();
}()



// void function(){
//     var c = 1;
//     function foo(){
//         console.log(c); // error
//         class c {}
//     }
//     foo();
// }()

void function (){
    "use strict";
    function f(){
        console.log(this);
    };
    f.call(null);
}()

// void function (){
//     function f(){
//         console.log(this);
//     };
//     f.call(null);
// }()

void function (){
    let o = { a: 10, b: 20}
    Object.defineProperty(o, "c", {enumerable:false, value:30})

    for(let p in o)
        console.log(p); // a b
}()

void function(){
    const a = 2;
    if(true){
        console.log(a); // 抛错
        const a = 1;   
    }
}()
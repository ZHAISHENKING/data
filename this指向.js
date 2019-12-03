// var a = 1;
// var obj = {
//     a : 2,
//     b : function(){
//         setTimeout(function () {
//             console.log(this.a);
//         }, 0)
//     }
// }
// obj.b(); // undefined


var a = 1;
var obj = {
    a : 2,
    b : function(){
        setTimeout(function () {
            console.log(this.a);
        }.call(this), 0)
    }
}
obj.b();
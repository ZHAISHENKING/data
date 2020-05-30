// var a = 1;
// var obj = {
//     a : 2,
//     b : function(){
//         setTimeout(function () {
//             console.log(this);
//         }, 0)
//     }
// }
// obj.b(); // undefined


// var a = 1;
// var obj = {
//     a : 2,
//     b : function(){
//         setTimeout(function () {
//             console.log(this.a);
//         }.call(this), 0)
//     }
// }
// obj.b();

function show () {
console.log('this:', this);
}
// var obj = {
// show: show
// };
// obj.show();
// var obj = {
//     show: function () {
//         show()
//     }
//     };
//     obj.show();
    var obj = {
        show: function () {
        console.log('this:', this);
        }
        };
        (0, obj.show)();
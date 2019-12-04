/** 说出下面代码打印值 */

let obj1 = {foo: 'foo', bar: 'bar'}

let obj2 = obj1;
let obj3 = {foo: 'foo', bar: 'bar'}

console.log(obj1 === obj2)
console.log(obj1 === obj3)
obj2.foo = 'foofoo';
console.log(obj1.foo === 'foofoo')

// 盲猜下 是true false true

// 最终结果 true false true

// 个人理解： obj2 = obj1 实际上obj1和2共享引用地址，
// obj2的属性改变 obj1也会改变。obj3虽然值看起来和obj1一样，实际上是分配的另一块引用地址
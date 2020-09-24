/**
 * 4. 封装Object.setDefault(key, value)方法，当key不存在时设置key值为value, 存在时不做处理
 */

/** 5 封装Array.exchange方法交换数组元素
 * 例： 
 * arr1 = [1,2,3,4,5]
 * arr1.exchange(1,3)
 * // [1,4,2,3,5]
*/


/** 6 结果？*/
(function(){
    console.log(1)
    function a(){return}
    a()
    console.log(2)
    for(let i in [1,2,3]){
        return
    }
    console.log(3)
})()

/** 7 结果？ 为什么？*/
console.log('' instanceof String)

/** 8 结果？ 为什么？*/
function side(arr){
    arr[0] = arr[2]
}
function A(a,b,c){
    c=10;
    console.log(arguments)
    side(arguments)
    return a+b+c
}
function B(a,b,c=3){
    c=10;
    console.log(arguments)
    side(arguments)
    return a+b+c
}
console.log(A(1,1,1))
console.log(B(1,1,1))

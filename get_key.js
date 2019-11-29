/** 如何拿到闭包中的key值? */
(function() {
    // 一个内部变量，外部无法获取
    var key = Math.random()
  
    console.log('[test] key:', key)
  
    // 一个内部函数
    function internal(x) {
      return x
    }
  
    // 对外暴露的函数
    apiX = function(x) {
      try {
        return internal(x)
      } catch (err) {
        return key
      }
    }
  })()

 var key;
 function F(){
     var ret = apiX(2);
     if(ret<1) key = ret;   // key的范围是0-1
     return F(); // 无限递归
 }

 try{
     F();
 }catch (err) {}

 console.log('got key:', key)
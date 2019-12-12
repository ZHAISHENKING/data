/**
 * completion 语句决定了 JavaScript 中语句执行的顺序
 *
 * @returns
 */
function foo(){
    try{
      return 0;
    } catch(err) {
  
    } finally {
      return 1;
    }
  }
  
  console.log(foo())
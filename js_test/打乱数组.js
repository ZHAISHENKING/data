/** 设计一个函数，使原数组顺序打乱 */
const arr = [1, 2, 3, 4, 5, 6, 7]

/** 方法一: 通过随机生成索引返回打乱数组 */
// function disorderArray(arr){
//     let len = arr.length;
//     let validCount = 0
//     let usedIndexs = [] // 记录出现过的索引
//     let newArray = []
//     while(validCount < len){
//         let index = Math.floor(Math.random()*len);
//         if(usedIndexs.indexOf(index) > -1){
//             continue
//         }else{
//             usedIndexs.push(index)
//         }
//         validCount++
//         newArray.push(arr[index])
//     }
//     return newArray
// }

/** 方法二： sort */
function shuffle(arr) {
  arr.sort(() => {
    return Math.random() - 0.5
  })
  return arr
}

function obfs(arr) {
  return arr.slice().reduce(acc => [...acc, ...arr.splice(parseInt(Math.random() * arr.length, 10), 1)], []);
}

console.log(obfs([1, 2, 3, 4, 5, 7, 11, 6, 9, 8, 0, 12]));
console.log(shuffle(arr))
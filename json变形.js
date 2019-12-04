/**
 * 现写一个函数，将下面的Object转化为期望的数组
 * [
        {name: "Lisa", age: 16, gender: "Female", birthday: "2000-12-01"},
        {name: "Bob", age: 22, gender: "Male", birthday: "1996-01-21"},
    ]
 */
let obj = {
    rows: [
     ["Lisa", 16, "Female", "2000-12-01"],
     ["Bob", 22, "Male", "1996-01-21"]
    ],
    metaData: [
     {name: "name", note: ''},
     {name: "age", note: ''},
     {name: "gender", note: ''},
     {name: "birthday", note: ''}
    ]
   }

let arr = []
let {rows,metaData}  = obj
for (let i=0; i<rows.length; i++){
    let obj2 = {}
    metaData.forEach((e, index)=>{
        obj2[e.name] = rows[i][index]
    })
    arr.push(obj2)
}
// console.log(arr)

/** 
 * 2. 写一个函数用b更新a，期望得到
 * [
    {id: 10001, name: "Lisa", age: 16, gender: "Female"},
    {id: 10002, name: "Bob King", birthday: "1996-01-22", age: 22},
    {id: 10003, name: "Alice", age: 20},
    {id: 10005, name: "Tom", birthday: "2000-01-01"},
    ]
*/

let a = [
    {id: 10001, name: "Lisa", age: 16},
    {id: 10002, name: "Bob", age: 22},
    {id: 10003, name: "Alice", age: 20},
    ];

let b = [
    {id: 10001, gender: "Female"},
    {id: 10002, name: "Bob King", birthday: "1996-01-22"},
    {id: 10005, name: "Tom", birthday: "2000-01-01"},
    ]

/**
 * 我的解法： 对a遍历取出id和item的键值对， 然后遍历b
 */
// let k_v = {}
// a.forEach((o, i)=>{
//     k_v[o.id] = i
// })
// for (let i=0; i<b.length; i++){
//     const id = b[i].id
//     if (k_v.hasOwnProperty(id)){
//         // 遍历b中属性，与a冲突则覆盖，没有则添加
//         bijiao(a[k_v[id]], b[i])
//     }else{
//         a.push(b[i])
//     }
// }

// function bijiao(a,b){
//     Object.keys(a).forEach(k=>{
//         if(b.hasOwnProperty(k)){
//             a[k]=b[k]
//         }
//     })
//     Object.keys(b).forEach(k=>{
//         if(a.hasOwnProperty(k)===false){
//             a[k]=b[k]
//         }
//     })
//     return a
// }

/** github上得到的解法：使用到了reduce（我之前没用过），Object.assign(es6中的继承) */
const map = a.reduce((acc, curr, index) => {
    acc[curr.id] = index;
    return acc;
  }, {});
  
  b.forEach(o => {
    const index = map[o.id];
  
    if (index !== undefined) {
      a[index] = Object.assign(a[index], o);
    }
    else {
      a.push(o);
    }
  });
console.log(a)
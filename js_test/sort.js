let arr = [1,4,3,6,7,9,2,5]

// 冒泡排序
// function bubbleSort(arr){
//     let l = arr.length;
//     for(let i=0; i<l -1; i++){
//         for(let j=0; j<l-1-i; j++){
//             if (arr[j]>arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr))

// 插入排序
const insertSort = (arr, start=0, end) => {
    end = end || arr.length;
    for (let i=start; i< end; i++){
        for(let j=i; j>start && arr[j-1]>arr[j]; j--){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
        }
    }
    return
}

// 插入排序优化
// 考虑到交换带来的性能损耗，将交换改为覆盖
const insertSort1 = (arr, start=0, end) => {
    end = end || arr.length;
    for (let i=start; i< end; i++){
        let e = arr[i];
        let j;
        for(j=i; j>start && arr[j-1]>e; j--){
            arr[j] = arr[j-1]
        }
        arr[j] = e;
    }
    return
}
insertSort1(arr)
console.log(arr)

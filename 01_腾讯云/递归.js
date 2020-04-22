const locationList = [
  {id: 0, name: "中国"},
  {id: 1, pid: 0, name: "广东省"},
  {id: 2, pid: 1, name: "深圳市"},
  {id: 3, pid: 1, name: "广州市"}
]

function array2obj(arr) {
  let result = {}
  let sub;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].pid === undefined) {
      result.root = arr[i]
      sub = x(arr, arr[i].id)
      result.root.sub = sub
    }
  }
  return result
}

function x(arr, pid) {
  let sub = []
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].pid === pid) {
      const obj = arr[i]
      temp = x(arr, obj.id)
      // 这里如果找不到子节点，就不需要sub了。在项目中为保持返回格式统一，一般返回[]
      if (temp.length) {
        obj.sub = temp
      }
      sub.push(arr[i])
    }
  }
  return sub
}


console.log(array2obj(locationList))

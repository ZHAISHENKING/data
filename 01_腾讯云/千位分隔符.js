function addComma(num) {
  let nums = num.toString();
  let result = ''
  let count = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    result = nums[i] + result
    if (count % 3 === 0 && i !== 0) {
      result = ',' + result
    }
    count++
  }
  return result
}

//
console.log(addComma(123456789))

// let a = 1000
// console.log(a.toLocaleString()) // 1,000
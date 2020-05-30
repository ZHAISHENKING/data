function reverse(str){
  let arr = str.split('')
  let i=arr.length;
  let s =''
  while(i--){
    s+=arr.pop()
  }
  return s
  // return str.split('').reverse().join('')
}

console.log(reverse('str'))
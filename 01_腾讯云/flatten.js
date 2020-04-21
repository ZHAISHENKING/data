
// 平铺数组
function flat(arr){
	let result = []
	result = depend(result, arr)

	function depend(list, item){
		if(typeof item === 'number'){
			list.push(item)
		}else{
			for(let i=0; i<item.length;i++){depend(list, item[i])}
		}
		return list
	}
	return result
}
console.log(flat([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

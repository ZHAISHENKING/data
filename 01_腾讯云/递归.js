const locationList = [
  {id: 0, name: "中国"},
  {id: 1, pid: 0, name: "广东省"},
  {id: 2, pid: 1, name: "深圳市"},
  {id: 3, pid: 1, name: "广州市"}
]

let locationTree = buildLocationTree(locationList);
console.log(locationTree)

function buildLocationTree(locationList) {
	// 实现
	let res = {}
	for(let i=0;i<locationList.length;i++){
		if(locationList[i].pid === undefined){
			res.root = locationList[i]
			let sub = convertToTreeData(locationList,locationList[i].id)
			res.root.sub = sub
		}
	}

	function convertToTreeData(data, pid) {
	  let result = []
	  let temp = []
	  for(let i=0;i<data.length;i++){
	  	if(data[i].pid === pid){
	  		const obj = data[i]
	  		temp = convertToTreeData(data, data[i].id)
	  		if(temp.length>0){
	  			obj.sub = temp
	  		}
	  		result.push(obj)
	  	}
	  }  
	  return result
	}
  	return res
}

function format(text, arr){
// 两部分任务，p是匹配表达式，q是匹配动态替换的结果
let p = "";
let q = "";
for (var i=0;i<arr.length;i++){
	p+=`(${arr[i]})`;
	q+=`$${i+1}`;
	if(i<arr.length-1){p+='|'}
}
const patten = eval(`/${p}/g`)
// patten = /(腾讯云)|(云)/g;
// q = '$1$2'
let matches = text.replace(patten, `<span class="red">${q}</span>`)
return matches
}


const text = `腾讯云，是腾讯推出的云端运算服务，发布全球云服务版图，
构建覆盖全球的数据中心节点，在更多地区跟全球的合作伙伴共同构建，
为中国出海企业以及海外本土企业提供云服务。`
console.log(format(text, ["腾讯云", "云"]))
/* <span class="red">腾讯云</span>, 
使腾讯推出的<span class="red">云</span>端运算服务，
... */






function F(){
	return new Proxy({}, {
		get: (target, property) => {
			console.log('11')
			if(!(property in target)) {
				target[property] = new F();
			}

			return target[property]
		}
	})
}

let a=F()
let b=new F;
console.log(Object.getPrototypeOf(a) === F.prototype)
console.log(Object.getPrototypeOf(b) === F.prototype)
console.log(a.temp, b.temp)
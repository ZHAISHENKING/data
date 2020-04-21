function add(n) {
  sum = n;
  const proxy = new Proxy(()=>{}, {
    get(obj, key) {
      return () => sum;
    },
    apply(receiver, ...args) {
      console.log(args)
      sum *= args[1][0];
      return proxy;
    },
  });
  return proxy
}

console.log( add(1)(2)); // 2
console.log( add(5)(-1)(2) ); // -10
console.log( add(6)(-1)(-2)(-3) ); // -36
console.log( add(0)(1)(2)(3)(4)(5) ); // 0


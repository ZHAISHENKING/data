class A{}
class B extends A {
    constructor(name){
        super()
        this.name_ = name
    }
    say(){
        console.log(123)
    }
}

let c = new B('bob')
console.log(c.name_)    // bob
console.log(c instanceof A) // true
console.log(c instanceof B) // true
console.log(Object.getPrototypeOf(B)) // [Function: A]
console.log(typeof c) // object

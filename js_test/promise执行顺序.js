// var r = new Promise(function(resolve, reject){
//     console.log("a");
//     resolve()
//   });
//   r.then(() => console.log("c"));
//   console.log("b")

function sleep(duration) {
return new Promise(function(resolve, reject) {
    setTimeout(resolve,duration);
})
}
async function foo(name){
    await sleep(2000)
    console.log(name)
}
async function foo2(){
    await foo("a");
    await foo("b");
}

async function foo3(name){
    await sleep(3000)
    console.log(name)
}

foo2()
foo3('haha')
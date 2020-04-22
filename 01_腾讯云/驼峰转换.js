let obj = {
  root: {
    id: 0,
    name: "中国",
    sub: [
      {
        id: 1,
        name: "广东省",
        pid: 0,
        sub: [
          {id: 2, pid: 1, name: "深圳市"},
          {id: 3, pid: 1, name: "广州市"}
        ]
      }
    ]
  }
}

function format(obj) {
  let keys = Object.keys(obj)
  keys.forEach((key) => {
      const new_key = upCase(key)
      obj[new_key] = obj[key]
      delete obj[key]
      fn(obj[new_key])
    }
  )
  return obj
}

function upCase(str) {
  return str.replace(str[0], str[0].toUpperCase())
}

function fn(o) {
  if (Array.isArray(o) && o.length > 0) {
    o.forEach((item, i) => {
      if (typeof item === 'object') {
        fn(o[i])
      }
    })
  } else {
    if (typeof o === 'object') {
      let keys = Object.keys(o)
      for (let key of keys) {
        const new_key = upCase(key)
        o[new_key] = o[key]
        delete o[key]
        fn(o[new_key])
      }
    }
  }
}

console.log(format(obj))
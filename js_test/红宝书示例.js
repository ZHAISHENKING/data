/** 
 * 红宝书第四版示例代码
 **/

// ------------ Date -----------------
let someDate = new Date(Date.parse("May 23, 2019"));
let y2k = new Date(Date.UTC(2000, 0));
let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
console.log(someDate) // 2019-05-22T16:00:00.000Z
console.log(y2k) // 2000-01-01T00:00:00.000Z
console.log(allFives) // 2005-05-05T17:55:55.000Z

// 起始时间
let start = Date.now();
console.log(start) // 1606786501451

// ------------ RegExp -----------------
let pattern1 = /\[bc\]at/igm;

console.log(pattern1.global);      // true
console.log(pattern1.ignoreCase);  // true
console.log(pattern1.multiline);   // true
console.log(pattern1.lastIndex);   // 0
console.log(pattern1.source);      // "\[bc\]at"
console.log(pattern1.flags);       // "gim"

let pattern3 = new RegExp(pattern1.source, pattern1.flags)
console.log(pattern3.source, pattern3.flags);

let pattern2 = new RegExp("\\[bc\\]at", "i");

console.log(pattern2.global);      // false
console.log(pattern2.ignoreCase);  // true
console.log(pattern2.multiline);   // false
console.log(pattern2.lastIndex);   // 0
console.log(pattern2.source);      // "\[bc\]at"
console.log(pattern2.flags);       // "i"

// 正则方法 exec 配合 g或y 标记使用，
// 如果pattern有g标记，则每次调用exec会向后推进，像生成器的next一样
let text = "cat, bat, sat, fat";
let pattern = /.at/g;
let matches = pattern.exec(text);
console.log(matches.index);      // 0
console.log(matches[0]);         // cat
console.log(pattern.lastIndex);  // 3

matches = pattern.exec(text);
console.log(matches.index);      // 5
console.log(matches[0]);         // bat
console.log(pattern.lastIndex);  // 8

matches = pattern.exec(text);
console.log(matches.index);      // 10
console.log(matches[0]);         // sat
console.log(pattern.lastIndex);  // 13

// test 只关心是否匹配，不关心匹配内容，常用于账户检测
text = "000-00-0000";
pattern = /\d{3}-\d{2}-\d{4}/;

if (pattern.test(text)) {
  console.log("The pattern was matched.");
}

// 正则静态属性
text = "this has been a short summer";
pattern = /(.)hort/g;

if (pattern.test(text)) {
  console.log(RegExp.input);        // 原始字符串：this has been a short summer
  console.log(RegExp.leftContext);  // 匹配结果前：this has been a
  console.log(RegExp.rightContext); // 匹配结果后： summer
  console.log(RegExp.lastMatch);    // 最后一次匹配结果：short
  console.log(RegExp.lastParen);    // 最后一次捕获组结果：s

  console.log(RegExp.$_);      // this has been a short summer
  console.log(RegExp["$`"]);   // this has been a
  console.log(RegExp["$'"]);   // summer
  console.log(RegExp["$&"]);   // short
  console.log(RegExp["$+"]);   // s
}

// ----------- Global --------------------
// URI
let uri = "http://www.wrox.com/illegal value.js#start";

// "http://www.wrox.com/illegal%20value.js#start"
console.log(encodeURI(uri)); // 编码URI

// "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start"
console.log(encodeURIComponent(uri)); // 编码URI中的所有特殊符号

// -------------JSON-------------------
let book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 4,
  year: 2017,
  toJSON: function() {
    return this.title;
  }
};
let jsonText = JSON.stringify(book, ['title', 'authors'], 4); // "Professional JavaScript"
console.log(jsonText)

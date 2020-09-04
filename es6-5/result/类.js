// ----------------转换前-------------------
class A {
    // 构造器
    constructor(name){
        this.name_ = name;
        return this
    }
    // 静态方法 即A.sayName
    static sayName(){
       console.log('my name is ' + this.name)
    }
    // 类方法，即在A.prototype.myName
    myName(){
        console.log(this.name_[0].toUpperCase() + this.name_.slice(1))
    }
    // 生成器方法
    *NicknameIterator() {
       yield 'Jack';
       yield 'Jake';
       yield 'J-Dog';
     }
     // 访问器属性
     get n(){
       return this.name_
     }
     set n(val){
       this.name_ = val
     }
}
// ---------------------转换后--------------------------
'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var A = function () {
    function A(name) {
        _classCallCheck(this, A);

        this.name_ = name;
        return this;
    }

    _createClass(A,
        [{
            key: 'myName',
            value: function myName() {
                console.log(this.name_[0].toUpperCase() + this.name_.slice(1));
            }
        }, {
            key: 'NicknameIterator',
            value: /*#__PURE__*/regeneratorRuntime.mark(function NicknameIterator() {
                return regeneratorRuntime.wrap(function NicknameIterator$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return 'Jack';

                            case 2:
                                _context.next = 4;
                                return 'Jake';

                            case 4:
                                _context.next = 6;
                                return 'J-Dog';

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, NicknameIterator, this);
            })
        }, {
            key: 'n',
            get: function get() {
                return this.name_;
            },
            set: function set(val) {
                this.name_ = val;
            }
        }],
        [{
            key: 'sayName',
            value: function sayName() {
                console.log('my name is ' + this.name);
            }
        }]);

    return A;
}();
/**
 * Created by Jesse on 17/3/28.
 */
var book = {};
Object.defineProperties(book, {
    _year: {
        writable: true,
        value: 2004
    },
    edition: {
        writable: true,
        value: 1
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
//创建对象
/**
 * 工厂模式
 * 缺点：不能确定一个对象的类型
 */
function createPerson1(name,job) {
    var o = {};
    o.name = name;
    o.job = job;
    o.sayName = function(){
        console.log(this.name);
    };
    return o;
}
var p1 = createPerson1("zjx","player");
console.log(p1 instanceof createPerson1);
/**
 * 构造函数模式
 * 缺点：如果CreatePerson2有多个实例的sayName方法不是一个，如果想用同一个方法，需要把sayName写在全局
 * this.sayName = sayName; 会引入全局变量
 * @param name
 * @param job
 */
function CreatePerson2(name,job) {
    this.name = name;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }
}
// function sayName() {
//     console.log(this.name);
// }
var p2 = new CreatePerson2("zjx","player");
console.log(p2 instanceof CreatePerson2);
/**
 * 原型模式
 * @constructor
 */
function CreatePerson3() {

}
CreatePerson3.prototype.name = "zjx";
CreatePerson3.prototype.job = "player";
CreatePerson3.prototype.sayName = function () {
  console.log(this.name);
};
var p3 = new CreatePerson3();
console.log(CreatePerson3.prototype.isPrototypeOf(p3));
console.log(Object.getPrototypeOf(p3));
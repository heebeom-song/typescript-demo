var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 13234;
        this.stdName = 'park';
        this.gender = 'female';
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("지정된 이름 : ", this.stdName);
    };
    MyStudent.prototype.getName = function () {
        return this.stdName;
    };
    return MyStudent;
}());
// enum GenderType{
//     Male,
//     Female
// }
var std1 = new MyStudent();
std1.setName("김철수");
console.log("getName test : ", std1.getName());
var user = {
    name: 'john',
    age: 25
};
var numStr = '100';
var item;
if (typeof (numStr) === 'string')
    item = 0;
else
    item = numStr;

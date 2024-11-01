var Employee = /** @class */ (function () {
    function Employee(_empName, _age, _empJop) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJop = _empJop;
        this.printEmp = function () {
            console.log("".concat(_this._empName, "\uC758 \uB098\uC774\uB294 ").concat(_this._age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(_this._empJop, " \uC785\uB2C8\uB2E4."));
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        get: function () {
            return this._empName;
        },
        set: function (empName) {
            this._empName = empName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp = new Employee("송사리");
emp.empName = "박치기";
emp.printEmp();

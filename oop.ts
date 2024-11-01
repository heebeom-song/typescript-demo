class Employee{
    constructor(
        private _empName? : string, 
        private _age? : number, 
        private _empJop? : string
    ){
    }

    get empName(){
        return this._empName;
    }

    set empName(empName : string){
        this._empName = empName;
    }

    printEmp = () : void => {
        console.log(`${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJop} 입니다.`);
    }
}

let emp = new Employee("송사리");
emp.empName = "박치기";

emp.printEmp();
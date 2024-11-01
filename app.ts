interface Student{
    stdId : number;
    stdName? : string;
    age? : number;
    gender? : 'male' | 'female';
    course? : string;
    completed? : boolean;
    setName : (name : string) => void;
    getName : () => string;
}

class MyStudent implements Student{
    stdId = 13234;
    stdName = 'park';
    gender : 'male' | 'female' = 'female';

    setName(name: string) : void{
        this.stdName = name;
        console.log("지정된 이름 : ", this.stdName);
    }
    getName() : string{
        return this.stdName;
    }
}

// enum GenderType{
//     Male,
//     Female
// }

const std1 = new MyStudent();
std1.setName("김철수");
console.log("getName test : ", std1.getName());

const user : {name : string, age : number} = {
    name : 'john',
    age : 25
}

type strOrNum = number | string;
let numStr : strOrNum = '100';
let item : number;


if(typeof(numStr) === 'string') item = 0;
else item = numStr;


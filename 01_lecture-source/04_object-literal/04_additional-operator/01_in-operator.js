// in 연산자
// 프로퍼티 존재 여부 확인

var student = {
    name :'조승윤',
    age : 22,
    test :undefined
};

console.log(student.name === undefined);  // false - 존재
console.log(student.heigth == undefined);  // true - 존재하지 않음
console.log(student.test === undefined);
// 프로퍼티 값이 undefined 이기 때문에 프로퍼티는 존재하지만, true - 존재하지 않음으로 판별되는 문제.

// in
console.log('==================================')
console.log('name' in student);  // true - 존재한다.
console.log('height' in student);  // false - 존재하지 않는다.
console.log('test' in student);  // true - 존재한다.

var student = {
    name : '조승윤',
    age : 22,
    getInfo : function() {
        return `${this.name}은(는) ${this.age}세 입니다.`;
    }
};

for (var key in student) {
    console.log (`key : ${key}`);  // 프로퍼티 키
    console.log(`student[key] : ${student[key]}`);  // 키에 해당하는 값

}
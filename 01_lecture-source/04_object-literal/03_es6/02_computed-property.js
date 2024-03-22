// 계산된 프로퍼티 이름

var prefix ='key';
var index = 0;

var obj ={};

// ES6 에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적으로 생성하려면
// 객체 리터럴 외부에서 대괄호 표기법으로 사용해야한다.

obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;

console.log(obj);

// ES6 에서느느 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 
//프로퍼티 키를 동적으로 생성할 수 잇다.

var obj2 = {
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index
};

console.log(obj2);
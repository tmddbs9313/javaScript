// [[Prototype]]

/*자바스크립트의 객체는[[Prototype]]이라는 숨김 프로퍼티를 갖는다.
    이 프로퍼티의 값은 Null 이거나 다른 객체에 대한 참조가 되는데
    참조 대상을 프로퍼티를 읽으려고 할떄 해당 프로퍼티가 없으면 자바스크립트는
    자동으로 프로토타입에서 프로퍼티를 찾는다. 
    이것을 프로토타입 상속이라고 한다.
    즉 자바에서 상속과 비슷한 개념이다.*/

    const user ={
        activate : true,
        login : function() {
            console.log('로그인 되었습니다!!');
        }
    };
    
    const student = {
         passion: true
    };

    /* [[]] <- 외부에서 접근 못함
    __proto__ 는 [[Prototype]]의 getter, setter 역할이다.
    요즘에는 잘 사용하지 않지만, 과거의 호환을 위해 남아있으며 
    직관적인 이해를 위해 사용하고 있다.
    
    함수 object.getprototypeOf 나 object.setPrototyeOf 를 써서 
    프로토 타입을 설정하는 것이 좋다*/

    student.__proto__ = user;
    //activate 프로퍼티 > user
    console.log(student.activate);
    student.login();

    //student 의 프로토타입은 user 이다. 혹은 student 는 user 상속받는다라고 표현한다.
    // 프로토타입에서 상속받은 프로퍼티 '상속프로퍼티 '라고 부른다.

    const ohgiraffersStudent = {
        class  :402,
        __proto__ :student
    };

    // ohgiraffersStudent.__proto__ = student;

    console.log(ohgiraffersStudent.activate);  // user 에서 상속
    console.log(ohgiraffersStudent.passion);  //student 에서 상속

    // __proto__ 의 값은 객체 or null 만 가능하며 다른 자료형은 무시된다.
    // 순환 참조가 허용되지 않는다.
    






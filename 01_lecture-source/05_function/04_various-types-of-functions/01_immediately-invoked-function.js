/*즉시 실행 함수 */

/* 함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 호출되며 다시 호출할 수 없다.
    즉시 실행함수는 반드시() - 그룹연산자로 감싸야한다. */

    // 함수 이름이 없는 익명함수를 사용하는 것이 일반적이다
    (function () {
        console.log ('익명 즉시 실행 함수, 함수 정의와 동시에 호출!!');
    })();

    (function hello(name) {
        console.log('기명즉시 실행함수, 함수정의와 동시에 호출됨,');
        console.log(`${name}님 안녕하세요`);
    }) ('조승윤');

    hello('홍길동');


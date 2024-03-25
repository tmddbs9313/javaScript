/* let 
    var 키워드의 단점을 보완하기 위해 ES6 에서 새로운 변수 선언 키워드인 let, const 를 도입함. */

    // 1. 변수 중복 선언 금지
    let msg = '안녕하세요';
    // let 이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않늗다.
    // let msg = '안녕히가세요';

    // 2. 블록 레벨 스코프 지원
    // let 키워드로 선언한 변수는 모든 코드블록 (함수, if, for, while, try/catch)를 지역 스코프로 인정한
    let i = 0;
    for(let i = 0; i < 10; i ++) {
        console.log(`지역변수 i : ${i}`);
    }
    console.log(`전역 변수 i : ${i}`);

    // 3. 변수 호이스팅
    // let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는것처럼 동작한다
    // var 키워드는 선언단계와 초기화 단계가 함께 진행되지만,
    // let 키워드는 선언단ㄱㅖ와 초기화 단계가 분리되어 진행된다.
    // 따라서 선언은 되었지만, 초기화가 되지않아 참조시 오류가 발생한다.
    // console.log(x);
    let x;

    // 하지만 변수 호이스팅이 발생하지 않는것은 아니다
    let y =1 ;
    if(true) {
        // 변역 호이스팅으로 아래의 지역변수 y선언이 먼저 일어났기 떄문에
        // 전역변수 y를 참조하지않고 오류 발생
        console.log(y);
        let y =2;
    }
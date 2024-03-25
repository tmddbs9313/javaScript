/*일반적인 의미의 배열은 각요소가 동일한 데이터 크기를 가지며 
    빈틈없이 연속으로 이어져 있어 인덱스를 통해 임의의 요소에 한번에 접근할수 있는것을 장점으로 가지고있다
    
    하지만 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체로
    각각의 메모리 공간이 동일한 크기를 갖지않아도되고 연속적으로 이어져 있지 않을 수도 있다.
    
    인덱스를 나타내는 문자열을 프로퍼티 키로 가지며 length 프로퍼티를 갖는 특수한 객체이다.*/


    /*프로퍼티 플래그
        객체 프로퍼티는 값(value)와 함께 플래그(flag)라 불리는 특별한 속성3가지를 가진다.
        writable :true 이면 값을 수정할 수 있다. false 이면 읽기만 가능하다.
        enumerable :true 이면 반복문을 사용해 나열 가능. 그렇지않으면 반복문 사용 불가
        configurable : true 이면 프로퍼티 삭제나 플래그 수정이 가능하다.
                        그렇지않다면 프로퍼티 삭제와 플래그 수정은 불가능하다. */
    console.log(Object.getOwnPropertyDescriptor([1,2,3]));

    //자바 스크립트의 모든 값이 객체의 프로퍼티 값이 될 수 있으므로, 
    //모든 값이 배열의 요소가 될 수 있따.
    const arr =[
        '조승윤',
        22,
        null,
        undefined,
        NaN,
        Infinity,
        [],
        {},
        function() {}
    ];

    console.log(arr);

    //자바 스크립트의 배열은 인덱스로 요소에 접근 경우에는 일반 배열보다 느리지만
    //요소의 삽입, 삭제 경우에는 일반적인 배열보다 빠르다.

    

/* Object 생성자 함수
    new 연산와 함께 object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
    빈객체 생성이후 프로퍼티 혹은 매서드를 후가하여 객체를 완성할 수 잇따
     */

    /*1. 객체 리터럴 {};
      2. Object 생성자 함수
      3. 생성자 함수
      4. Object.create 메소드
      5. class(ES6추가) */

    //빈 객체 생성
    const student = new Object();
    console.log(student);

    student.name='조승윤';
    student.age = 20;

    console.log(student);

    /*Object 생성자 함수를 사용해 객체를 생성할 필요는 없다.
        객체 리터럴을 사용하는 것이 더욱 간편하다.
        자바스크립트는 object 생성자함수 이외에도 
        string, number,boolean,functio,array, date,regExp
        등등의 빌트인 object생성자함수를 제공한다. */
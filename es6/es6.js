// ----------------let---------------------------
var x = 30;
console.log(x);
console.log(window.x);
var x = 40;
console.log(x);

let y = 30;
console.log(y);
console.log(window.y); //undefined
/* let y = 30;
console.log(y); 에러 */


{
var a = 30;
}
console.log(a); //30
/* {
let b = 30;
}
console.log(b); 에러 */
/*
function getValue(condition) {
    { 
        var value;  }
    if(condition) {
        value = 30;
        return value;
    } else {
        return value;
    }
}
console.log(getValue(true)); //30
console.log(getValue(false)); //undefined
// 에러X, 선언은 되어 메모리에 올라갔으나 연산은 되지않음
*/

/*
function getValue(condition) {
    {   
        let value=30;   }
    if(condition) {
        return value;
    } else {
        return value;
    }
}
console.log(getValue(true));
console.log(getValue(false));
// 에러, Uncaught ReferenceError: value is not defined
*/

// ----------------const---------------------------
/*
const N = 1;
const S = 5;
var walkTo = S;
S = 3;
console.log(S); // Uncaught TypeError: Assignment to constant variable.
*/

var add = function(a, b) {
    return a + b;
}

add = 3;
console.log(add); //3 var로 선언할 경우 함수가 대치될 수 있다.
//console.log(add(3,4)); //Uncaught TypeError: add is not a function

/*
const add = function(a, b) {
    return a + b;
}
add = 3;
console.log(add); //Uncaught TypeError: Assignment to constant variable.
*/

// ----------------String formatting---------------------------
{   
    //기존방식
    /*
    let template =  "<section> \
                        <h1></h1> \
                        <p></p> \
                    </section>"
                    */
    let title = "ES6";
    let content = "새로운 문자열";                   
    let template =   String.raw `<section> // String.raw : \n\n이스케이프 문자를 문자열로인식한다
                        <h1>${title}</h1>
                        <p>${content}</p>
                    </section>`
    console.log(template)

}

// -----------------향상된 객체의 표현식--------------------------
{
    let kor = 30;
    let eng = 40;
    let math = 50;
    // 기존에 값을 가지고 있을 때
    let exam = {
        kor,
        eng,
        math,
        total(){ //메소드를 대입할 때 function키워드를 제거하여 표현가능하다.
            return kor + eng + math;
            }
        }
    console.log(exam.kor); //30
    console.log(exam.total()); //120

    //객체를 만드는 함수(객체를 리턴)
    function createExam(kor, eng, math) {//객체의 속성명 정의
                return {kor, eng, math}; //나열하여 리턴가능하다.
    }
    // 객체 생성 함수로 객체생성
    var exam2 = createExam(20, 20, 30);//값을 넣어 리턴받는다
    console.log(exam2);//{kor: 20, eng: 20, math: 30}
    
}
{   
    let attr = "kor"
    let exam = {
        // attr:10
        [attr]:10
    };
    // console.log(exam.kor); //undefined
    console.log(exam.kor);//10
}

// -----------------Object Distructuring--------------------------
{
    let exam = {
        kor:20,
        eng:30,
        math:40
    }

    function print(exam) {
        console.log(`kor:${exam.kor} eng:${exam.eng} math:${exam.math}`);// 첫번째 방법
        // let kor = exam.kor;
        // let eng = exam.eng;
        // let math = exam.math;
        let {kor, eng, math} = exam; //위의 식을 이렇게 표현가능
        console.log(`kor:${kor} eng:${eng} math:${math}`);// 조금더 바람직한 변수에 속성을 담고 출력하는 방법
    }
   //let {kor, eng} = exam; 의 더 쉬운 방법
    /* 
    function print({kor, eng}) {
        console.log(`kor:${kor} eng:${eng}`);
    }
    print(exam);
    */
// -----------------Object Distructuring#2--------------------------  
    // 객체의 값이 바뀌는경우
    let {kor, eng, math} = exam;
    exam.kor = 100;
    exam.eng = 90;
    console.log(`kor:${kor} eng:${eng} math:${math}`); //kor:20 eng:30 math:40
    // let에 선언된 지역변수의 값이 바뀌었을 뿐 바뀐 속성값을 가져오지 못한다.
    
    // let {kor, eng} = exam; Identifier 'kor' has already been declared 오류
    //{kor, eng} = exam; let을 빼고 대입해도 불가능
    // kor = exam.kor;
    // eng = exam.eng; 직접 대입하여 바꾸는방법
    ({kor, eng} = exam); //소괄호로 감싸면 가능해진다.
    console.log(`kor:${kor} eng:${eng} math:${math}`); //kor:100 eng:90 math:40

    //객체가 가지고있지 않은 속성에 값을 담을 수 있다.
    {
    // let {kor, eng, math, total} = exam;
    //console.log(`kor:${kor} eng:${eng} math:${math} total:${total}`); //kor:100 eng:90 math:40 total:undefined
    let {kor, eng, math, total=kor+eng+math} = exam;
    console.log(`kor:${kor} eng:${eng} math:${math} total:${total}`);
    console.log(exam);
    }
}
// -----------------Object Distructuring#3--------------------------
//별칭 사용
{
    let exam = {
        kor:20,
        eng:30,
        math:40
    };

    let {kor:korean, eng:english} = exam;
    console.log(`kor:${korean} eng:${english}`);

}
//객체가 중첩된 경우
{
    let exam = {
        kor:10,
        eng:20,
        math:30,
        student:{
            name:"newlec",
            phone:"010-2222-3333"
        }
    }

    let {kor, eng, student:{name, phone}} = exam;
    console.log(kor);
    console.log(eng);
    console.log(name);
    console.log(phone);

//함수 구현 방식
    let print = function({kor, eng, math}) {
        console.log(`kor:${kor} eng:${eng} math:${math}`);
    };
    print(exam);
}

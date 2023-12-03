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
// -----------------Array Distructuring#1--------------------------
{
let kors = [10,20,30];

let [kor1, kor2] = kors; //순서대로 들어감
console.log(kor1); //10
console.log(kor2); //20

//kor3변수만 사용하고싶다면?
let [, , kor3] = kors;
console.log(kor3); //30

// 다른 배열을 이용하고 싶을때
let temp = [40, 70, 50];
[kor1, kor2] = temp;
console.log(kor1, kor2); //70 70

//순서 재배열
let x=2;
let y=3;
let z=4;
[x, y] = [x, y];
console.log(x, y); //2 3
[x, y] = [y, z];
console.log(x, y); //3 4

}

// -----------------Array Distructuring#2(기본값, 중첩)--------------------------
{
    let kors = [10, 20, 30];
    // let [kor1, kor2, kor3, kor4] = kors;
    // console.log(kor4); //undefined 변수는 선언됨
    
    // 초기화하여 사용가능
    let [kor1, kor2, kor3, kor4=40] = kors; 
    console.log(kor4); //40

    //중첩된 것 뽑기
    let notice = {
        title:"공지사항",
        files:["img1.png", "img2.png"]
    };

    let {files:[frist]} = notice;
    console.log(frist); //img1.png

    let notices = {
        title:"공지사항",
        list:[
            {title:"1", content:"내용1"},
            {title:"2", content:"내용2"}
        ]
    }
    let {list:[ ,notice2]} = notices;
    console.log(notice2); //{title:"2", content:"내용2"}

    let test = [1, 2, {testTitle:1, testMemo:2}];
    let [num1, num2, {testTitle, testMemo}] = test;
    console.log(num1, num2, testTitle, testMemo);
}

// -----------------Set 컬렉션--------------------------
{
let set=new Set();
set.add(5);
set.add("5");
set.add(2);
set.add(5);
console.log(set.size); //3
}

{
//배열을 가지고 set을 만들 수 있다.(중복 값 제거로 요긴하게 쓰일수있다.)
let ar = [1,2,3,4,5,4,3,2,1];
let set =new Set(ar);
//값을 꺼내기위한 for of문 (for in은 키값을 꺼낸다면 for of는 값을꺼낸다.)
//for(let n of set) 값을 꺼낸다.
for(let [key, value] of set.entries()) { //.entries() 키와 값을 쌍으로 반환
    console.log(`key:${key}, value:${value}`);
    }
//forEach문으로 값꺼내기
set.forEach(function(value, key, ownerSet){//value:값, key:키, ownerSet:사용하고있는 set
    console.log(`key:${key}:`, value);  //key와 값이 똑같은것을 볼 수 있다.
});
/* 컬렉션에 뭐가 담겨있는지 물어볼수 있다.(true, false반환)
키와 값이 같기때문에 특정지어 꺼내는것은 의미가없다.*/
console.log(set.has(5));//ture
}

// -----------------Map 컬렉션--------------------------
{
    // let exam = new Map();
    // exam.set("kor", 10);
    // exam.set("eng", 10);
    // exam.set("math", 10);
    //위의 코드를 배열형태로 중첩하여 쓸수있다.
    let exam = new Map([[1,10],["eng",10],["math",10]]);
    /*for(let v of exam.values()) 값만 뽑아낼 수 있다.
    하지만 굳이 이렇게하지않고 밑의방식으로 꺼낸다음 사용할때 값만 사용해도 된다. */
    for(let [k,v] of exam) { //[k, y]배열형태로 꺼낸다.
        console.log(typeof k); //타입도 알아서 바뀐다.
        console.log(`${k}:${v}`);
    }
    console.log(exam.has(1,10));

}

// -----------------Rest Parameters--------------------------
{
function print(x, y, ...values) {
    console.log(`${x+y}`); // 3
    console.log("--------------------");
    for(let i=0; i<arguments.length; i++) {
        console.log(arguments[i]); // 1,2,3,4,5,6,7
    }
    console.log("--------------------");
    for(let i=0; i<values.length; i++) {
        console.log(values[i]); //2,3,4,5,6,7
    }
}
print(1,2,3,4,5,6,7);
}

// -----------------Sperad Operator--------------------------
{   
    let arry = [1, 2, 3];
    function print(x, y, z) { //매개변수에 배열을 전달하여
        console.log(x, y, z); //값을 출력하고싶다면?
    }
    print(...arry); //원래는 print(arry[0],arry[1],arry[2])로 해야하지만 ...arry를 쓰면된다.
    //...의 의미는 갖고있는 값을 낱개로 흩어서 전달하게 한다.
    //함수의 매개변수로 전달하는 목적뿐 아니라 값을 나열하고싶을때 쓸 수 있다.
    let set = new Set([2, 4, 6]);
    let nums = [...set]; //nums에 set의 값을 배열로담는다.
    console.log(nums); // [2, 4, 6]

    let map = new Map([[1,1],[2,2]]);
    let temp = [...map]; //temp에 map의 키와 값을 배열로담는다.
    console.log(temp); //[[1, 1], [2, 2]]
    console.log(temp[0][1]);
    console.log([...map][0][1]); //temp에 담지않고 이렇게 쓸 수 있다.
}

// -----------------Default Value--------------------------
{
    function add(x, y) {
        return x+y;
    }
    console.log(add(1)); //NaN

    console.log(0 || 2); //2
    //논리값이 아닌 값이 왔을 때 앞의값이 "",0,null,nan,undefined인경우 뒤의값을 반환한다.
    function add2(x, y) {
        x = x || 0; //유효하지않은 값이 오면 0으로 대체한다.
        y = y || 0;
        return x + y;
    }

    //지금은 기본값을 함수에 바로 초기화할 수있다.
    //기본값은 arguments 개수에 잡힐까? X
    function add3(x=0, y=0) {
        console.log("arguments:",arguments.length); //1
        return x + y;
    }
    console.log(add3(2));
}

// -----------------Arrow Functions--------------------------
{
    //일반함수
    // let print = function(message){
    //     console.log(message, "print");
    // }
    
    let print = (message) => {console.log(message, "print");}
    print("메세지");

    

    //객체정의함수(생성자함수)
    function Exam(name, age=null) {
        /*new 키워드를 사용하여 새로운 객체를 생성하면
        this는 새로운 객체를 가리키게 된다. */
        this.name = name;
        this.age = age;
        console.log(name);
    }
    let exam = new Exam("홍길동");
    console.log(exam);
}
{
    console.log("------------------");
    let nums = [13, 4, 6, 1, 3, 26];
    nums.sort();
    console.log(nums);

    function compare(x, y) {
        return x-y;
    }
    nums.sort(compare);
    console.log(nums);
    
    nums.sort((x,y)=> x-y);
    console.log(nums);
}
{
    /*
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    arr.sort(function(x, y) {
    console.log(`${x} - ${y} = ${x - y}`);
        return x - y;
    });

    console.log(arr);
    */
}

// -----------------Class--------------------------
{
    let proto = {kor:10, eng:30}; //객체를 하나 만듬

    function Exam(){ //생성자 함수
        //아무것도 정의하지 않음
    }
    Exam.prototype = proto; //prototype에 객체 대입
    let exam = new Exam(); //Exam 객체 생성 후
    console.log(exam.kor); //출력하면 10이 나온다
}
{
    class Exam{
        constructor(kor=0, eng=0, math=0){
            this.kor = kor;
            this.eng = eng;
            this. math = math;
        }
        total(){
            return this.kor+this.eng+this.math; //this필수
        }
        avg(){
            return this.total()/3.0;
        }
    }
    let exam = new Exam(10,20,30);
    console.log(exam.total());
    console.log(typeof Exam); //function

}

// -----------------은닉화--------------------------
{
    class Exam{
        //다른 언어에선 private kor;
        #kor; //클래스 안에서만 쓸수있고 선언하고 써야한다.
        #eng;
        #math;
        constructor(kor=0, eng=0, math=0){
            this.#kor = kor;
            this.#eng = eng;
            this.#math = math; //사용할때도 #을 붙여줘야한다.
        }
        #total(){ //선언영역에 있기때문에 #만 붙이면된다.
            return this.#kor+this.#eng+this.#math; //this필수
        }
        avg(){
            return this.#total()/3.0;
        }
    }
    let exam = new Exam(10,20,30);
    console.log(exam.avg()); //avg의 정상 작동으로 #kor와 #total이 사용 되고 있는것을 알수있다.
    console.log(exam.kor); //undefined 은닉화로 외부에서 접근불가
    // exam.kor = 40;
    /*#kor에 직접 접근한 것이 아니라, exam객체에 동적으로 새로운 kor속성을 추가한 것
    exam객체에서만 생성될 뿐 new Exam을 한 다른객체에는 영향을 미치지않는다.*/
}

// -----------------static 멤버 정의하기--------------------------
{
    class Exam{
        #kor;
        #eng;
        #math;
        // #info;
        //static변수 선언
        static #info = "나는 Exam 클래스"; //여기다 적어준다.
        constructor(kor=0, eng=0, math=0){
            this.#kor = kor;
            this.#eng = eng;
            this.#math = math;
            //Exam.#info = "나는 Exam 클래스"
            /* 생성자는 객체가 만들어질 때 생성되는것인데, 
            생성자 안에 있으면 new Exam할때마다 전역변수에 값을 3번 대입하는게 된다.*/
            
        }
        #total(){ 
            return this.#kor+this.#eng+this.#math;
        }
        avg(){
            return this.#total()/3.0;
        }
        // info(){
        //     return this.#info;
        // }
        static info() {
            return Exam.#info;
        }
    }
    let exam1 = new Exam(10,20,30);
    let exam2 = new Exam(1,20,30);
    let exam3 = new Exam(10,2,30);
    
    //객체를 만들지 않고 사용할 수 있다
    console.log(Exam.info());
}

// -----------------은닉화를 위한 getters/setters지원--------------------------
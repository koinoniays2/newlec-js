//stack=LIFO(Last in First Out)
class Stack {
    constructor(){
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }
    pop(index) {
        if(index==this.arr.length-1) { //index가 마지막 번째일때
            return this.arr.pop();     //일반적인 pop 기능 수행
        }/* 그렇지않다면 index의 값을 꺼내준다. */
        let result = this.arr.splice(index, 1);
        return result;
    }
    empty() {
        if(this.arr.length == 0) { //비어있으면 true, 아니면 false
            return true;
        }else {
            return false;
        }
    }
    top() { //가장 위에 있는 값=마지막에 넣은 값
        return this.arr[this.arr.length - 1];
    }
    bottom() { //가장 밑에있는 값=처음에 넣은 값(0번쩨 index의 값)
        return this.arr[0];
    }

}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

let popValue = s.pop(2); //2번째 인덱스에 저장되어있는 값을 꺼낸다.
console.log(s); //[10, 20, 100, 200, 300]
console.log(popValue); //반환값 [30]
console.log(s.top()); //300
console.log(s.bottom()); //10

//queue=FIFO(First In First Out)
class Queue {
    constructor() {
        this.arr=[];
    }

    push(data){
        this.arr.push(data);
    }
    pop(){
        return this.arr.shift(); 
        //shift:배열의 첫 번째 요소를 제거하고 해당 요소를 반환
    }
}

let q = new Queue();
q.push(1);
q.push(2);
q.push(3);
console.log(q);
let resut = q.pop();
console.log(resut); //1
console.log(q); //[2,3]


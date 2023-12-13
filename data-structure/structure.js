//-------------------------------------------------Stack=LIFO(Last in First Out)
class Stack {
    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }
    pop(index) {
        if (index == this.arr.length - 1) { //index가 마지막 번째일때
            return this.arr.pop();     //일반적인 pop 기능 수행
        }/* 그렇지않다면 index의 값을 꺼내준다. */
        let result = this.arr.splice(index, 1);
        return result;
    }
    empty() {
        if (this.arr.length == 0) { //비어있으면 true, 아니면 false
            return true;
        } else {
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

//-------------------------------------------------Queue=FIFO(First In First Out)
class Queue {
    constructor() {
        this.store = {};
        this.front = 0; // 첫 번째 데이터를 가리키는 포인터
        this.rear = 0; // 마지막 데이터를 가리키는 포인터
    }
    size() {
        if (this.store[this.rear] === undefined) {
            return 0;
        } else {
            return this.rear - this.front + 1;
        }
    }
    push(value) {
        // 큐에 데이터가 존재하지 않을 경우
        if (this.size() === 0) {
            this.store['0'] = value;
            // 큐에 데이터가 존재할 경우
        } else {
            this.rear += 1;
            this.store[this.rear] = value;
        }
    }
    popleft() {
        let temp;
        // 큐에 데이터가 1개 존재하거나 데이터가 없는 경우
        if (this.front === this.rear) {
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front = 0; // 초기화 이유
            this.rear = 0;  // pop 후에도 front, rear의 값이 남아있음
            return temp;
            // 그 외의 경우
        } else {
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front += 1;
            return temp;
        }
    }
}
let q = new Queue();
q.push(10);
q.push(20);
q.push(30);
q.push(40);
q.popleft();
for (let i in q.store) {
    for (let i in q.store) {
        console.log(q.store[i]);
    }
}


//-------------------------------------------------Map
let map = new Map();
// map.set("과일", []);
// map.get('과일').push(["banana"]);
// map.get('과일').push(["apple"]);

// map.set("과일", {"빨간색": []});
// map.get("과일")["빨간색"].push("apple");
// map.get("과일")["빨간색"].push("strawberry");
// map.get("과일")["빨간색"].push("cherry");
// console.log(map);

map.set("key", "value");
console.log(map);


//-------------------------------------------------Array Destructuring
{let line = "1 2";
const [a, b] = line.split(' ');
console.log(a, b);

//문자열 -> 배열
let str = "aaaaa"
let arr = [...str];
console.log(arr); // ['a', 'a', 'a', 'a', 'a']

//배열 -> 문자열
let arr2 = ['a', 'a', 'a', 'a', 'a'];
console.log(...arr2); // aaaaa

//배열 -> 문자열
let [c, d, e, f, g] = arr2;
console.log(c, d, e, f, g); // aaaaa
}

//-------------------------------------------------join
const arr = ['딸기', '바나나', '사과'];
console.log(arr);
console.log(arr.join()); // 딸기,바나나,사과
console.log(arr.join('')); // 딸기바나나사과
console.log(arr.join('-')); // 딸기-바나나-사과
//Ex1 : 계산기 프로그램
window.addEventListener("load", function(){
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtResult = document.getElementById("txt-result");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtResult.value = x+y;
    };

    //연습 뺄셈 구현
    var txtX2 = document.getElementById("txt-x2");
    var txtY2 = document.getElementById("txt-y2");
    var btnMinus = document.getElementById("btn-minus");
    var txtResult2 = document.getElementById("txt-result2");

    btnMinus.onclick = function() {
        var x2 = parseInt(txtX2.value);
        var y2 = parseInt(txtY2.value);

        txtResult2.value = x2 - y2;

    }

});

//Ex2 : 엘리먼트 선택 개선하기
window.addEventListener("load", function(){
    var section2 = document.getElementById("section2");
    //태그명으로 찾기
    //var inputs = section2.getElementsByTagName("input");

    /*
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtResult = inputs[3];
    */

    //태그명으로 찾는 방법이 아닌 클래스명으로 노드 찾기
    //다른곳은 뒤지지 않고 section2의 범주 내에서만 찾는다.
    //배열이기때문에 [0]을 붙여주어야한다.
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtResult = section2.getElementsByClassName("txt-result")[0];
    
    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtResult.value = x+y;
    };

    //연습 뺄셈 구현
    var txtX2 = section2.getElementsByClassName("txt-x2")[0];
    var txtY2 = section2.getElementsByClassName("txt-y2")[0];
    var btnMinus = section2.getElementsByClassName("btn-minus")[0];
    var txtResult2 = section2.getElementsByClassName("txt-result2")[0];

    btnMinus.onclick = function() {
        var x2 = parseInt(txtX2.value);
        var y2 = parseInt(txtY2.value);

        txtResult2.value = x2 - y2;

    }
});

//Ex3 : Selectors API Level1를 통한 노드검색
window.addEventListener("load", function(){
    var section3 = document.getElementById("section3");
    // css의 셀릭터로 찾을 수 있다.
    var txtX = section3.querySelector("input[name='x']");
    /* querySelector가 용이한이유 :태그가 가지고있는 다양한 속성들을 이용해서
    선택가능하다. css의 셀렉터의 표현방법이 풍부하고 정밀하기때문에
    그것을 이용해서 검색을 할 수 있다는건 id, class로 검색하는것과는 차원이다르다.
    원하는 셀렉터를 다 쓸 수 있다. */
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtResult = section3.querySelector(".txt-result");
    
    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtResult.value = x+y;
    };

});

//Ex4 : childeNodes를 이용한 노드선택
window.addEventListener("load", function(){
    var section4 = document.querySelector("#section4");
    //var inputs = section.querySelectorAll("input"); 
    //input이 배열로전달된다. 이런방법도 있지만 

    //계보를 이용한 방법
    var box = section4.querySelector(".box");
    //var input1 = box.childNodes[0]; //childNodes=자식들을 찾는다.
    //var input2 = box.childNodes[1];
    /* 이렇게하면 0번째 input의 value가 okay가 되고 
    2번째 input value는 나오지않는다.(에러도 없음)
    input이 
    html파일의 <div>와 <input/> 2개를 나란히 붙이면 제대로 나온다.
    childNodes는 자식을 찾는것이 맞지만 [0]번째가 input일수도있고 아닐수도 있다.
    그 이유는? 노드에 개념을 이해할 필요가 있다.
    자식들 중에는 #comment노드와 #text노드가있는데 이것도 모두 자식으로친다.
    그렇기때문에 내려쓰기했을 때 생긴 화이트스페이스도 노드로 친다.
    그래서 붙여쓰게되면 제대로나온다. 그래서 등장한 속성children
    childNoses는 태그형태의 노드와 주석,태그 등 모든것을 자식으로 뽑고
    children은 태그형태들만 자식으로 취급한다.*/
    var input1 = box.children[0]; 
    var input2 = box.children[1]; 

    input1.value = "hello";
    input2.value  = "okay";
});

//Ex5 : 엘리먼트 노드의 속성(이미지) & CSS속성 변경
window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var srcInput = section.querySelector(".src-input");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var imgSelect = section.querySelector(".img-select");
    var colorInput = section.querySelector(".color-input");

    changeButton.onclick = function() {
        img.src = "images/"+srcInput.value;

        /*
        select
        img.src = "images/"+imgSelect.value
        */
       
        // img.style.border-color 대시사용 불가 오류
        // img.style["border-color"] = colorInput.value;//키값으로 전달
        img.style.borderColor = colorInput.value;
        // 자바스크립트에서는 속성을 카멜표기로 바꿔준 css스타일 속성을 제공해준다. 
        console.log(img.className); //클래스 이름을 볼때 그냥 class라고하면 안됨.(예약어기때문)
    };
});

//Ex6 : 노드조작(div에 text노드 추가)
window.addEventListener("load", function(){
    var section = document.querySelector("#section6");
    var titleInput = section.querySelector(".title-input");
    var meunList = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function(){
        var title = titleInput.value; // 사용자 입력값 담기
        var txtNode = document.createTextNode(title); // 1.입력값을 텍스트노드로 만들기
        meunList.appendChild(txtNode); // 2.만들어진 텍스트노드를 div의 자식으로 추가하기
    };

    //노드 삭제
    delButton.onclick = function(){
        var txtNode = meunList.childNodes[0]; //노드의 위치를 찾는다.
        meunList.removeChild(txtNode);
        //div밑에있는 자식을 0번째부터 삭제 맨처음 삭제되는것은 빈공백이다.
    };
});

//Ex7 : 리스트 추가 삭제
window.addEventListener("load", function(){
    var section = document.querySelector("#section7");
    var addList = section.querySelector(".add-list");
    var delList = section.querySelector(".del-list");
    var menuList = section.querySelector(".menu-list");
    var titleInput = section.querySelector(".title-input2");

    addList.onclick = function(){
        var title = titleInput.value; //input에 입력된 값을 저장
        /*
        menuList.innerHTML += `<li><a href="">${title}</a></li>`; //ul에 innerHTML으로 노드추가
        =을하면 대입되는 것이기때문에 추가하게되면 있던내용이 사라짐
        +=을 하면 누적은 되지만 계속해서 더 커진 문자열이 만들어지기때문에 수행성능에 문제가 생김
        +=는 결국 y += "ㅋ"일때  
        y = y + "ㅋ"
        y = "ㅋ" + "ㅋ"
        y = "ㅋ" + "ㅋ" + "ㅋ"이기 때문에 추가가 아닌 누적의 개념이다.
        (추가 개념이 아니라 건물을 허물고 새로 계속짓는것과 같다.)
        그래서 밑의 방법1 처럼 하는것이 더 나을수도있다.
        */

        // 대안
        var liNode = document.createElement("li"); //li노드를 만든다.
        var aTag = `<a href="">${title}</a>`; //li태그 안에 들어갈 a태그와 title내용
        liNode.innerHTML = aTag;    //li노드에 a태그 추가
        menuList.appendChild(liNode); //ul의 자식으로 li노드 추가
        
        // append의 기능
        /*menuList.append(title);
        텍스트를 자식으로 추가할 때 텍스트노드를 만들고 document.createTextNode(title); 넣어야했다.
        그냥 menuList.appendChild(title); 하게되면 문자열을 넣는것인데, 오류가난다.
        이것을 해결하기 위한 기능이 추가됐다. ->append 가변길이의 매개변수를 넣을 수 있다.
        menuList.append(node1, node2, nod3); String도 넣을 수 있기때문에
        menuList.append(title); title 텍스트노드로 만들지않고 바로 넣을 수 있다.
        */

        /* 방법1.
        원래는 이렇게 순차적으로 해야하지만 innerHTML로 한번에 할 수 있다.
        var title = titleInput.value; //input에 입력된 값
        var txtNode = document.createTextNode(title); // 텍스트노드 생성
        var aNode = document.createElement("a"); // a노드 생성
        aNode.href=""; //a태그 속성 추가
        aNode.appendChild(txtNode); //a노드의 자식으로 텍스트노드 추가
        var liNode = document.createElement("li"); // li노드 생성
        liNode.appendChild(aNode); //li노드의 자식으로 a노드 추가

        menuList.appendChild(liNode);* //ul태그의 자식으로 li노드 추가
        */
    }

    delList.onclick = function(){
        var liNode = menuList.children[0];
        //menuList.removeChild(liNode); 부모를 통해 자식을 지우는 것이아닌
        liNode.remove(); // 이것도 가능하다.
    }
});
// Ex8 : 노드 복제 및 템플릿 복제
window.addEventListener("load", function(){
    var notices = [
        {id:2, title:"테스트", regDate:"2023-11-19", writerId:"newlec", hit:"5"},
        {id:3, title:"테스트2", regDate:"2023-11-19", writerId:"newlec", hit:"6"}
    ];
    var section = document.querySelector("#section8");
    var noticeList = section.querySelector(".notice-list")
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    //노드 복제(기존 레코드 데이터가 있을때)
    cloneButton.onclick = function() {
        // 클론하고싶은 것의 노드를 만든다.
        var trNode = noticeList.querySelector("tbody tr");
        /*
        table안에 있는 tbody의 자식인 tr을 셀렉터로 뽑아온다.
        querySelectorAll이 아니기때문에 tbody안의 tr중에 첫번째것 하나만을 가지고온다.
        */
        var cloneNode = trNode.cloneNode(true); 
        /*
        cloneNode 함수로 클론노드를 만든다. 인자는 boolean형인데
        false=껍데기만 복제, true=자손들까지 복제한다.
        */
       //tbodyNode.appendChild(cloneNode); //클론한 것을 tbody의 자식으로 추가하기

       // notices의 내용 삽입
       var tds = cloneNode.querySelectorAll("td"); 
       //클론노드에서 td부분만 All로 가져와서 순서대로 넣는다.
       tds[0].textContent = notices[0].id;
       tds[1].innerHTML = `<a href="">${notices[0].title}</a>`; 
       //a태그를 자식으로 갖고있어야하기 때문에 innerHTML을 쓴다.
       tds[2].textContent = notices[0].regDate;
       tds[3].textContent = notices[0].writerId;
       tds[4].textContent = notices[0].hit;

       tbodyNode.appendChild(cloneNode);


    };
    /* 만약 레코드 데이터가 하나도 없을 경우 복제할 수가 없다.
    이런 상황을 위해 템플릿을 이용한다.*/
    templateButton.onclick = function() {
        var template = section.querySelector("template");
        var cloneNode = document.importNode(template.content, true);
        //템플릿 복제 document의 기능 importNode(복제할템플릿.컨텐트 를얻어옴, 자손들까지얻어옴)
        var tds = cloneNode.querySelectorAll("td"); 
        tds[0].textContent = notices[0].id;
        // tds[1].innerHTML = `<a href="">${notices[0].title}</a>`;
        //innerHTML이 비효율적이라면 이렇게도 사용가능
        var aNode = tds[1].children[0]; //template에 a태그가 이미 있으니 1번째 td의 a태그를 노드로만든다.
        aNode.href=notices[0].id; //a태그의 속성 href에 id값을 넣고
        aNode.textContent = notices[0].title; //a태그 안의 txtContent에 title을 넣는다.

        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;

        tbodyNode.appendChild(cloneNode);
    };

});

//Ex9 : 노드 삽입과 바꾸기
window.addEventListener("load", function(){
    var section = document.querySelector("#section9");

    var noticeList =section.querySelector(".notice-list"); 
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild;//.children[0];
    /*이웃한 tr과 자리가 바뀔 노드를 정한다.currentNode
    부모,자식,형제에 접근할 수 있게 순회와 관련된 노드firstElementChild
    모든 노드는 firstChild
    */

    downButton.onclick = function(){
        var nextNode = currentNode.nextElementSibling;
        // currentNote의 다음노드를 받아온다.
        if(nextNode == null) { //다음 노드가 있는지 없는지 확인
            alert("더 이상 이동할 수 없습니다.");
            return;
        }

        /*화면에서 detach 메모리에서 해제되는 것은 아니고 참조변수가 남아있기 때문에
        사라지는 것은 아니다. (참조가 사라지면 수거되는데 아직은 사라지지않는다.
        수거되기 전에 다시 넣으면 된다.*/
        //insert Before를 이용한 방법
        //tbodyNode.removeChild(nextNode); //다음 노드를 빼서 앞에넣기위해 삭제.
        //tbodyNode.insertBefore(nextNode, currentNode);
        //사실 remove하지 않고 insert만 해도 된다.
        /*append는 맨뒤의 막내로 넣는것이고
        타겟을하여 앞에 놓는경우 insert insertBefore(삽입할노드,기준이되는노드);
        기준이 되는 노드의 앞에 넣는다.
        */
       
        // 현재 선택된 노드의 입장에서 다음 노드에게 내 앞으로 오라고 하는것
        currentNode.insertAdjacentElement("beforebegin", nextNode);

    };

    upButton.onclick = function(){
        var prevNode = currentNode.previousElementSibling;
        if(prevNode == null) {
            alert("더 이상 이동할 수 없습니다.");
            return;
        }
        //tbodyNode.removeChild(currentNode);
        //tbodyNode.insertBefore(currentNode, prevNode);
        currentNode.insertAdjacentElement("afterend", prevNode);

    };

});

//Ex10-다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기
window.addEventListener("load", function(){
    var section = document.querySelector("#section10");

    var noticeList =section.querySelector(".notice-list"); 
    var tbody = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function(){  
        var inputs = tbody.querySelectorAll("input[type='checkbox']");
        for(var i=0; i<inputs.length; i++)
            inputs[i].checked = allCheckbox.checked;
    };

    delButton.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        for(var i=0; i<inputs.length; i++)
            inputs[i].parentElement.parentElement.remove();
        //tr자체가 삭제되어야하기 때문에 parentElement.parentElement
        
    };

    swapButton.onclick = function(){
        // 선택된 박스
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        if(inputs.length != 2) {
            alert("2개만 선택하세요.");
            return;
        }
        // 바꾸고자 하는 tr을 배열에 넣는다.(선택된 2개의 노드)
        var trs = [];
        for(var i=0; i<inputs.length; i++)
            trs.push(inputs[i].parentElement.parentElement);
        /* 
        replaceChild - 객체로 존재하지만 화면에 출력되지 않는것을
        tr을갖고있는 tbody입장에서바꾸겠다라는 뜻.
        replaceWith - tr자체가 바꿔달라는 뜻
        */

        var clone = trs[0].cloneNode(true); //0번째 tr의 복사본을 만든다.
        trs[1].replaceWith(clone); //clone된 것을 넣고 1번째 trs가 빠진다.
        trs[0].replaceWith(trs[1]); //0번째tr(원본)이 있던 위치에 1번째tr이 간다.
    };

});

//Ex11-클릭한 컬럼을 기준으로 레코드 정렬하기 #1
window.addEventListener("load", function(){

    //서버(ajax)로 데이터를 가지고 왔다고 가정
    var notices = [
        {"id":1, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
        {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
        {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
        {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
    ];

    var section = document.querySelector("#section11");

    var noticeList =section.querySelector(".notice-list");
    var titldTd = section.querySelector(".title");
    var tbodyNode = noticeList.querySelector("tbody");

    var bindData = function(){
        // 서버에서 가져온 데이터를 템플릿에 넣어서 바인딩하기 위해
        // 템플릿복제 설명-Ex8 : 노드 복제 및 템플릿 복제 참고
        var template = section.querySelector("template");

        for(var i=0; i<notices.length; i++){
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            
            tds[0].textContent = notices[i].id;            

            var aNode = tds[1].children[0];
            aNode.href=notices[i].id;
            aNode.textContent = notices[i].title;

            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;

            tbodyNode.appendChild(cloneNode);
        }
    };

    bindData(); // 데이터를 넣기위해 함수 호출

    var titleSorted = false; // sort가 됐는지 확인(처음엔 false)
    titldTd.onclick = function(){
    
    tbodyNode.innerHTML ="";// 전에 있던 내용은 워지고 정렬된 것으로 새로 넣는것이기 때문에 기존의 내용은 삭제

   if(!titleSorted){// 1. 첫번째 클릭에서는 titleSorted가 false니까 실행
        notices.sort(function(a,b){
            titleSorted = true; //2. 정렬 후 true로 바뀜
            if(a.title < b.title)// 타이틀로 비교(기준점 정해주기)
                return -1;
            else if(a.title > b.title)
                return 1;
            else
                return 0;
        });
    }else {//3.true로 바뀐 후에는 계속해서 reverse()만 실행된다.
        notices.reverse();//현재 상태에서 뒤집기
}
    bindData(); //정렬된 notices로 재호출

    };
});

//Ex1-선택된 이미지 보여주기:event target
window.addEventListener("load", function(){
    var section = document.querySelector("#section1");
    
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    imgs[0].onclick = function(e){
    //이벤트와 관련된 정보가 필요하기 때문에 파라미터를 e로 받는다.
    // console.log(e.target.nodeName); //img이기때문에 src속성 사용가능.
      currentImg.src = e.target.src;
    }
    imgs[1].onclick = function(e){
    //이벤트와 관련된 정보가 필요하기 때문에 파라미터를 e로 받는다.
      currentImg.src = e.target.src;
    }
    imgs[2].onclick = function(e){
    //이벤트와 관련된 정보가 필요하기 때문에 파라미터를 e로 받는다.
      currentImg.src = e.target.src;
    }

    /* 위의 코드를 for문으로 반복하면 안되는 이유(작동은 된다.)
    똑같은 구문에 해당되는 function을 반복 횟수만큼 만들게 되는것이다.
    메모리를 많이 먹고 코드의 복잡도가 높아진다.
    =>이벤트 버블링시스템을 이용한다.(이벤트의 반복을 줄여서 작성할 수 있다.)
    for(let i=0; i<imgs.length; i++){
      imgs[i].onclick = function(e){
          currentImg.src = e.target.src;
        }
    }
    */
    
}); 

//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function(){
    var section = document.querySelector("#section2");
    var delButtons = section.querySelectorAll(".del-button");
    var buttonList = section.querySelector(".button-list");
    console.log(delButtons);
    
    // for(var i=0; i<delButtons.length; i++) {
    //   delButtons[i].onclick = function(e){
    //     console.log(e.target.nodeName);
    //     e.target.parentElement.parentElement.remove();
    //   }
    // }
    buttonList.onclick = function(e){
      console.log(e.target.nodeName);
      if(e.target.nodeName != "INPUT") {return;};

      e.target.parentElement.parentElement.remove();
    }

  }); 


//Ex 3-버블링을 이용한 사용자 이벤트 처리하기 
window.addEventListener("load", function(){
  var section = document.querySelector("#section3");
  
  //var imgs = section.querySelectorAll(".img");
  //1.imas를 각각 얻어오는 방법이 아닌 img를 감싸고 있는 div를 가지고온다.
  var imgList = document.querySelector(".img-list");
  var currentImg = section.querySelector(".current-img");

  /*2.imgList로 onclick 함수를 만든다.
  이미지 클릭시 console.log("test")가 정상 실행되는 것을 볼 수 있다.
  버블링으로 인해 imgList에 이벤트를 달아놓으면 img에 발생할 것들을 대신 처리할 수 있다.
  반복적으로 이벤트 함수를 대입할 필요 없이 한 부모에게만 부모가 처리할 수 있기때문에 깔끔하다.*/
  /*3. 문제점 img가 아닌 imgList의 영역이 클릭되어도 이벤트가 실행된다, 
  부모영역에 이벤트를 설정했을 경우 부모영역을 클릭했을땐 실행하지 말고
  이미지를 클릭했을 때만 반응하게 해달라고하는 제약사항이 있어야한다.*/
  imgList.onclick = function(e){
    // console.log("test");
    //현재 이벤트가 발생한 target이 img가 될수도있고 div(imgList)가 될수도있다.
    console.log(e.target.nodeName); //4.이미지 클릭시 img, 빈공간 클릭시 div가 나오기때문에 조건절을 준다.
    if(e.target.nodeName != "IMG") {return;}
    currentImg.src = e.target.src;
  }
  // for(let i=0; i<imgs.length; i++) {
  //   imgs[i].onclick = function(){
  //     currentImg.src = e.target.src;
  //   }
  // }
  /* 반복될 때 마다 function객체를 만드는것이 비효율적이고
  버튼의 수만큼 반복문을 돌리면서 이벤트를 할당하는 것 자체도 비효율적이다.
  어떻게 효율적이게 만들 수 있을까? */
  
}); 

//Ex 4-이벤트 버블링 멈추기
  window.addEventListener("load", function(){
  var section = document.querySelector("#section4");
  var imgList = section.querySelector(".img-list");
  var currentImg = section.querySelector(".current-img");
  var addButton = section.querySelector(".add-button");

  imgList.onclick = function(e){
    console.log("imgList.onclik");
    if(e.target.nodeName != "IMG") {return;}
    currentImg.src = e.target.src;
  }


  addButton.onclick = function(e){
    e.stopPropagation(); 
    /* 이벤트 전파를 막아주는것(부모로 버블링 되는것을 막아줌)
    로직상 문제가 없더라도 자식 중 자기만의 기능을 가지고있을 경우 막아주어야한다.*/
    console.log("addButton.onclik"); 
    /* addButton.onclik를 실행하면 부모(img-list)에있는 imgList.onclik까지 실행되는 것을 볼수있다.
    자식은 부모에게 어떤 이벤트가 실행됐는지 전달해주기때문이다.
    imgList.onclick에 조건처리를 해줬기 때문에 문제가 안생긴것 */
    var img = document.createElement("img"); //이미지 추가를 위한 노드 만들기
    img.src="images/logo.png";
    currentImg.insertAdjacentElement("afterend", img);
  }
});   

//Ex 5-서로 다른 기능의 여러 버튼을 가진 화면에서 이벤트를 처리하는 방법과 엘리먼트 노드의 기본행위 막기
window.addEventListener("load", function(){
  var section = this.document.querySelector("#section5");
  var tbody = section.querySelector(".notice-list tbody");
  
  tbody.onclick = function(e){
    e.preventDefault(); 
    /* preventDefault메소드를 쓰면 클릭 이벤트가 어디서 발생했든
    그것을 타고오는 버블링과정에서 일어나고있는 어떠한것도 기본행위를 갖지않도록 하겠다라는 뜻*/

    var target = e.target;
    // if(target.nodeName !== "INPUT")
    if(target.nodeName !== "A") 
    /* 버튼태그가 아닌 a태그를 사용했을 때
    a태그의 기본행위인 페이지를 로드하는 기능으로인해 
    클릭 후 페이지가 다시요청되기 때문에 백그라운드 컬러가 나타났다 사라진다.
    이럴때 기본행위를 막아줘야한다.*/
      return;

    /*보통 html의 class이름은 스타일을 주기위해 단독이름이 아닌
    class="button sel sel-button" 이런식으로 목록화 된 경우가 많다.
    그렇기 때문에 target.className="button sel sel-button"통째로 비교해야하고
    누군가가 클래스이름을 더 추가한다면 비교가안될것이다.
    그래서 className이 갖고있는 이름이 위처럼 목록이라면
    target.classList.contains("sel-button")를 이용해서
    목록에 있는 것들 중, 지정한 이름이 포함되어있는 지 알아볼수있다.
    */
    if(target.classList.contains("sel-button")) {
      /* input sel-button에 선택 된 tr에 backgrond색을 지정하기 위해 타겟을
      var tr = target.parentElement.parentElement; 이렇게정한다면?
      input위에 새로운 부모가 생겨 구조가 달라지면 위험해진다.*/
      var tr = target.parentElement; //부모가 tr인지 먼저 물어본다.
      console.log(tr);
      for(tr; tr.nodeName !="TR"; tr=tr.parentElement); //TR이 아니면 tr=tr.parentElement; 위로 올라가서 찾는다.
      console.log(tr);
      tr.style.background = "yellow";
    }else if(target.classList.contains("edit-button")){

    }else if(target.classList.contains("del-button")){

    }

  }

});

//Ex 6-이벤트 트리거
window.addEventListener("load", function(){
  var section = document.querySelector("#section6");
  var fileButton = section.querySelector(".file-button");
  var fileTriggerButton =section.querySelector(".file-trigger-button");

  //트리거 하는 방법
  fileTriggerButton.onclick = function(){
    var event = new MouseEvent("click", {
    // dispat하기 위한 이벤트 준비 클릭이벤트는 마우스 이벤트이기때문에 마우스이벤트 객체생성
      'view':window,
      'bubbles':true,
      'cancelable':true
    /* click을 전달하기위해 ("click", {}) 을 하고 
    {}안에는 기본적인 속성을 전달해야하기 때문에 위의 내용을 적어준다.*/
    });
    fileButton.dispatchEvent(event); //event를 보낸다.
  }

});
// Ex 7-마우스 이벤트 객체: 클릭 위치에 박스 옮기기(마우스 좌표)
window.addEventListener("load", function(){
  var section = document.querySelector("#section7");
  var container = section.querySelector(".container");
  var box = section.querySelector(".box");

  container.onclick = function(e){
    /* 클릭하면 클릭 된 위치의 좌표를 얻어야한다.
    container를onclick하게되면 전달된 이벤트객체(e)를 통해 좌표를 얻을 수 있다.
    e.x, e.y / e.offsetX, e.offsetY / e.clientX, e.pageX.... */
    console.log(`x,y : (${e.x},${e.y})`);
    console.log(`client x,y : (${e.clientX},${e.clientY})`);
    console.log(`page x,y : (${e.pageX},${e.pageY})`);
    console.log(`offset x,y : (${e.offsetX},${e.offsetY})`);
    /* box.style.left = e.x;
    box.style.top = e.y;
    박스의 위치가 변경되려면 position방식이 정해져있지 않으면(static이면) 안된다.
    */
    /* box.style.position = "absolute";
    box.style.left = e.x;
    box.style.top = e.y;
    단위를 써주지않았기 때문에 또 안된다.
    */
    /*
    box.style.position = "absolute";
    box.style.left = e.x + "px";
    box.style.top = e.y + "px";
    스크롤바에 따라 박스의 위치가 달라진다.
    */
    box.style.position = "absolute";
    box.style.left = e.pageX + "px";
    box.style.top = e.pageY + "px";
  };

});

//Ex 8-마우스 이벤트 객체: 드래그 방식으로 박스 옮기기
window.addEventListener("load", function(){
  var section = document.querySelector("#section8");
  var container = section.querySelector(".container");
  var box = section.querySelector(".box");
  //움직일때마다 따라다니는 것이 아니라 마우스를 눌러서 드래그 하는 동안만 움직여야한다.
  //마우스가 down됐을때 움직이면 드래그 / 떼면(up) 드래그가 아닌상태
  var dragging = false;
  container.onmousedown = function(e){
    if(e.target === box) 
    /* 이 조건식이 없으면 box를 선택하여 드래그 하는것이 아닌
    container의 아무곳이나 드래그해도 box가 따라온다 */
      dragging = true;
      // offset.x = e.offsetX; box.onmousedown을 여기 옮겨도 작동된다.
      // offset.y = e.offsetY;
  };
  container.onmouseup = function(e){
    dragging = false;
  };
  //onmousemove 마우스가 움직일때마다 따라다님
  container.onmousemove = function(e){
    // box.style.position = "absolute"; css로 이동
    if(!dragging) //드래그가 아닌 상태면 건너뛴다.
      return;
    box.style.left = e.pageX-offset.x + "px";
    box.style.top = e.pageY-offset.y + "px";
  };

  /* 이걸 안하면 box에서 onmousedown (마우스가 눌리면)
  박스가 마우스를 클릭한 위치(pageX,pageY)으로 가게된다.
  e.pageX-offset.x를 해줘서 박스의 위치를 고정해주면
  box의 위치가 고정이 된다.
  */
  var offset = {x:0, y:0}; //offset의 위치를 받기 위한 object생성
    box.onmousedown = function(e){
      offset.x = e.offsetX; //box위에서 마우스가 클릭됐을 때 box안에서의 위치를 나타낸다.
      offset.y = e.offsetY;
  }

});

//Ex 9-마우스 이벤트 객체: 드래그 방식으로 박스 여러개 옮기기
window.addEventListener("load", function(){
  var section = document.querySelector("#section9");
  var container = section.querySelector(".container");
  var box = section.querySelector(".box");
  
  var dragging = false;
  var offset = {x:0, y:0};
  var current = null;

  container.onmousedown = function(e){
    if(e.target.classList.contains("box")){ //클릭된 것이 box라는 명칭이 포함된 노드인지
      /* if(e.target === box)라고 하게되면,
      겹쳐진 박스중 첫번째것을 target하는데 겹쳐져서 가려져있기때문에 target이 안된다.*/
      dragging = true;
      current = e.target; //클릭된 것을 현재 선택한 것으로 만든다.
      offset.x = e.offsetX; //offset값도 여기서 구한다.
      offset.y = e.offsetY;
    }
  };
  
  container.onmousemove = function(e){
    if(!dragging) return;

  current.style.left = e.pageX-offset.x + "px"; //이동할 대상이 box가 아니라
  current.style.top = e.pageY-offset.y + "px";  //현재 선택된 current가 되는것이다.
  };

  container.onmouseup = function(e){
    dragging = false;
  };
  
});


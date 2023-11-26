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
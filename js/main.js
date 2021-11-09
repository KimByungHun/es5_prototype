/*
    this 값이 위치해 있는 공간에 따라서 해당 값이 지칭하는 바가 달리짐
    1. 이벤트 구문안쪽에 this-->이벤트가 발생한 대상
    2. each문 안쪽의 this --> 반복돌고 있는 대상을 지칭
    3. ajax문 안쪽의 this --> 비동기서버통신으로 반환된 data값 지칭
        
        위의 문제를 해결하기 위해서 함수 안쪽에 있는 this값을 우리가 원하는 값으로 고정할수 있음
        .bind()
*/
//파라미터로 선택자 문자열을 받고
function Box(el){

    //해당 문자열로 제이쿼리 선택자로 감싸고 DOM을 선택한다음
    //해당 DOM요소를 앞으로 복사가될 복사본 인스턴스에 selector라는 키값에 담아서 전달
    this.selector = $(el);
    console.log(this);

    //복사가된 인스턴스 안에 있는 선택자에 직접 이벤트를 연결
    this.selector.on("click",function(){
        console.log("you clicked");
        this.changeBg();
    }.bind(this));// 이벤트문 밖에서 .bind(this)로 안쪽의 this값을 인스턴스로 고정
}

Box.prototype.changeBg = function(){
    this.selector.css({backgroundColor : "blue"});
}

//생성자함수로 부터 box1이라는 인스턴스 복사
//간단하게 이느턴스를 복사하기만 하면 변수와 이벤트를 한번에 연결가능
var box1 = new Box(".box1");
var box2 = new Box(".box2");
var box3 = new Box(".box3");

/*
절차지향형 코드
$(".box1").on("click",function(){
    $(".box1").css({backgroundColor:"pink"});
});

$(".box2").on("click",function(){
    $(".box2").css({backgroundColor:"orange"});
});

$(".box3").on("click",function(){
    $(".box3").css({backgroundColor:"blue"});
});

*/

/*
    절차지향코드의 불편한점
    - 여러개의 기능을 만들때 반복적으로 실행되는 공통의 기능들까지 일일이 코드를 생성/입력해야함. 비효율적.
    
    --> 이벤트+함수 형태로(반복되는 공통의 기능을 함수로 패키징해서 호출하는 형식으로 재활용)

    이밴트+함수형태
    - 공통적인 기능자체는 함수라는 걸 이용해서 재사용이 가능하지만 문제는 전역변수에 저장되는 선택자와 해당 선택자를 불러와서 연결하는 이벤트 구문은 필연적으로 계속 반복적인 코드를 입력해야함.

    객체지향
    - 선택자와 이벤트를 통채로 함수와 같이 기능단위로 패키징을 함

    객체지향의 기본 개념
    -- 자주 사용되는 특정 기능을 멤버변수, 메서드 형식으로 패키징을 해서
    -- 해당기능이 필요할때마다 손쉽게 복사해서 재사용하기 위한 시스템적인 툴

    생성자함수 (constructor)
    : 특정기능의 복사본을 생성하기 위한 특별한 함수


    인스터스(instance. 객체, 복사본)
    : 생성자 함수를 통해서 실제 복사가 되는 결과물

    프로토타입(prototype)
    : 생성자함수 생성시 자동으로 만들어지는 공통의 
    
    저장공간
    : 같은 생성자 함수로부터 생성된 모든 인스턴스들을 해당 생성자의 프로토타입 공간을 공유

*/

/*

var $box1 = $(".box1");
var $box2 = $(".box2");
var $box3 = $(".box3");

$box1.on("click",function(){
    changeBg(".box1");
});
$box2.on("click",function(){
    changeBg(".box2");
});
$box3.on("click",function(){
    changeBg(".box3");
});

*/

/*
    생성자 함수 안쪽에서의 this 
    --> 해당 생성자로 복사되는 복사본 객체를 지칭(인스턴스)
*/


//------------------------------------------------

//파라미터로 선택자 문자열을 받고
function Box(el){

    //해당 문자열로 제이쿼리 선택자로 감싸고 DOM을 선택한다음
    //해당 DOM요소를 앞으로 복사가될 복사본 인스턴스에 selector라는 키값에 담아서 전달
    this.selector = $(el);
    
    console.log(this);

    //복사가된 인스턴스 안에 있는 선택자에 직접 이벤트를 연결
    this.selector.on("click",function(){
        console.log("you clicked");
    })
}

//생성자함수로 부터 box1이라는 인스턴스 복사
//간단하게 이느턴스를 복사하기만 하면 변수와 이벤트를 한번에 연결가능
var box1 = new Box(".box1");
var box2 = new Box(".box2");
var box3 = new Box(".box3");

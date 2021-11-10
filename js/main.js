/*
일반 이벤트+함수형 코드를 객체지향으로 변경하는 방법.


1. 전역변수와 이벤트문을 함수로 묶어줌(함수 이름은 대문자)
2. 모든 전역변수 앞에 var를 지우고 this.을 붙여줌, 이벤트문도 마찬가지
3. this가 다음의 4가지 경우에 속할때에는 겉의 함수 뒤에. bind(this)를 붙여줌
4. 함수 선언부는 무조건 생성자 함수이름 .prototype.함수이름 = function(){}형태로 변환
5. 생성자함수 안쪽에 있는 상수값을 인수로 전달받게 처리
6. 생성자함수를 new 로 호출하면서 원하는 값을 인수로 전달
*/

/*

// step 0. ---------------------------------------

var selector = $(".box1");

selector.on("click",function(){
    changeBg(selector);
});

function changeBg(el){
    el.css({backgroundColor : "hotpink"});
}


// step 1 ---------------------------------------


function Box(){
    var selector = $(".box1");

    selector.on("click",function(){
        changeBg(selector);
    });
}


function changeBg(el){
    el.css({backgroundColor : "hotpink"});
}

// step 2 ---------------------------------------


function Box(){
    this.selector = $(".box1");

    this.selector.on("click",function(){
        this.changeBg(this.selector);
    });
}


function changeBg(el){
    el.css({backgroundColor : "hotpink"});
}


// step 3 ---------------------------------------

function Box(){
    this.selector = $(".box1");

    this.selector.on("click",function(){
        this.changeBg(this.selector);
    }.bind(this));
}


function changeBg(el){
    el.css({backgroundColor : "hotpink"});
}


// step 4 ---------------------------------------


function Box(){
    this.selector = $(".box1");

    this.selector.on("click",function(){
        this.changeBg(this.selector);
    }.bind(this));
}


Box.prototype.changeBg = function(el){
    el.css({backgroundColor : "hotpink"});
}

// step 5 ---------------------------------------


function Box(el){
    this.selector = $(el);

    this.selector.on("click",function(){
        this.changeBg(this.selector);
    }.bind(this));
}


Box.prototype.changeBg = function(el){
    el.css({backgroundColor : "hotpink"});
}

new Box(".box1");
new Box(".box2");


*/


function Box(el, bg){
    this.selector = $(el);

    this.selector.on("click",function(){
        this.changeBg(this.selector, bg);
    }.bind(this));
}


Box.prototype.changeBg = function(el, bg){
    el.css({backgroundColor : bg});
}

new Box(".box1", "aqua");
new Box(".box2", "yellow");
new Box(".box3", "orange");

//해당 코드에서 2번째 인수값으로 원하는 색상을 집어넣어서 배경색상을 다르게 변경가능하게 코드 개선

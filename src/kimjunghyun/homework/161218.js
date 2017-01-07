// 1번
var input = {
    count: 0,
    func: function(){
        if(++this.count%3 === 0){
            throw new Error("에러!");
        }
    }
};

// 2번
function a( v ){
    if(v === undefined || v === null) return "알수없는 값 입니다.";
    return "입력된 값은 "+(typeof v)+" 입니다.";
}

// 3번
function max( n1, n2 ) {
    if(n1 >= n2) return n1;
    return n2;
}

// 4번 4개의 숫자를 입력 받아 가장 작은 숫자를 반환하는 min함수를 만드시오
function min( n1, n2, n3, n4) {
    var minNum = n1;
    if(n2 < minNum) minNum = n2;
    if(n3 < minNum) minNum = n3;
    if(n4 < minNum) minNum = n4;
    return minNum;
}

// 5번
function exact( s1, s2 ){
    return s1 === s2;
}

// 6번
function abs( n ){
    if( n < 0 ) return n * -1;
    return n;
}

// 7번
function circle1( r ){
    return r * r * 3.14;
}

// 8번
function circle2( r1, r2 ){
    var r = max(r1, r2);
    return r * r * 3.14;
}

// 9번
function createElement( el, str ){
    var s;
    if(str === undefined || str === null) s = "";
    else s = str;
    return "<"+el+">"+s+"</"+el+">"
}

// 10번
createElement("div", createElement("p","자괴감이든다"));

// 11번
function makeURL( url ){
    return 'http://www.'+url;
}

// 12번
function seeThat( str ){
    return str;
}

// 13번
function confuse( str ){
    if(typeof str !== 'string'){
        throw new Error("문자가 아니네용")
    }
}

// 14번
function customer(){
    return "mission completed + 외쳐 사랑합니다 고객님"
}

//15번
function descend(a, b, c) {

    var large, medium, small;

    if (a >= b) {
        large = a;
        small = b;
    } else {
        large = b;
        small = a;
    }

    if (c >= large) {
        medium = large;
        large = c;
    } else if (small >= c) {
        medium = small;
        small = c;
    } else {
        medium = c;
    }

    return large + ',' + medium + ',' + small;

}
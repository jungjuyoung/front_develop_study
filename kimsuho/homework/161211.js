//700원 이상이면 콜라가 나오고
// 700원 미만이면 사이다가 나온다.
function a(money) {
	if(!money || typeof money !== 'number') throw new Error('돈을 넣어주세요!');
	if(money >= 700) return '콜라';
	if(money < 700) return '사이다';
}
//숫자를 넣으면 그 숫자의 제곱을 반환하는 함수를 만들어라
function square(number) {
	return number * number;
}
//숫자를 넣으면 자리수(?) 구분해주는 함수를 만들어라 10 11 99 11 100 111 999 111
function c(number) {
	if(number < 10) return 1;
	if(number < 100) return 11;
	if(number < 1000) return 111;

	return '너무크다';
}

//24시간 표기법으로 시간을 입력받아 오전/오후/저녁/그후를 출력하세요.
//(0~11: 오전)
// (12~17:오후)
// (18~20:저녁)
// (그이후:늦었어요^^) 를 출력하시면 됩니다^^
function hour(time) {
	if(0 <= time && time < 12) return '오전';
	if(12 <= time && time < 18) return '오후';
	if(18 <= time && time < 21) return '저녁';
	return '늦었어요';
}
function sum(a, b, c) {

	return a + b + c;
}


var age = 32;
var height = 182;


var suho = {
	age: 32,
	height: 182,
	energy: 10,
	run: function(){
		this.energy = this.energy - 1;
		return '달려';
	}
};




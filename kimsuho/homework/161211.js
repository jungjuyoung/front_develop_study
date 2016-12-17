//700원 이상이면 콜라가 나오고 700원 미만이면 사이다가 나온다.
function a(money) {
	if(money >= 700) {
		return '콜라';
	}else if(money < 700) {
		return '사이다';
	}
}

//숫자를 넣으면 그 숫자의 제곱을 반환하는 함수를 만들어라
function b(number) {
	return number * number;
}

//숫자를 넣으면 자리수(?) 구분해주는 함수를 만들어라
function c(number) {
	if(number < 10) return 1;
	else if(number < 100) return 11;
	else if(number < 1000) return 111;
	return '너무 큽니다';
}

//24시간 표기법으로 시간을 입력받아 오전/오후/저녁/그후를 출력하세요.
function d(time) {
	if(0 <= time && time < 12) return '오전';
	if(12 <= time && time < 18) return '오후';
	if(18 <= time && time < 20) return '저녁';
	return '늦었어요';
}
/*
a(5) === '입력된 값은  number 입니다.'
a('dddd') === '입력된 값은 string 입니다'
a() === '알수없는 값입니다'

 입력된 값의 타입을 알려주는 함수를 만드시오
*/

function a(v) {
	var type = typeof v;

	if(type === 'undefined') return '알 수 없는 값입니다';

	return '입력된 값은 '+ type +' 입니다';
}

/*
max(1, 5) === 5
max(100, 20) === 100
max(30, 30) === 30
*/

function max(a, b) {
	/*if(a > b) return a;
	 return b;*/

	return a > b ? a : b;
}


/*
min(1, 5, 12, 10) === 1
min(100, 20, 15, 40) === 15
min(30, 25, 25, 50) === 25
*/

function min(a,b,c,d) {
	var m = a;

	if(m > b) m = b;
	if(m > c) m = c;
	if(m > d) m = d;

	return m;
}




/*
exact('안녕', '안녕') === true
exact('안녕', '메롱') === false
*/

function exact(a, b) {
	return a === b;
}


/*
abs(-400) === 400
abs(200) === 200
*/

function abs(n) {
	return n < 0 ? n * -1 : n;
}


/*
circle(5) === 78.5
circle(70) === 15386
*/
function circle(r) {
	return r * r * 3.14;
}

circle(max(2, 10));

/*
circle( ? ) === ?
*/


/*
createElement('div', '안녕하세요') === '<div>안녕하세요</div>'
createElement('p', '반갑습니다') === '<p>반갑습니다</p>'
createElement('h1') === '<h1></h1>'
*/

function createElement(tag, text) {
	return '<'+tag+'>'+(text || '')+'</'+tag+'>';
}
createElement('div', createElement('p', '반갑습니다'));
/*
createElement( ? ) === '<div><p>반갑습니다</p></div>'
*/

/*
makeURL('naver.com') === 'http://www.naver.com'
*/

function makeURL(url) {
	return 'http://www.'+url;
}
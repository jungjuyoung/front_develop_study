function min(a, b, c, d) {
	var m = a;

	if(m > b) m = b;
	if(m > c) m = c;
	if(m > d) m = d;

	return m;
}
function max(a, b){
	return a > b ? a : b;
}

describe('min 테스트', function() {
	it('가장 작은 수를 반환한다', function() {
		expect(min(5,10,3,19)).toBe(3);
		expect(min(20,7,1,3)).toBe(1);
	});

});
describe('max 테스트', function() {
	it('가장 큰 수를 반환한다', function() {
		expect(max(5, 11)).toBe(11);
		expect(max(21, 4)).toBe(21);
	});
});
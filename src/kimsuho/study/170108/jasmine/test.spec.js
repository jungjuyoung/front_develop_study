var math = {
	min: function(a,b,c,d) {
		var m = a;

		if(m > b) m = b;
		if(m > c) m = c;
		if(m > d) m = d;

		return m;
	},
	max: function(a,b){
		return a > b ? a : b;
	}
};

describe('math테스트', function() {
	it('min은 가장 작은 수를 반환한다', function() {
		expect(math.min(5,10,3,19)).toBe(3);
		expect(math.min(20,7,1,3)).toBe(1);
	});
	it('max는 가장 큰 수를 반환한다', function() {
		expect(math.max(5, 11)).toBe(11);
		expect(math.max(21, 4)).toBe(21);
	});
});
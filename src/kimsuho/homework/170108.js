var inventory = [
	{name: 'apples', quantity: 2},
	{name: 'bananas', quantity: 0},
	{name: 'cherries', quantity: 5},
	{name: 'grapes', quantity: 10},
	{name: 'strawberries', quantity: 8}
];

describe('콜백함수를 익히자', function() {
	it('원하는 데이터의 index를 찾는다', function(){
		expect(
		  findIndex(inventory, function(fruit) {
			  return fruit.name === 'bananas';
		  })
		).toBe(1);
		expect(
		  findIndex(inventory, function(fruit) {
			  return fruit.name === 'cherries';
		  })
		).toBe(2);
	});
});

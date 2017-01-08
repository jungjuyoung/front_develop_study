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

	it('반복되는 데이터를 마크업으로 변환한다', function() {
		expect(
		  template(inventory, function(fruit) {
			  return '<li>'+fruit.name+'<span>수량 : '+fruit.quantity +'</span></li>';
		  })
		).toBe('<li>apples<span>수량 : 2</span></li><li>bananas<span>수량 : 0</span></li><li>cherries<span>수량 : 5</span></li><li>grapes<span>수량 : 10</span></li><li>strawberries<span>수량 : 8</span></li>')
	});
});

function displayHeight(arr) {
	for(var i = 0;i < arr.length;i++){
		console.log('키는 : ' + arr[i] + 'cm 입니다');
	}
	console.log('종료');
}

var heightList = [183, 190, 169, 150, 180, 166];
displayHeight(heightList);
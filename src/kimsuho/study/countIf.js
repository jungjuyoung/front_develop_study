function countIf(arr, target) {
	var result = 0;

	for(var i=0;i<arr.length;i++){
		if(arr[i] === target) {
			result += 1;
		}
	}
	return result;
}

function countIf2(arr, target) {
	var result = 0;
	var i = arr.length;

	while(i--){
		if(arr[i] === target) {
			result += 1;
		}
	}

	return result;
}

var arr = ['남', '여', '여', '여', '여','여','남','남','여'];
console.log('남자 수는 ', countIf(arr, '남'));
console.log('여자 수는 ', countIf2(arr, '여'));


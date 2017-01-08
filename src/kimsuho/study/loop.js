function loop(length, callback) {
	var i = 0;

	while(i < length){
		callback(i);
		i++;
	}
	console.log('종료');
}

function loop2(length, callback) {
	for(var i = 0;i < length;i++){
		callback(i);
	}
	console.log('종료');
}

loop2(10, function(index){
	console.log('하하하하' + index);
});
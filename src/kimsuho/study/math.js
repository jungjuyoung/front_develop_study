var math = {
	min: function(arr){
		var temp = arr[0];

		for(var i=0;i<arr.length;i++){
			if(temp > arr[i]) temp = arr[i];
		}

		return temp;
	},
	max: function(a, b){
		/*if(a > b) return a;
		 return b;*/

		return a > b ? a : b;
	}
};

math.min([3,5,2,1,5,6,8,2,8]);
math.max(5, 10);

function $() {
	return {
		ready: function(callback) {
			callback();
		},
		on: function(eventName, callback){
			//이벤트가 일어났을 때
			//callback();
		}
	};
}

$(document).ready(function() {
	console.log('gkgkgkkgkgkg');
});

$('#btn').on('click', function(e) {
	$(this).addClass('inactive');
});

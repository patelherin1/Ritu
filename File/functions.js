// Variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth !== clientWidth || newHeight !== clientHeight) {
        location.reload();
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current === '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress % 2 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(startDate) {
	var current = new Date();
	var seconds = Math.floor((current - startDate) / 1000);
	var days = Math.floor(seconds / (3600 * 24));
	seconds %= (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	hours = hours < 10 ? "0" + hours : hours;
	seconds %= 3600;
	var minutes = Math.floor(seconds / 60);
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds %= 60;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes + "</span> Seconds <span class=\"digit\">" + seconds + "</span>";
	$("#clock").html(result);

	var text = "THE WORLD JUST GOT LUCKIER SINCE 31 MARCH 2002";
	$("#message-box").html(text);
}

// Set date to 31 March 2002, 00:00:00
var together = new Date(2002, 2, 31, 0, 0, 0, 0); // Month is 0-based, so March = 2
setInterval(function() {
    timeElapse(together);
}, 1000);

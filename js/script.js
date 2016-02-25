// This is script.js
// You can write JavaScript for your site in here.
//

$(document).ready(function() {
	parallaxMousemoveHeader("test");
	function parallaxMousemoveHeader(selector) {
		// Get elements that will be moved
		var selectors = document.querySelectorAll(selector);
		var x,y = 0;
		var title = $('h1.header-parallax');
		console.log(title.html());

		$("section.hero").mousemove(function(e) {
			x = e.pageX;
			y = e.pageY;
			centerY = y - $(this).height()/2;
			centerX = x - $(this).width()/2;
			$('h1.header-parallax').css({"transform":"translate3d("+ -(centerX/37)+"px,"+ -(centerY/37)+"px,0)"});
			$('img.header-parallax').css({"transform":"translate3d("+ -(centerX/60)+"px,"+ (centerY/60)+"px,0)"});
			$('svg._1').css({"transform":"translate3d("+ (centerX/15)+"px,"+ -(centerY/15)+"px,0)"});
			$('svg._2').css({"transform":"translate3d("+ (centerX/15)+"px,"+ -(centerY/15)+"px,0)"});
			$('svg._3').css({"transform":"translate3d("+ (centerX/35)+"px,"+ -(centerY/35)+"px,0)"});
			$('svg._4').css({"transform":"translate3d("+ (centerX/35)+"px,"+ -(centerY/35)+"px,0)"});
			$('svg._5').css({"transform":"translate3d("+ (centerX/25)+"px,"+ -(centerY/25)+"px,0)"});
			console.log (x + ": " + y);

		});
	}
});
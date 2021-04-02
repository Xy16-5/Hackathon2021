function resizeSlides()
{
	var h = $(window).height();
	$(slideSel).css('height', h < 640 ? 640 : h); // ensure each slide is at least 640px tall
}

function goToSlide(slideIndex)
{
	$.scrollTo(slideSel + slideIndex, transitionDuration, { "easing": easingType });
}

function createButtons()
{
	var numSlides = $(buttonSel).length;
	$(buttonSel).click(
		function(e)
		{
			// Regex to grab the suffixing integer
			var regex = new RegExp(buttonToSel.substring(1) + '\\d+', 'g'); // need to substring buttonToSel to remove the prefixing "."
			var input = e.currentTarget.className; // grab class string 
			if (regex.test(input)) 
			{
				var slideToScrollTo = input.match(regex)[0].match(/\d+/g);  // grab the first slide number to scroll to
				// Scroll to the slide number of the first match.
				goToSlide(slideToScrollTo);
			}
		}
	);
}


function resizeimagepage1(){
	$(window).resize(function(){
		var cliWidth=document.body.clientWidth;
		var cliHeight=document.body.clientHeight;
		var divHeight= 0.45*0.85*cliHeight;
		$('.image-page1').css("height",divHeight +"px")
	});
};

function resizeimage1(){
	$(window).resize(function(){
		var cliWidth=document.body.clientWidth;
		var cliHeight=document.body.clientHeight;
		var divHeight= 0.9*0.85*cliHeight;
		$('.image1').css("height",divHeight +"px")
	});
};

function resizeimage2(){
	$(window).resize(function(){
		var cliWidth=document.body.clientWidth;
		var cliHeight=document.body.clientHeight;
		var divHeight= 0.45*0.85*cliHeight;
		$('.image2').css("height",divHeight +"px");
	});
};

function resizeimage3(){
	$(window).resize(function(){
		var cliWidth=document.body.clientWidth;
		var cliHeight=document.body.clientHeight;
		var divHeight= 0.45*0.85*cliHeight;
		var divTop = 1.05*0.45*0.85*cliHeight
		$('.image3').css("height",divHeight +"px");
		$('.image3').css("top",divTop +"px");
	});
};


$(document).ready(
	function()
	{
		// Create buttons from the "button" class.
		createButtons();
		
		// Resize slides initially, then hook into resize event.
		resizeSlides();
		resizeimagepage1();
		resizeimage1();
		resizeimage2();
		resizeimage3();

		$(window).resize(function(evt)
		{
			resizeSlides();
			resizeimagepage1();
			resizeimage1();
			resizeimage2();
			resizeimage3()
		});
	}
);
//show and hide navbar
$(document).ready(function()
{
	'use strict';
	$(window).scroll(function()
	{
		'use strict';
		if($(window).scrolltop()<80)
		{
			$('.navbar').css(
			{
				'margin-top':'-100px',
				'opacity':'0'

			});
		}
		else
		{
			$('.navbar').css(
			{
				'margin-top':'0px',
				'opacity':'1'
			});
		}

	});

});

//for smooth scrolling

$
(document).ready(function()
{
	'use strict'
	$('.nav-item').click(function()
	{
		if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname)
		{
			var target=$(this.hash);
			target=target.lenght ? target : $('[name=' + this.hash.slice(1)+']');
			if(target.length)
			{
				$('html,body').animate({
					scrollTop:target.offset().top
				},1000);
				return false;
			}
		}
	});
});


//for auto padding
$(document).ready(function()
{
	'use strict'
	setInterval(function()
	{
		var windowHeight= $(window).height();
		var containerHeight= $(".header-container").height();
		var padtop = windowHeight - containerHeight;
		$(".header-container").css({
			'padding-top':Math.round(padTop/2)+'px',
			'padding-bottom	':Math.round(padTop/2)+'px'
		});
	},10)


});




$('.counter-num').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
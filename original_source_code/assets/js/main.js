$(function(){

	$('#mobnavtrigger').on('click',function(){
		$('#mainnav').slideToggle();
        $('#mobnavtrigger span').toggleClass('alt-mobnavtrigger');
	});

	$('#mainnav li .arrow-down').on('click',function(e){
    	$(this).siblings('.subnav').slideToggle();
	});

	if($('#mobileslideshow').length)
	{
		$('#mobileslideshow').flexslider({
			controlNav:false,
			directionNav: true
		});
  	}

    $('#hide').on('click',function(){
        $('#main').fadeOut();
        $('#hide').fadeOut();
        $("#show").fadeIn();
        $('#logo-bg').show();
    });

    $('#show').on('click',function(){
        $('#main').fadeIn();
        $('#hide').fadeIn()
        $("#show").fadeOut();
        $('#logo-bg').fadeOut();
    });

    currentWidth = window.innerWidth || document.documentElement.clientWidth;
    if(currentWidth>992){

        /*if($.cookie('once') == undefined){

            $('#wrapper').css('top','3000px').animate({top:0},4000);
            $.cookie('once','true');
        }*/
    }

    $('body').hide().show();

});


/*----------HIGHSLIDE GALLERY-------------*/

(function(){
    if($('#gallery').length && hs)
    {
        hs.align          = 'center';
        hs.transitions    = ['expand', 'crossfade'];
        hs.fadeInOut      = true;
        hs.dimmingOpacity = 0.8;
        hs.marginBottom = 105;
        hs.captionEval    = 'this.thumb.alt';
        hs.numberPosition = 'caption';
        var setting_obj            = new Object();
        setting_obj.slideshowGroup = 'gallery';
        setting_obj.interval       = 5000;
        setting_obj.repeat         = false;
        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) )
        {
            setting_obj.useControls = true;
            setting_obj.overlayOptions = {
                className: 'text-controls',
                position: 'bottom center',
                relativeTo: 'viewport',
                offsetY:-65
            };
            setting_obj.thumbstrip = {
                position: 'bottom center',
                mode: 'horizontal',
                relativeTo: 'viewport'
            };
        }
        hs.addSlideshow(setting_obj);

    }
})();


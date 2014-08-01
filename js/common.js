head.ready(function() {
    $('.sss__slides').cycle({
        speed: 600,
        fx:"scrollHorz",
        manualSpeed: 400,
        slides: '.sss__slide',
        next: '.ss__next',
        prev: '.ss__prev'
    });
    $('.serv').click(function(event) {
        
        $('.sss__slides').cycle('goto',$(this).index())
    });
    // $('#objs').cycle({
    //     speed: 600,
    //     manualSpeed: 400,
    //     slides: '.obj'
    // });

    $( '.sss__slides' ).on( 'cycle-before', function( event, opts ) {
        $('.serv').removeClass('is-active');
        $('.serv').eq(opts.nextSlide).addClass('is-active');
        // if(opts.nextSlide==1){
        //     $('#vi').get(0).play();
        //     // alert('a');
        // }
    });
   
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.menu__link').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.menu__link').each(function () {
            $(this).removeClass('is-active');
        })
        $(this).addClass('is-active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 160
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.menu__link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top -180 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.menu__link').removeClass("is-active");
                currLink.addClass("is-active");
            }
            else{
                currLink.removeClass("is-active");
            }
        });
    }


	
	$('.js-portfolio-slider').slick({
		dots: true,
		centerMode: true,
		centerPadding: 40,
		slidesToShow: 3
	});

// tabs
	function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
            tab_link.on("click", function() {
             	var index = $(this).attr("href");
             	tab_link.removeClass("is-active");
             	tab_link.parent().removeClass("is-active");
             	$(this).addClass("is-active");
             	$(this).parent().addClass("is-active");
             	tab_cont.hide();
             	$(this).parents(".js-tab-group").find("."+index).show();
                return false;
            });
        });
    }
    if ($(".js-tab-group").length) {
    	tab();
    };	

});
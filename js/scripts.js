$(function() {
    $('nav').hide();

    $('.burgerMenu').click(function(){
        $('.bar').eq('0').toggleClass('barTop');
        $('.bar').eq(1).toggleClass('barMiddle');
        $('.bar').eq(2).toggleClass('barBottom');
        $('nav').fadeToggle(700);
        $('.navRight').toggleClass('open')
        if($('.navRight').hasClass('open')){
            $('.navRight').animate({right:0},600)
        }else{
            $('.navRight').animate({right:'-40%'},600)
        }
    });
    $('.navItem').click(function(){
        $('.bar').eq('0').toggleClass('barTop');
        $('.bar').eq(1).toggleClass('barMiddle');
        $('.bar').eq(2).toggleClass('barBottom');
        $('nav').fadeToggle(700);
        $('.navRight').toggleClass('open')
        if($('.navRight').hasClass('open')){
            $('.navRight').animate({right:0},600)
        }else{
            $('.navRight').animate({right:'-40%'},600)
        }
    })
    $(window).on('load scroll',function(){
        if($(this).scrollTop()>$('#fv').outerHeight()-150){
            $('header').addClass('backBlack');
        }else{
            $('header').removeClass('backBlack');
        }

    });

});

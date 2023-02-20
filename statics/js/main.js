$(function(){
    for(let i = 1; i <=20; i++){
        let item = $('<li class="logo__item"><img alt="로고'+i+'" src="/statics/img/ci/f_logo'+i+'_c.jpg"</li>')
        $('#main-logo-section .logo-wrap').append(item)
    }

    
    $('#main-process .slide-wrap').slick({
        arrows:false,
        slideToShow:1,
        autoplay:true,
        autoplaySpeed: 3000,
        touchMove:false,
        infinite: true
    })

    // 시간..대충..어느정도?
    $('#main-logo-section .logo-wrap').slick({
        speed: 3500,
            autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        arrows:false,
        adaptiveHeight:true,
        touchMove:false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })

    $('#main-customer-review .slide-wrap').slick({
        dots: true,
        arrows:true,
        slideToShow:1,
        //autoplay:true,
        autoplaySpeed: 3000,
        touchMove:false,
        infinite: true,
        visibleWidth:true,
    })
    
    

})

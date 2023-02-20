$(function(){
    $('#main-process .slide-wrap').slick({
        arrows:false,
        slideToShow:1,
        autoplay:true,
        autoplaySpeed: 3000,
        touchMove:false,
        infinite: true,
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
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })

    $('#main-customer-review .slide-wrap').slick({
        dots: true,
        slideToShow:1,
        // autoplay:true,
        autoplaySpeed: 3000,
        touchMove:false,
        infinite: true,
    })

})
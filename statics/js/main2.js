$(function(){

    // logo load
    for(let i = 1; i <=15; i++){
        let item = $('<li class="logo__item"><img alt="로고'+i+'" src="/statics/img/ci/f_logo'+i+'_c.jpg"</li>')
        $('#main-logo-section .logo-wrap').append(item)
    }

   
    $('#main-customer-review .card-wrap').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
        variableWidth:true,
        pauseOnHover : true,
        draggable : true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
    
})

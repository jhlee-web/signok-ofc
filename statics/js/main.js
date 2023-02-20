$(function(){
    for(let i = 1; i <=20; i++){
        let item = $('<li class="logo__item"><img alt="로고'+i+'" src="/statics/img/ci/f_logo'+i+'_c.jpg"</li>')
        $('#main-logo-section .logo-wrap').append(item)
    }

})

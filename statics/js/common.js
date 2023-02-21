$(function(){
    // header,footer load
    $('.header').load('/template/include/inc_headerwrap.html');
    if($('.footer').hasClass('has-form')){
        $('.footer').load('/template/include/inc_footerWrap_form.html');
    }
    else{
        $('.footer').load('/template/include/inc_footerWrap_button.html');
    }  
})

function openModal(pageName,modalName){
    let modalBg = $('<div onclick="removeModal(this)"  class="modal__background"></div>')
    let modal = $('<img class="modal" src="/modal/modal_'+pageName+'_'+modalName+'.png">')
    modalBg.append(modal)
    $('body').append(modalBg);
}

function removeModal(_this){
    $(_this).remove();
}
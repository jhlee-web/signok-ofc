$(function(){
    // header,footer load
    $('.header').load('/template/include/inc_headerwrap.html');
    $('.footer').load('/template/include/inc_footerwrap.html')  
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
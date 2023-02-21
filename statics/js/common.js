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
    let modalBg = $('<div onclick="removeModal(\'this\')" class="modal__background"></div>')
    let modal = $('<img class="modal" id="modal_this" src="/modal/modal_'+pageName+'_'+modalName+'.png">')
    modalBg.append(modal)
    $('body').append(modalBg);
    modal.show();
}

function removeModal(elemId){
    $('#modal_'+elemId).hide();
    if($('.modal__background').length > 0 ) {
        $('.modal__background').hide();
    }
}

function oepnElemModal(title,modalName){
    let modalBg = $('<div class="modal__background"></div>');
    let modal = $('#modal_'+modalName);
    
    $('.modal').hide();

    modalBg.append(modal)
    $('body').append(modalBg);
    $('.var-title').text(title)
    modal.show();
}


function toggleTabButton(tabName){


    $('.tab-container__item, .tab__item').removeClass('is-active');
    $('.tab-container__item[data-tab='+tabName+']').addClass('is-active');
    $('.tab__item[data-tab='+tabName+']').addClass('is-active');
}
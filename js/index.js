function scroll(selector){
    $(selector).click(function(event){
        event.preventDefault();
        var target = $(this).attr('href'); 
    

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000) 
    })
    
}
scroll('a[href*=painel-sobre]');
scroll('a[href*=painel-apresentadores]');
scroll('a[href*=painel-formulario]');
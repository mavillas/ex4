//javascript

//call to jQuery ready function
//make sure html and css aare loaded

$(document).ready(function () {
    console.log('ready');

    $('.hide').hide();

    $('section#phone').click(function () {
        $('section#phone_text').fadeToggle();
    });
    
    $('section#card').click(function () {
        $('section#card_text').fadeToggle();
    });
    
    $('section#key').click(function () {
        $('section#key_text').fadeToggle();
    });
    
    $('section#notebook').click(function () {
        $('section#notebook_text').fadeToggle();
    });
    
    $('section#charger').click(function () {
        $('section#charger_text').fadeToggle();
    })
    

});
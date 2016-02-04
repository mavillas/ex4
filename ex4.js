//javascript

//call to jQuery ready function
//make sure html and css aare loaded

$(document).ready(function () {
    console.log('ready');

    $('main#container').slideDown(400,function(){
       $(this).animate({'top': '15%', 'opacity':'1'}, 1000, 'swing');
     });

//hide descriptions
$('.hide').hide();

//phone click
$('section#phone').click(function () {
    $('section#phone_text').fadeToggle();
});

//card click
$('section#card').click(function () {
    $('section#card_text').fadeToggle();
});

//key click
$('section#key').click(function () {
    $('section#key_text').fadeToggle();
});

// notebook click
$('section#notebook').click(function () {
    $('section#notebook_text').fadeToggle();
});

//charger click
$('section#charger').click(function () {
$('section#charger_text').fadeToggle();
})


});
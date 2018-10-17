$('#main').find ('.intro');




$('a').html('yahoo!')
$('a').attr('href', 'http://www.yahoo.com')
$('a').css ({'color': 'green'})

console.log($('a').html());
console.log($('a').css('color'));
console.log($('a').attr('href'));

var links =$('a');
links.each(function(){
    var link =$(this);
    link.text(link.text() + "!!");
});

//option1
$(document).ready(function(){
        var links =$('a');
        
        links.each(function(){
        var link =$(this);
        
        link.text(link.text() + "!!");

    });
})
// option2
$(function(){
        var links =$('a');
        
        links.each(function(){
        var link =$(this);
        
        link.text(link.text() + "!!");
    });

})

// //Option 1 for button
// function clickHandler(){
//     console.log('clicked!');

// }

// $('#button').on ('click', clickHandler);

//Option 2 for button
$('#button').on('click', function() {
    console.log('clicked!');
});

$('body').on('keypress', function(event){
    console.log(event);
    console.log(event.which);
    console.log(event.target);

});


$('form').on('submit', function(event){
    event.preventDefault();
    
    console.log('not submitting the form!');
});


//ERROR
// $('#error').toggle(5000);
$('#error').hide();

// $('#error').fadeIn(1000);

$('#error').show(1000, function(){  
    $(this).addClass('alert')
});

$('#square'). animate({
    opacity:0.25,
    left:"+50"
}, 1000, function(){

});
$(document).ready(function(){

    // OFF button 1 
    $('.button-1').click(function(){
        if($(this).text().trim() == 'OFF'){
            $('.button-1').addClass('btn1-change');
            $('.button-1').text('ON')
        } else {
            $('.button-1').removeClass('btn1-change');
            $('.button-1').text('OFF')
        }
    })




    // OFF button 2
    $('.button-2').click(function(){
        if($(this).text().trim() == 'OFF'){
            $('.button-2').addClass('btn2-change');
            $('.button-2').text('ON')
        } else {
            $('.button-2').removeClass('btn2-change');
            $('.button-2').text('OFF')
        }
    })




    // OFF button 3
    $('.button-3').click(function(){
        if($(this).text().trim() == 'OFF'){
            $('.button-3').addClass('btn3-change');
            $('.button-3').text('ON')
        } else {
            $('.button-3').removeClass('btn3-change');
            $('.button-3').text('OFF')
        }
    })




    // Hide Button
    $('.hide-buttons').click(function(){
        $('.btn1').hide();

        $('.hide-buttons').css('background-color','red');
        $('.hide-buttons').css('border','1px solid red');

        $('.show-buttons').css('background-color','rgb(17, 192, 255)');
        $('.show-buttons').css('border','1px solid rgb(17, 192, 255)');
    })




    // Show Button
    $('.show-buttons').click(function(){
        $('.btn1').show();

        $('.show-buttons').css('background-color','red');
        $('.show-buttons').css('border','1px solid red');

        $('.hide-buttons').css('background-color','rgb(17, 192, 255)');
        $('.hide-buttons').css('border','1px solid rgb(17, 192, 255)');
    })




    // Turn On All Button
    $('.turn-on-all-button').click(function(){
        if($(this).text().trim() == 'TURN ON ALL'){
            $('.turn-on-all-button').text('TURN OFF ALL');
            $('.turn-on-all-button').css('background-color','red');
            $('.turn-on-all-button').css('border','1px solid red');
            
            $('.button-1').addClass('btn1-change');
            $('.button-2').addClass('btn2-change');
            $('.button-3').addClass('btn3-change');
            $('.btn1').text('ON')
            
        } else if ($(this).text().trim() == 'TURN OFF ALL') {
            $('.turn-on-all-button').text('TURN ON ALL');

            $('.turn-on-all-button').css('background-color','rgb(17, 192, 255)');
            $('.turn-on-all-button').css('border','1px solid rgb(17, 192, 255)');

            $('.button-1').removeClass('btn1-change');
            $('.button-2').removeClass('btn2-change');
            $('.button-3').removeClass('btn3-change');

            $('.btn1').text('OFF')
        }


    })
});
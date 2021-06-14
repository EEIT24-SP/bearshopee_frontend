var colorchange=1;
var color= 0;

// $(".Category-scroll-item").on('click', function () {
//     console.log(this);
//    for(i=0;i<$('li:nth-child()').length;i++){
//        console.log('apple')


//    }
$(document).ready(function () {
    // for (i = 0; i <= $('.Category-item').find().length; i++) {
    //     $(".Category-item:eq("+i+")").on('click',function(i){
    //         $(".Category-item:eq("+i+")").css("background-color", " rgb(184, 184, 184)");
    //         console.log(this);
    //         console.log("apple")
    //     })

$('.Category-item').click(function(){
    $('.Category-item').removeClass('background-grey');
    $(this).addClass('background-grey');
    
    $('.Category-second-container').addClass('display-none');
    $(this).children().eq(2).removeClass('display-none')

    $('#category-first').text($(this).children().eq(0).text());

    
    console.log($('#category-second').text() == '')
    

})

$('.Category-item-second').click(function(){
    // $('.Category-item-second').removeClass('background-grey');
    // console.log('heheh')
    console.log($('.Category-item-second').children().text())
    $('.Category-item-second').addClass('background-grey');
    console.log('haaah')
    $('.Category-third-container').removeClass('display-block');
    $(this).children().eq(2).addClass('display-block')
    
    
    console.log($(this).children().eq(0).text());

    $('#category-second').text($(this).children().eq(0).text());
    // if($('#category-second').text() != ''){
    //     $('#category-second').text($(this).children().eq(0).text());
    //     $('#category-third').text("");

    // }

})

$('.Category-item-third').click(function(){
    $('#category-third').text(" > "+$(this).children().eq(0).text());
    console.log($(this).children().eq(0).text());
})
})

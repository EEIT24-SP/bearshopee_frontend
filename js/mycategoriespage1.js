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
    
    
    
    // console.log($(this).children('.Category-second-container').children('p'))
    // console.log($(this).children().siblings('p').text())
    
    // $(this).children().siblings('p').text();
    switch ($(this).children().eq(0).text()) {
        case '女生衣著':
            switch ($('#category-second').text()) {
                case 'T恤/T-Shirt':
                    break;
                case '襯衫':
                    
                    break;
                case '洋裝':
                    
                    break;
                case '短褲':
                        switch ($('#category-third').text()) {
                            case '其他短褲':
                                
                                break;
                            case '休閒短褲':
                                
                                break;
                            case '牛仔短褲':
                                
                                break;
                            case '內搭短褲':
                                
                                break;
                            case '連身褲/吊帶褲':
                                
                                break;
                            default:
                                $('#category-third').text('')
                                break;
                        }
                    break;
                case '長褲':
                    
                    break;
                case '':
                    
                    break;
            
                default:
                    $('#category-second').text('');
                    $('#category-third').text('');
                    break;
            }

            break;
        case '男生衣著':
            console.log('ok2')
            break;
        case '書籍及文創相關商品':
            console.log('ok3')
            break;
        case '居家生活用品':
            console.log('ok4')
            break;
        case '手機平板相關商品':
            console.log('ok5')
            break;
    
        default:
            break;
    }


    // console.log($('#category-first').text())
})

$('.Category-item-second').click(function(){
    $('.Category-item-second').removeClass('background-grey');
    $(this).addClass('background-grey');


    // console.log('heheh')
    // console.log($('.Category-item-second').children().text())
    // console.log('haaah')
    $('.Category-third-container').removeClass('display-block');
    $(this).children().eq(2).addClass('display-block')
    console.log($(this).children().eq(0).text())
    
    // console.log($(this).children().eq(0).text());

    $('#category-second').text($(this).children().eq(0).text());
    // if($('#category-second').text() != ''){
    //     $('#category-second').text($(this).children().eq(0).text());
    //     $('#category-third').text("");

    // }
    
    

})

$('.Category-item-third').click(function(){
    $('#category-third').text($(this).children().eq(0).text());
    // console.log($(this).children().eq(0).text());
})
})


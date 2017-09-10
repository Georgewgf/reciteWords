$(function(){
    var url = $('#audio').attr('src');

    // 点击发音图标里发音
    $('img.pronounce').click(function(){
        var word = $(this).parent().find('p').eq(0).text();
        newurl = url.replace('hello',word);
        $('#audio').attr('src',newurl).trigger('play');
    });

    // 点击单词时发音
    $('p.word').click(function(){
        var word = $(this).text();
        newurl = url.replace('hello',word);
        $('#audio').attr('src',newurl).trigger('play');
    })

    // 点击go按钮页面滚动条跳转
    $('.banner button').click(function(){
        $(window).scrollTop(404);
    })

})

$(document).ready(function() {
    refreshNews("精选");

    $("nav ul li").each(function() {
        $(this).click(function() {
            $(".border").removeClass("border");
            $(this).children("a").addClass("border");
            var vattr = $(this).children("a").html();
            console.log(vattr);
            refreshNews(vattr);
            if($(this).children("a").html() != "精选"){
                $(".swiper-container").css("display","none");
            }else{
                $(".swiper-container").css("display","block");
            }
        })
    })


    // 滚动条设置
    $("article").scroll(function() {
        if ($("article").scrollTop() > 50) {
            $(".go-top-trigger").css("display", "block");
        } else {
            $(".go-top-trigger").css("display", "none");
        }
    });
    $(".go-top-trigger").click(function() {
        $("article").animate({ scrollTop: 0 }, 100);
        return false;
    })


    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2000,
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',


    })

})


function refreshNews(type) {
    var $lists = $("article ul");
    $lists.empty();
    $.ajax({
        url: "server/getnews.php",
        type: 'get',
        dataType: "json",
        data: { newstype: type },
        success: function(data) {
            $.each(data, function(index, value) {
                // console.log(value);
                var $list = $("<li></li>").addClass("news-list").prependTo($lists);
                var $newsimg = $("<div></div>").addClass("newsimg").appendTo($list);
                var $img = $("<img>").attr("src", value.newsimg).appendTo($newsimg);
                var $newscontent = $("<div></div>").addClass("newscontent").appendTo($list);
                var $h1 = $("<h1></h1>").html(value.newstitle).appendTo($newscontent);
                var $p = $("<p></p>").appendTo($newscontent);
                var $newstime = $("<span></span>").html(value.newstime).addClass("newstime").appendTo($p);
                var $newssrc = $("<span></span>").html(value.newssrc).addClass("newssrc").appendTo($p);
            })
        },
        error: function() {
            console.log("fail");
        }
    })



}

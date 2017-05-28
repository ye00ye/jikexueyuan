$(document).ready(function() {
    // 顶部导航栏设置
    $(".top-middle-content li").each(function(index){
        $(this).hover(function(){
            $(this).children("div").css("display","block");
        },function(){
            $(this).children("div").css("display","none");
        })
    })
    // 搜索框设置
    $(".top-right-content #fangdajing").click(function(){
        $(".sousuokuang").css("display","block");
        $(".top-right-content").css("display","none");
        $(".top-middle-content").css("display","none");
    })
    $(".sousuokuang .quxiao").click(function(){
        $(".sousuokuang").css("display","none");
        $(".top-right-content").css("display","block");
        $(".top-middle-content").css("display","block");
    })

// 中间左边下部分导航栏设置
    $(".down li").hover(function() {
        $(this).css("backgroundColor", "#fafafa")
    }, function() {
        $(this).css("backgroundColor", "#fff")
    });
// 中间右边顶部导航区域设置
    $(".mains").each(function(index) {
        $(this).hover(function() {
            var width = $(this).width();
            $(".main-sub").eq(index).css({
                width: width + 30 + "px",
                padding: 0 + "px",
                position: "relavite",
                left: "-" + 1 + "px",
            });
            $(".main-sub").eq(index).show();
        }, function() {
            $(".main-sub").eq(index).hide();
        })
    });
    // 为左侧滑动增加效果
    $(".up .sub").each(function(index){
        $(this).hover(function(){
            $("div.right-border").css("display","block");
            $(".up li").eq(index).append($("div.right-border"));
            $(".up .sub .left-menu").eq(index).show();
        }, function(){
            $(".right-border").css("display","none");
            $(".up .sub .left-menu").eq(index).hide();
        })



    })
    // 为中间的内容增加效果
    $(".cf li").each(function(index) {
        $(this).hover(function() {
            var picurl = $(".pic").eq(index);
            $(".soucang").appendTo(picurl).css("display", "block");
            $(".anniu").appendTo(picurl).css("display", "block");
            $(".yinying").appendTo(picurl).css("display", "block");
            picurl.show(10);
        }, function() {
            var picurl = $(".pic").eq(index);
            $(".soucang").appendTo(picurl);
            $(".anniu").appendTo(picurl);
            $(".yinying").appendTo(picurl);
            $(".cf .pic i").hide();
        })
    })

    // 翻页条效果设置
    $(".page a").each(function(index) {
            $(this).hover(function() {
                $(".page button").eq(index).addClass("colors");
            }, function() {
                $(".page button").eq(index).removeClass("colors");
            })
        })


    
        // 返回页面头部设置
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".fudong1").css("display", "block");
        } else {
            $(".fudong1").css("display", "none");
        }
    });
    $(".fudong1").click(function() {
        $("body,html").animate({ scrollTop: 0 }, 100);
        return false;
    })
})

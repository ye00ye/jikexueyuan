//为页面下部的导航栏部分创建了一个单例
//用的代码比纯粹的jquery还多

$(document).ready(function() {
    //右侧下拉框长度设置
    $('aside').hover(function() {
        $('body').css({
            'overflow': "hidden"
        });
    }, function() {
        $('body').css({ 'overflow': 'scroll' })
    })

    //下拉框列表下划线设置
    $(".xialakuang li").hover(function() {
            $(this).find("a").css("textDecoration", "underline");
        }, function() {
            $(this).find("a").css("textDecoration", "none");
        })
        //百度一下按钮设置
    $("#btn").hover(function() {
            $("#btn").css("backgroundColor", "#2868c8");
        }, function() {
            $("#btn").css("backgroundColor", "#38f");
        })
        // 照相机设置动作
    $("#camera").hover(function() {
        $("#camera").css("top", "-36px");
    }, function() {
        $("#camera").css("top", "4px");
    })






    // 、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、




    // //下侧导航栏切换
    // $("#tuijian li").each(function(index) {
    //     $(this).click(function() {
    //         $("#tuijian li.lishow").removeClass("lishow");
    //         $(this).addClass("lishow");
    //         $(".indexofcontent.show").removeClass("show");
    //         $(".indexofcontent").eq(index).addClass("show");

    //     })
    // })


    //单例模式
    var obj = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.styles = $('#tuijian li');
        },
        bind: function() {
            var that = this;
            that.styles.each(function(index) {
                $(this).click(function() {
                    $("#tuijian li.lishow").removeClass("lishow");
                    $(this).addClass("lishow");
                    $(".indexofcontent.show").removeClass("show");
                    $(".indexofcontent").eq(index).addClass("show");

                })
            })
        }
    }

    obj.init();

    //单例模式




    //、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、






    //换肤效果设置
    $(".huanfu li").each(function() {
        var colors = $(this).css("backgroundColor");
        $(this).click(function() {
            $("body").css("backgroundColor", colors);
        })
    })


    //回到顶部按钮设置
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#dingbu").css("display", "block");
        } else {
            $("#dingbu").css("display", "none");
        }
    });
    $("#dingbu").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 1000);
        return false;
    })



    //浮动搜索框
    var showHeight = 100;
    $(window).scroll(function() {
        if ($(window).scrollTop() > showHeight) {
            $('.search_float_wrap').slideDown();
        } else if ($(window).scrollTop() < showHeight) {
            $('.search_float_wrap').slideUp();
        }
    })

    //cookie设置

    //换肤设置
    var cookie_skin = $.cookie("myCookieSkin");
    if (cookie_skin) {
        switchSkin(cookie_skin);
    }


    $('.huanfu ul li').click(function() {
        $('.background_img').removeClass('background_1')
        var attrs = $(this).attr('class');

        if (!($('.background_img').hasClass(attrs))) {

            switchSkin(attrs);
            window.location.reload();
        }

        // console.log('reolad')
    })

    function switchSkin(skinName) {
        $(".background_img").addClass(skinName);
        $.cookie("myCookieSkin", skinName, { expires: 10 });
    }
})
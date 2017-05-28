$(document).ready(function() {
    imgLocation();

    var dataImg = { "data": [{ "src": "pic0.jpg" }, { "src": "pic1.jpg" }, { "src": "pic2.jpg" }, { "src": "pic4.jpg" }, { "src": "pic5.jpg" }, { "src": "pic6.jpg" }, { "src": "pic7.jpg" }, { "src": "pic8.jpg" }, { "src": "pic9.jpg" }, { "src": "pic10.jpg" }, ] }
    window.onscroll = function() {
            if (scrollside()) {
                $.each(dataImg.data, function(index, value) {
                    var box = $("<div>").addClass("box").appendTo($(".container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src", "../image/" + $(value).attr("src")).appendTo(content);
                })
                imgLocation();
            }
        }
        //页面size改变时自动重新排版
    $(window).resize(function() {
        window.location.reload();    	
    })
})


function addpic() {
    if (scrollside()) {
    	console.log("change");
    	var dataImg = { "data": [{ "src": "pic0.jpg" }, { "src": "pic1.jpg" }, { "src": "pic2.jpg" }, { "src": "pic4.jpg" }, { "src": "pic5.jpg" }, { "src": "pic6.jpg" }, { "src": "pic7.jpg" }, { "src": "pic8.jpg" }, { "src": "pic9.jpg" }, { "src": "pic10.jpg" }, ] }
        $.each(dataImg.data, function(index, value) {
            var box = $("<div>").addClass("box").appendTo($(".container"));
            var content = $("<div>").addClass("content").appendTo(box);
            $("<img>").attr("src", "../image/" + $(value).attr("src")).appendTo(content);
        })
        imgLocation();
        console.log($(".box").length);
    }
}

//加载页面操作
function scrollside() {
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();
    return lastboxHeight < scrollHeight + documentHeight;
}


//对页面上的图片进行排版
function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width() / boxWidth);
    var boxArr = [];
    box.each(function(index, value) {
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;
        } else {
            var minboxHeight = Math.min.apply(null, boxArr);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left,
            })
            boxArr[minboxIndex] += box.eq(index).height();
        }
    })
}

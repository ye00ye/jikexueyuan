//打开后台页面的时候，发送请求，更新新闻列表
$(document).ready(function() {
    var $newstable = $("#newstable tbody");
    refreshNews();

    // 添加新闻
    $("#tijiao").click(function(e) {
        e.preventDefault();
        //输入判断
        if ($("#newstitle").val() === "" ||
            $("#newsimg").val() === "" ||
            $("#newssrc").val() === "" ||
            $("#newstime").val() === "") {
            if ($("#newstitle").val() === "") {
                $("#newstitle").parent().addClass("has-error");
            } else {
                $("#newstitle").parent().removeClass("has-error");
            }
            if ($("#newsimg").val() === "") {
                $("#newsimg").parent().addClass("has-error");
            } else {
                $("#newsimg").parent().removeClass("has-error");
            }
            if ($("#newssrc").val() === "") {
                $("#newssrc").parent().addClass("has-error");
            } else {
                $("#newssrc").parent().removeClass("has-error");
            }
            if ($("#newstime").val() === "") {
                $("#newstime").parent().addClass("has-error");
            } else {
                $("#newstime").parent().removeClass("has-error");
            }
        } else {
            var jsonNews = {
                newstitle: $("#newstitle").val(),
                newssrc: $("#newssrc").val(),
                newsimg: $("#newsimg").val(),
                newstype: $("#newstype").val(),
                newstime: $("#newstime").val()
            };
            //提交添加
            $.ajax({
                url: "admin/insert",
                type: "post",
                data: jsonNews,
                dataType: "json",
                success: function(data) {
                    console.log('成功了');
                    refreshNews();
                    $("#newstitle").val('');
                    $("#newssrc").val('');
                    $("#newsimg").val('');
                    $("#newstype").val('');
                    $("#newstime").val('');
                }
            })
        }
    })

    // 删除新闻的功能
    var deleteId = null;
    $newstable.on("click", ".btn-danger", function(e) {
        $("#deleteModal").modal('show');
        deleteId = $(this).parent().prevAll().eq(5).html();

    })
    $("#deleteModal #confirmDelete").click(function(e) {
        if (deleteId) {
            $.ajax({
                url: "admin/delete",
                type: 'post',
                data: { newsid: deleteId },

                success: function() {
                    console.log("删除成功");
                    $("#deleteModal").modal("hide");
                    refreshNews();
                },
                error: function() {
                    console.log("shibai");
                }
            })
        }
    })


    // 编辑新闻的功能
    var updateId = null;
    $newstable.on("click", ".btn-primary", function(e) {
        $("#updateModal").modal('show');
        updateId = $(this).parent().prevAll().eq(5).html();
        $.ajax({
            url: 'admin/curnews',
            type: 'get',
            dataType: "json",
            data: { newsid: updateId },

            success: function(data) {
                console.log(data);
                $("#unewstitle").val(data[0].newstitle);
                $("#unewstype").val(data[0].newstype);

                console.log($("#unewstype").val());

                $("#unewsimg").val(data[0].newsimg);
                $("#unewssrc").val(data[0].newssrc);
                var utime = data[0].newstime.split('T')[0];
                $("#unewstime").val(utime);

            },
            error: function() {
                console.log("fail");
            }
        })
    })
    $("#updateModal #confirmUpdate").click(function(e) {
        $.ajax({
            url: 'admin/update',
            type: 'get',
            data: {
                newstitle: $("#unewstitle").val(),
                newstype: $("#unewstype").val(),
                newsimg: $("#unewsimg").val(),
                newssrc: $("#unewssrc").val(),
                newstime: $("#unewstime").val(),
                id: updateId
            },
            success: function(data) {
                console.log("成功了");
                $("#updateModal").modal("hide");
                refreshNews();
            },
            error: function() {
                console.log("failssss");
            }
        })
    })








    function refreshNews() {
        $newstable.empty();
        $.ajax({
            type: "get",
            url: 'admin/getnews',
            dataType: "json",
            success: function(data) {
                $.each(data, function(index, item) {
                    var $tdid = $("<td>").html(item.id);
                    var $tdtype = $("<td>").html(item.newstype);
                    var $tdimg = $("<td>").html(item.newsimg);
                    var $tdtitle = $("<td>").html(item.newstitle);
                    var $tdtime = $("<td>").html((item.newstime).split('T')[0]);
                    var $tdsrc = $("<td>").html(item.newssrc);
                    var $btnupdate = $("<button>").addClass("btn btn-primary btn-sm").html("编辑");
                    var $btndelete = $("<button>").addClass("btn btn-danger btn-sm").html("删除");
                    var $tdctrl = $("<td>");
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $("<tr>");
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdsrc, $tdtime, $tdctrl);
                    $newstable.append($tRow);
                })

            },
            error: function(data) {
                console.log("fail");
            }
        })
    }
})
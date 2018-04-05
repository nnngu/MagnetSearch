$(function () {
    $("#btn1").attr("checked","checked");
    $("#btn_search").click(function () {
        var site = $("input[name='site']:checked").val();
        var keyword = $("#keyword").val();

        if (site == "种子搜") {
            // 去"种子搜"收集磁力链接
            $("#result").attr('src', "https://www.zhongziso.com/list/" + keyword + "/1");
        }
        if (site == "磁力吧") {
            // 去"磁力吧"收集磁力链接
            $("#result").attr('src', "https://www.ciliba.org/s/"+ keyword +".html");
        }
        if (site == "cililian") {
            // 去"cililian"收集磁力链接
            $("#result").attr('src', "http://cililianc.com/list/"+ keyword +"/1.html");
        }
        if (site == "屌丝搜") {
            // 去"屌丝搜"收集磁力链接
            $("#result").attr('src', "http://www.diaosisou.org/list/"+ keyword +"/1");
        }
    });

});


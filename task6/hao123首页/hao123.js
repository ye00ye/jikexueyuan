//页面加载完毕后，启用保存的Cookie设置。
window.onload = function() { //加载getCookie
    var shouye_post = document.getElementsByClassName("shouye_post");
    for (var temp = 0; temp < shouye_post.length; temp++) {
        shouye_post[temp].style['background-color'] = getCookie("myCookie");
        document.getElementById("bodys").style['background-color'] = getCookie("myCookie");
    }
}

//改变背景颜色,并将设置存入Cookie中  
var lis = document.getElementsByClassName("banner");
for (var i = 0; i < lis.length; i++) {
    var liItem = lis[i];
    liItem.onclick = function() {
        var shouye_post = document.getElementsByClassName("shouye_post");
        for (var temp = 0; temp < shouye_post.length; temp++) {
            shouye_post[temp].style['background-color'] = this.id;
            document.getElementById("bodys").style['background-color'] = this.id;
            createCookie("myCookie", this.id, 10); //创建createCookie
        }

    }
}




//百度搜索框里面，左边的下拉框click事件，当点击时，下拉框出现
var lefts = document.getElementById("search-left");
lefts.addEventListener('click', function() {
    document.getElementById("up-to-down").style['background-position'] = "319px 197px"
}, false);
lefts.addEventListener('click', function() {
    document.getElementById("baidu-ul").style['display'] = "block"
}, false);

var baiduuls = document.getElementById("baidu-ul");
baiduuls.addEventListener("click", function() {
    document.getElementById("baidu-ul").style['display'] = "none"
}, false);
baiduuls.addEventListener("click", function() {
    document.getElementById("up-to-down").style['background-position'] = "319px 207px"
}, false);

function tosubmits() {
    document.getElementById("baidu").submit();
}

// Cookie代码
//创建Cookie
function createCookie(name, value, days, path, domain, secure) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = date.toGMTString();
    } else {
        expires = "";
    }
    cookieString = name + "=" + escape(value);
    if (expires) {
        cookieString += "; expires=" + expires;
    }
    if (path) {
        cookieString += "; path=" + escape(path);
    }
    if (domain) {
        cookieString += "; domain=" + escape(domain);
    }
    if (secure) {
        cookieString += "; secure";
    }
    document.cookie = cookieString;
}
//读取Cookie
function getCookie(name) {
    var nameEquals = name + "=";
    var crumbs = document.cookie.split(";");
    for (var i = 0; i < crumbs.length; i++) {
        var crumb = crumbs[i];
        if (crumb.indexOf(nameEquals) == 0) {
            return unescape(crumb.substring(nameEquals.length, crumb.length));
        }
    }
    return null;
}
//删除Cookie
function deleteCookie(name) {
    createCookie(name, "", -1);
}
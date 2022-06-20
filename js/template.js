function template(id,data) {
    // 1、获取html模板
    var htmlStr = document.getElementById(id).innerHTML;

    // 2、将data中的数据放置在html对应的位置
    var pattern = /{{\s*([a-zA-Z]+)\s*}}/

    var patternResult = null
    while(patternResult = pattern.exec(htmlStr)) {
        htmlStr = htmlStr.replace(patternResult[0],data[patternResult[1]])
    }

    // 3、返回数据渲染后的html模板
    return htmlStr
}
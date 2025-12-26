$(function(){
    //菜单默认隐藏
    $('#popup-menu').hide()
    //加号被点击，菜单切换显示
    $('#add').click(function(){
        $('#popup-menu').toggle(200)
    })

    //菜单被点击，菜单和三角都隐藏
    $('#popup-menu').click(function(){
        $('#popup-menu,#samll-triangle-up').hide()
    })
})
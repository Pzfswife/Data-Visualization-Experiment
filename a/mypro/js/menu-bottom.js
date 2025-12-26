//程序入口
$(() => {
    //jquery 采用样式表形式获取对象
    //点击菜单选项，控制面板切换
    //$('.menu-div')获取四个对象
    //console.log($('.menu-div))
    //选项的单击
    $('.menu-div').click(function(){
        //隐藏朋友圈
        $('#moments').hide()
        $('.menu-div').each(function(){
            //将该元素中的img的src 改为 ican-mormal
            //$(this)当前这个对象
            //find('img')找其中的对象
            //attr()修改属性值
            $(this).find("img").attr('src',$(this).data('icon-mormal'))
            //console.log($(this).data('icon-mormal'))
        })
        //点到的选项设置为 press
        let iconPress = $(this).data('icon-press')
        //console.log(iconPress)
        $(this).find('img').attr('src',iconPress)

        //切换页面
        let target=$(this).data('target')
        //console.log(target)
        //循环四个页面
        $('#wrap-chat, #wrap-add-friend, #wrap-discovery, #wrap-me').each(function(){
            //$(this)[0] jq转js对象
            //如果和target
            if($(this)[0].id == target){
                $(this).show(200)
            }else{
                $(this).hide()
            }
        })
    })

})
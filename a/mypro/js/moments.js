$(function(){
    //console.log(2)
    //默认隐藏朋友圈页面
    $('#moments').hide()

    //发现页朋友圈选项单击
    $('#moment').click(function(){
        //隐藏发现页，显示朋友圈页面
        $('#wrap-discovery').hide()
        $('#moments').show(200)
    })

    //图片初始化
    $('.moment-content-imgs').each(function(){
        //console.log($(this))
        //获得user-imgs对象
        let imgs = $(this).find('.user-imgs')
        if(imgs.length === 1){
            //console.log(`url('${imgs.data('img')}')`)
            let url = `url('${imgs.data('img')}')`
            //指定背景图给user-imgs
            imgs.css('background-image',url)
            //让他采用user-imgs-single单图样式
            imgs.addClass('user-imgs-single')
        }else if(imgs.length > 1){  //多张图
            imgs.each(function(i,img){
                let url = `url('${$(img).data('img')}')`
                $(img).css('background-image',url)
                $(img).addClass('user-imgs-multi')
            })

        }else{
            //什么都不做
        }
           

    })


    //评论层隐藏
    $('.moment-function-control').hide()

    $('.moment-function-right').click(function(){
        let control=$(this).find('.moment-function-control')
        $(control).toggle(100)
    })
})
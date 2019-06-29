;
(function ($) {
    /*顶部按钮hover效果 */
    $('.nav-content').on('mouseenter', function () {
        $('.nav-content').stop().show()
    })
    $('.nav-content').on('mouseleave', function () {
        $('.nav-content').stop(false,true).slideUp(100)
    })
    $('.header-nav .hover').each(function (index, val) {
        $(this).on('mouseenter', function () {
            $('.nav-content').stop(false,false).slideDown()
            buildNavHtml(data[index])
        })
        $(this).on('mouseleave', function () {
            $('.nav-content').stop(false,true).slideUp(100)
        })
    })
    
    /** 生成nav列表*/
    function buildNavHtml(val) {
        if(val == ''){
            return
        }else{
            var list = val.list
        }
        
        var html = '';
        html += '<div class="center">'
        html += '    <div class="center_left">'
        $.each(list,(index,val)=>{
            html += '        <ul>'
            $.each(val,(i,val)=>{
                html += '            <li>'
                html += '            <a href="#">'+val+'</a>'
                html += '            </li>'
            })
            html += '        </ul>'
        })
        html += '    </div>'
        html += '    <div class="center_right">'
        html += '        <div class="nav-img">'
        html += '            <img src="'+val.img+'" alt="">'
        html += '            <p>'+val.msg+'</p>'
        html += '        </div>'
        html += '    </div>'
        html += '</div>'
        $('.nav-content').html(html)
    }
    /**顶部按钮效果结束 */
})(jQuery);
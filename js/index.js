;
(function ($) {
    /*顶部按钮hover时下拉菜单效果 */
    $(document).ready(function () {
        $('.nav-content').on('mouseenter', function () {
            $('.nav-content').stop().show()
        })
        $('.nav-content').on('mouseleave', function () {
            $('.nav-content').stop(false, true).slideUp(0)
        })
        $('.header-nav .hover').each(function (index, val) {
            $(this).on('mouseenter', function () {
                $('.nav-content').stop(false, false).slideDown()
                buildNavHtml(data1[index])
            })
            $(this).on('mouseleave', function () {
                $('.nav-content').stop(false, true).slideUp(0)
            })
        })
    })

    /** 生成nav列表*/
    function buildNavHtml(val) {
        if (val == '') {
            return
        } else {
            var list = val.list
        }

        var html = '';
        html += '<div class="center">'
        html += '    <div class="center_left">'
        $.each(list, (index, val) => {
            html += '        <ul>'
            $.each(val, (i, val) => {
                html += '            <li>'
                html += '            <a href="#">' + val + '</a>'
                html += '            </li>'
            })
            html += '        </ul>'
        })
        html += '    </div>'
        html += '    <div class="center_right">'
        html += '        <div class="nav-img">'
        html += '            <img src="' + val.img + '" alt="">'
        html += '            <p>' + val.msg + '</p>'
        html += '        </div>'
        html += '    </div>'
        html += '</div>'
        $('.nav-content').html(html)
    }
    /**顶部按钮hover时下拉菜单效果结束 */
    
    $(document).ready(function () {
        buildTabHtml()
    })
    /**选项卡产品部分节点生成 */
    function buildTabHtml() {
        var html = '';
        $.each(data2,function(index,val){
            html += '<li>'
            html += '    <img src="'+val.img+'" alt="">'
            html += '    <div class="mask">'
            html += '        <h1>'+val.h1+'</h1>'
            html += '        <p></p>'
            html += '        <p>'+val.p+'</p>'
            html += '        <a href="#">more>></a>'
            html += '    </div>'
            html += '</li>'
        })

        $('.centre .container .centent ul').html(html)
        
    }
})(jQuery);
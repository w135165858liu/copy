;
(function ($) {
    /**节流操作 */
    function throttle(fn, wait) {
        var lastTime = Date.now();
        return function () {
            var currentTime = Date.now();
            if (currentTime - lastTime > wait) {
                fn();
                lastTime = Date.now();
            }
        }
    }
    /**单例模式 */
    function getSingle(fn){
		var obj = null;
		return function(){
			if(!obj){
				obj = fn();
			}
			return obj;
		}
    }

    /*顶部按钮hover时下拉菜单效果 */
    $(document).ready(function () {
        sildeInUp('.centre>.content .item');
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
    /**中间部分选项卡 */
    $('.centre .tab-title .tab-item').on('click', function () {
        var name = $(this).find('a')[0].innerText
        var $elem = $(this).siblings();
        var num = $(this).index();
        buildSolutionHtml(num, name);
        addClass(this, $elem);
    })
    $(document).ready(function () {
        buildSolutionHtml(1, '产品')
    })

    /**选项卡部分节点生成 */
    function buildSolutionHtml(num, name) {
        var html1 = '';
        html1 += '<div class="describe">'
        html1 += '    <h1>' + data2[num][0].h1 + '</h1>'
        html1 += '    <p>' + data2[num][0].p1 + '</p>'
        html1 += '    <p></p>'
        html1 += '    <p>' + data2[num][0].p2 + '</p>'
        html1 += '</div>'
        html1 += '<div class="tab-content">'
        if (data2[num][0].class) {
            html1 += '    <ul class="service">'
        } else {
            html1 += '    <ul>'
        }
        $.each(data2[num][1], function (index, val) {
            html1 += '<li>'
            html1 += '    <img src="' + val.img + '" alt="">'
            html1 += '    <div class="mask">'
            html1 += '        <h1>' + val.h1 + '</h1>'
            html1 += '        <p></p>'
            html1 += '        <p>' + val.p + '</p>'
            html1 += '        <a href="#">more>></a>'
            html1 += '    </div>'
            html1 += '</li>'
        })
        html1 += '    </ul>'
        html1 += '</div>'
        $('.centre .container .centent').html(html1);
        /**左侧边栏节点生成 */
        var html2 = '';
        html2 += '<li class="sidebar-item first">'
        html2 += '    <a href="#">'
        html2 += '        ' + name + ''
        html2 += '    </a>'
        html2 += '</li>'
        $.each(data1[num].list, (index, val) => {
            $.each(val, (i, val) => {
                html2 += '<li class="sidebar-item">'
                html2 += '   <a href="#">' + val + '</a>'
                html2 += '</li>'
            })
        })
        $('.l_sidebar .sidebar-list').html(html2)
    }

    /**添加Class共同方法 */
    function addClass(elem, $elem) {
        $(elem).addClass('active');
        $($elem).removeClass('active');
    }
    /**底部联系方式按钮放上去效果 */
    $('.footer .content div .hov').on('mouseover', function () {
        var $elem = $(this).siblings()
        addClass(this, $elem)
    })
    $('.footer .content div .img1').on('mouseover', function () {
        $('.footer .content .call-me-list').show()
        $('.footer .content .img-box').hide()
    })
    $('.footer .content div .img2').on('mouseover', function () {
        $('.footer .content .call-me-list').hide()
        $('.footer .content .img-box').show()
    })
    /**客户案例动画设置 */
    function sildeInUp(dom) {
        var wScrollTop = $(window).scrollTop();
        var innerHeight = $(window).innerHeight()
        setTimeout(function () {
            $(''+dom+'').each(function (index, val) {
                var top =  $(this).css('top')
                var offsetTop = $(val).offset().top;
                var clienTop = wScrollTop+innerHeight+parseInt(top)
                if (clienTop >= offsetTop && top != 0) {
                    $(this).animate({'top':'0'},550)
                }
            })
        }, 0)
    }
    /**页面滚动*/
    $(window).on('scroll', throttle(function () {
        /**左侧边导航栏效果 */
        var winY = $(window).scrollTop() || window.scrollY
        /**左侧边导航栏效果  */
        if (winY == 0) {
            $('.l_sidebar').css('left', '0px');
            $('.sidebar-arrows').fadeOut();

        } else {
            $('.l_sidebar').css('left', '-130px');
            $('.sidebar-arrows').fadeIn();
        }
        /**右侧边导航栏效果 */
        if (winY >= 300) {
            $('.goTop').fadeIn()
        } else {
            $('.goTop').fadeOut()
        }
        sildeInUp('.centre>.content .item')
    },0))
    /**右侧边导航栏效果goTop效果 */
    $('.goTop').on('click', function () {
        $("body,html").animate({
                scrollTop: 0
            },
            330
        );
    })



})(jQuery);
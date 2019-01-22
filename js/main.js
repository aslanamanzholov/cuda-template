$(window).scroll(function () {
    $(this).scrollTop() > 400 ? $("#jsScrollTop").fadeIn() : $("#jsScrollTop").fadeOut();
    $(this).scrollTop() > 100 ? $("header").addClass('scrolled') : $("header").removeClass('scrolled');

    var map_url = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A44dddfbf675a4dda4a989564bebe796c800faf725beb31acc722bf9e260b8268&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true';
    var map_id = 'map';
    var map = $('#' + map_id);
    if ($(window).scrollTop() > 800 && !map.hasClass('loaded')) {
        map.addClass('loaded');
        $('head').append($('<script>').attr('src', map_url + '&id=' + map_id));
    }
})

$(document).ready(function () {
    $("#jsScrollTop, .logo").click(function (e) {
        return $("body,html").animate({
            scrollTop: 0
        }, 400), !1
    });
})
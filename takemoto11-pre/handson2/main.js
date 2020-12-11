$(function () {
    // ハンバーガーメニュー
    $(".ham-btn").click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".ham-menu").addClass("active");
        } else {
            $(".ham-menu").removeClass("active");
        }
    });
    $(".ham-list").click(function () {
        $(".ham-menu,.ham-btn").removeClass("active");
    });
})
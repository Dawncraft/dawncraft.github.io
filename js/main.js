$(document).ready(function() {
    $(window).scroll(function() {
        // 展示或隐藏回到顶部按钮
        if ($(this).scrollTop() > 500) {
            $('.gotop').fadeIn(300);
        } else {
            $('.gotop').fadeOut(300);
        }
    });
    // 回到顶部
    $('.gotop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
    });
});
// 分享
var nativeShare = new NativeShare();
nativeShare.setShareData({
    icon: "https://pic3.zhimg.com/v2-080267af84aa0e97c66d5f12e311c3d6_xl.jpg",
    link: "https://dawncraft.github.io/",
    title: "Dawncraft",
    desc: "曙光工艺工作室 - 分享功能测试",
    from: "@wc",
})
// 生成二维码
$('#qrcode').qrcode({render: "canvas", width: 128, height: 128, text: "https://dawncraft.github.io/"});

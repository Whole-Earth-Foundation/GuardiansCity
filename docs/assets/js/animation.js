
// common
// ------------------------------------------------------------------------------------
var wh = $(window).height();
var ww = $(window).width();
$(window).on("resize", function() {
	wh = $(window).height();
	ww = $(window).width();
});

$(window).on('load', function() {
    setTimeout(function() {
        $(".loading").addClass("anim-active");
    }, 100);
    setTimeout(function() {
        $(".site-header .inner .keyvisual").addClass("anim-active");
        $(".site-header .inner .keyvisual .keyvisual_text").addClass("anim-active");
        $(".site-header .inner .branding div .txt span").addClass("anim-active");
    }, 300);
    setTimeout(function() {
        $(".site-header .inner .branding .site-title").addClass("anim-active");
    }, 500);
    setTimeout(function() {
        $(".site-header .inner .keyvisual .btn-pop").addClass("anim-active");
        $(".navigation .nav-toggle-wrap").addClass("anim-active");
    }, 600);
    setTimeout(function() {
        $(".site-header .inner .btn-line").addClass("anim-active");
    }, 700);
    setTimeout(function() {
        $(".site-header .inner .copy").addClass("anim-active");
        $(".site-header .nav-scroll").addClass("anim-active");
    }, 900);
});

var st = $(window).scrollTop();
$(window).on('load scroll resize', function() {
    st = $(window).scrollTop();
    if(st > $(".main-contents #about").offset().top - (wh/2)) {
        $(".main-contents #about header h1").addClass("anim-active");
        setTimeout(function() {
            $(".main-contents #about .contents .content.con-01 figure").addClass("anim-active");
        }, 300);
    }
    if(st > $(".main-contents #about .contents .content.con-01 .txt").offset().top - (wh/3*2)) {
        $(".main-contents #about .contents .content.con-01 .txt .site-title").addClass("anim-active");
        setTimeout(function() {
            $(".main-contents #about .contents .content.con-01 .txt p").addClass("anim-active");
        }, 300);
    }
    if(st > $(".main-contents #about .contents .content.con-02").offset().top - (wh/3*2)) {
        $(".main-contents #about .contents .content.con-02 > *:nth-child(1) .img-01").addClass("anim-active");
        $(".main-contents #about .contents .content.con-02 > *:nth-child(1) .txt strong").addClass("anim-active");
        setTimeout(function() {
            $(".main-contents #about .contents .content.con-02 > *:nth-child(1) .txt h2").addClass("anim-active");
            $(".main-contents #about .contents .content.con-02 > *:nth-child(2) .img-01").addClass("anim-active");
            $(".main-contents #about .contents .content.con-02 > *:nth-child(1) .img-02").addClass("anim-active");
        }, 300);
        setTimeout(function() {
            $(".main-contents #about .contents .content.con-02 > *:nth-child(1) .txt p").addClass("anim-active");
            $(".main-contents #about .contents .content.con-02 > *:nth-child(2) .img-02").addClass("anim-active");
        }, 600);
    }
    if(st > $(".main-contents #how-to-join .contents").offset().top - (wh/3*2)) {
        $(".main-contents #how-to-join .contents header h1").addClass("anim-active");
        setTimeout(function() {
            $(".main-contents #how-to-join .contents .content ul.list-step li:nth-child(1)").addClass("anim-active");
        }, 300);
    }
    if(st > $(".main-contents #how-to-join .contents .content ul.list-step li:nth-child(2)").offset().top - (wh/3*2)) {
        $(".main-contents #how-to-join .contents .content ul.list-step li:nth-child(2)").addClass("anim-active");
    }
    if(st > $(".main-contents #how-to-join .contents .content ul.list-step li:nth-child(3)").offset().top - (wh/3*2)) {
        $(".main-contents #how-to-join .contents .content ul.list-step li:nth-child(3)").addClass("anim-active");
        setTimeout(function() {
            $(".main-contents #how-to-join .img-01").addClass("anim-active");
        }, 300);
    }
    if(st > $(".main-contents #how-to-play").offset().top - (wh/3*2)) {
        $(".main-contents #how-to-play h1").addClass("anim-active");
    }
    if(st > $(".main-contents #how-to-play .contents .con-01").offset().top - (wh/3*2)) {
        $(".main-contents #how-to-play .contents .con-01 h3").addClass("anim-active");
        setTimeout(function() {
           $(".main-contents #how-to-play .contents .con-01 ul li:nth-child(1)").addClass("anim-active");
        }, 200);
        setTimeout(function() {
            $(".main-contents #how-to-play .contents .con-01 ul li:nth-child(2)").addClass("anim-active");
        }, 400);
    }
    if(st > $(".main-contents #how-to-play .contents .con-02").offset().top - (wh/3*2)) {
        $(".main-contents #how-to-play .contents .con-02").addClass("anim-active");
    }
    if(st > $(".main-contents #notes").offset().top - (wh/3*2)) {
        $(".main-contents #notes .sec-header h1").addClass("anim-active");
        setTimeout(function() {
            $(".main-contents #notes .sec-header h3").addClass("anim-active");
        }, 200);
        setTimeout(function() {
            $(".main-contents #notes .sec-header p").addClass("anim-active");
        }, 400);
        setTimeout(function() {
            $(".main-contents #notes .contents .con-01 ul").addClass("anim-active");
        }, 600);
        setTimeout(function() {
            $(".main-contents #notes .link_line").addClass("anim-active");
        }, 800);
    }
    if(st > $(".main-contents #story").offset().top - (wh/3*2)) {
        $(".main-contents #story .sec-header h1").addClass("anim-active");
        setTimeout(function() {
            $(".main-contents #story .contents .con-01 img").addClass("anim-active");
        }, 200);
        setTimeout(function() {
            $(".main-contents #story .contents .con-01 p").addClass("anim-active");
        }, 400);
        setTimeout(function() {
            $(".main-contents #story .contents .con-01 .btn-line").addClass("anim-active");
        }, 600);
    }
    if(st > $(".main-contents #event").offset().top - (wh/3*2)) {
        $(".main-contents #event").addClass("anim-active");
        setTimeout(function() {
            $(".main-contents #event .contents").addClass("anim-active");
        }, 200);
    }
});
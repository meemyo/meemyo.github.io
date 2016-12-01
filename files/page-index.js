// INIT
$(function(){
    initPage();
    initAppSquare();
});

function initPage(){
        // CAROUSEL
  		$("#hero-carousel").hammer().on('swipeleft', function(e) {
            if($(this).width() < 768)
    		    $(this).carousel('next');
        });

	    $("#hero-carousel").hammer().on('swiperight', function(e) {
            if($(this).width() < 768)
    		    $(this).carousel('prev');
	    });

        $(".carousel-control").mouseenter(function() {
            // $(this).css("opacity", 1.0);
            if($(this).css("opacity") != "1.0"){
                $(this).animate({
                    opacity:1.0
                }, 100);
            }
        });

        $(".carousel-control").mouseleave(function() {
            // $(this).css("opacity", 1.0);
            if($(this).css("opacity") != "0.0"){
                $(this).animate({
                    opacity:0.0
                }, 100);
            }
        });

	    // $("#hero-carousel").mouseenter(function() {
        //     $(this).children(".carousel-control").animate({
        //         opacity:1.0
        //     }, 100);
        // });
        //
        // $("#hero-carousel").mouseleave(function() {
        //     $(this).children(".carousel-control").animate({
        //             opacity:0.0
        //         }, 100);
        // });

        $(".carousel-caption").each(function(index, element) {

            var maxWidth = $(element).attr("data-max-width");
            var h2PaddingTop = $(element).attr("data-padding-top");
            var h2PaddingBottom = $(element).attr("data-padding-bottom");
            var h2Element = $(element).children("h2");

            $(element).children("img").css("max-width", maxWidth);

            h2Element.css("font-size", maxWidth);
            h2Element.css("padding-top", h2PaddingTop);
            h2Element.css("padding-bottom", h2PaddingBottom);
        });

        // VIDEO-YOUTUBE
       /* var youtubeName = getYoutubeName();
        var youtubeEmbed = $(".youtube-video-embed");
        var youtubeElement = $(".youtube-video-preview");
        var youtubeOverlay = $(".youtube-video-overlay");
        youtubeElement.attr("src", "images/index/index_youtube_" + youtubeName + ".jpg");
        youtubeEmbed.mouseenter(function() {
            youtubeOverlay.show();
        });

        youtubeEmbed.mouseleave(function() {
            youtubeOverlay.hide();
        });

        youtubeEmbed.hammer().on('tap', function(e){
            modalYoutube(getYoutubeId(youtubeName));
        });*/

        // RESIZE
        resizeElements();
        $(window).load(function() {
            resizeElements();
        });

        $(window).resize(function() {
            resizeElements();
        });
}

function resizeElements() {
        var parentElement = $(window);
        var targetWidth = parentElement.outerWidth();
        var targetHeight;
        if(window.matchMedia("(min-width:768px)").matches)
            targetHeight = 540;
        else
            targetHeight = 405;

        $("#hero-carousel .carousel-image").each(function(index, element) {
            var imageElement = $(element);
            resizeImageElement(imageElement, targetWidth, targetHeight);
            imageElement.css("display", "block");
        });
}

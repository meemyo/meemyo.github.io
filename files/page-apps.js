// INIT
$(function(){
    initAppSquare();
    initPage();
});

function initPage(){

    var youtubeEmbed= $(".youtube-video-embed");
    var youtubeOverlay = $(".youtube-video-overlay");
    youtubeEmbed.mouseenter(function() {
        youtubeOverlay.show();
    });

    youtubeEmbed.mouseleave(function() {
        youtubeOverlay.hide();
    });

    youtubeEmbed.hammer().on("tap", function(e){
        modalYoutube(youtubeEmbed.attr("data-youtube-id"));
    });

    // RESIZE
    resizeElements();
    $(window).load(function() {
        resizeElements();
    });

    $(window).resize(function() {
        resizeElements();
    });

    // MOLDIV APP-LINK
    $(".moldiv-appstore-link").each(function(e){
        $(this).attr("href", "https://itunes.apple.com/app/id608188610");
    });

    $(".moldiv-google-link").each(function(e){
        $(this).attr("href", "https://play.google.com/store/apps/details?id=com.jellybus.Moldiv");
    });

    // ROOKIE CAM
    $(".rookiecam-appstore-link").each(function(e){
        $(this).attr("href", "https://itunes.apple.com/app/id799406905");
    });

    $(".rookiecam-google-link").each(function(e){
        $(this).attr("href", "https://play.google.com/store/apps/details?id=com.jellybus.rookie");
    });

    // PICSPLAY
    $(".picsplay-appstore-link").each(function(e){
        $(this).attr("href", "https://itunes.apple.com/app/id942064355");
    });

    $(".picsplay-google-link").each(function(e){
        $(this).attr("href", "https://play.google.com/store/apps/details?id=com.jellybus.fxfree");
    });
}

function resizeElements() {
    var parentElement = $(window);
    var targetWidth = parentElement.width();
    var targetHeight;
    if(window.matchMedia("(min-width:768px)").matches)
        targetHeight = 600;
    else
        targetHeight = 465;

    // IMAGE
    var imageElement;

    imageElement = $(".apps-hero-background img");
    resizeImageElement(imageElement, targetWidth, targetHeight);
    imageElement.css("display", "block");

     $(".information .background .auto-resize").each(function(e){
        imageElement = $(this);
        resizeImageElement(imageElement, targetWidth, targetHeight);
        imageElement.css("display", "block");
     });

    // GALLERY
    var gridElement = $(".gallery .grid img:first-child");
    if(gridElement.height() != 0){
        targetHeight = $(".gallery").height();
        $(".gallery .background").each(function(e){
           imageElement = $(this);
           resizeImageElement(imageElement, targetWidth, targetHeight);
           imageElement.css("display", "block");
        });
    }

    // MOLDIV 첫번째 배너 예외처리
    var backgroundImageElementWidth = 2000;
    var backgroundWrapElementWidth = backgroundImageElementWidth * 3;

    $(".background .image-wrap").each(function(e){
        var backgroundWrapElement = $(this);
        var informationElement = $(this).parent().parent();
        var contentElement = informationElement.find(".content:first-child");
        var containerElement = contentElement.parent();

        if(contentElement != null && contentElement != undefined)
        {
            var backgroundStandardWidth = 864;
            var backgroundTargetWidth = contentElement.outerWidth();
            var backgroundElement = informationElement.find(".background");
            var backgroundImageElement = backgroundWrapElement.find("img:first-child");
            var backgroundWrapElementLeft = (backgroundElement.width() - backgroundWrapElementWidth) / 2;

            if(backgroundTargetWidth < backgroundStandardWidth)
                backgroundWrapElementLeft -= (backgroundStandardWidth - backgroundTargetWidth) / 2;

            backgroundWrapElement.css("left", backgroundWrapElementLeft);
            backgroundWrapElement.css("margin-left", "0");
        }
    });
}

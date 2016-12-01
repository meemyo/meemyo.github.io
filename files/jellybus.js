// INIT
$(function(){
    initBackground();
    initHeader();
    initFooter();
    initGoogle();
});

function initBackground(){
    $(".background-image").each(function(e){
        var backgroundImageElement = $(this);
        alert("data-src : url('" + backgroundImageElement.attr("data-src") + "')");
        backgroundImageElement.css("background-image", "url('" + backgroundImageElement.attr("data-src") + "')");
    });
}

function initAppSquare(){

    // APP-SQUARE
    // $(".app-square-banner-image").each(function(index, element) {
    //     var childElement = $(element);
    //     var parentElementId = childElement.parent().attr("id");

    //     if(parentElementId.indexOf("moldiv") != -1)
    //         childElement.attr("src", getRandomImageName("images/apps/apps_moldiv"));
    //     else if(parentElementId.indexOf("picsplay") != -1)
    //         childElement.attr("src", getRandomImageName("images/apps/apps_picsplay"));
    //     else if(parentElementId.indexOf("rookiecam") != -1)
    //         childElement.attr("src", getRandomImageName("images/apps/apps_rookiecam"));
    //     else if(parentElementId.indexOf("happyme") != -1)
    //         childElement.attr("src", getRandomImageName("images/apps/apps_happyme"));
    // });

    $(".app-square-button").each(function(index, element) {
        var buttonElement = $(element);
        var imageElement = $(element).parent().find(".app-square-banner-image");
        var childOverlay = buttonElement.parent().find(".app-square-overlay");
        var hasChildLink = buttonElement.is("[href]");

        buttonElement.mouseover(function() {
            childOverlay.css("display", "block");

            // 일정 크기보다 작으면 페이지로 바로 이동
            if(isMobile() && hasChildLink)
                window.location.href = buttonElement.attr("href");
        });

        buttonElement.mouseout(function() {
            childOverlay.css("display", "none");
        });
     });
}

function initHeader(){
    $('#navbar-header .navbar-toggle').on('click', function(e) {
        if(!window.matchMedia("(min-width:768px)").matches){
            if($(this).attr("aria-expanded") == "false"){
                $('#navbar-collapse .dropdown').addClass("open");
                $('#navbar-collapse .dropdown-toggle').attr("aria-expanded", "true");
                $('#navbar-collapse .dropdown').on('hide.bs.dropdown', function () {
                    return false;
                });

                setTimeout(function(){
                    $('#navbar-collapse .dropdown').off('hide.bs.dropdown');
                    $('#navbar-collapse .dropdown').on('hide.bs.dropdown', function () {
                        return true;
                    });
                }, 100);
            }
            else {
                $('#navbar-collapse .dropdown').on('hide.bs.dropdown', function () {
                    return false;
                });

                setTimeout(function(){
                    $('#navbar-collapse .dropdown').removeClass("open");
                    $('#navbar-collapse .dropdown-toggle').attr("aria-expanded", "false");
                    $('#navbar-collapse .dropdown').off('hide.bs.dropdown');
                    $('#navbar-collapse .dropdown').on('hide.bs.dropdown', function () {;
                        return true;
                    });
                }, 300);
            }
        }
    });
}

function initFooter(){

}

function initGoogle(){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-19476899-1', 'auto');
    ga('send', 'pageview');
}

function modalYoutube(youtubeId){

    var html = "";

    html += '<div id=\"modal-youtube\"><div class="modal-position"><div class="modal-player">';
    html += '<iframe src="https://www.youtube.com/embed/' + youtubeId + '" frameborder="0" allowfullscreen></iframe>';
    html += '</div></div></div>';

    $("body").append(html);
    $("html").css({
       "overflow": "hidden",
       "height": "100%"
    });

    $("#modal-youtube").hammer().on('tap', function(e) {
        $("html").css({
            "overflow": "auto",
            "height": "auto"
        });

        $(this).remove();
    });
}

function resizeImageBackground(element, targetWidth, targetHeight){
    var naturalWidth = element.attr("data-width");
    var naturalHeight = element.attr("data-height");
    var imageWidth = targetWidth;
    var imageHeight = imageWidth * naturalHeight / naturalWidth;

    if(imageHeight < targetHeight){
        imageHeight = targetHeight;
        imageWidth = imageHeight * naturalWidth / naturalHeight;
    }

    element.css("background-size",
                imageWidth + "px " +
                imageHeight + "px");

    var hasImageHorizontalAlignAttribute = element.is("[data-ratio]");
    var hasImageVerticalAlignAttribute = element.is("[data-vertical-ratio]");
    var imageHorizontalAlign = 0.5;
    var imageVerticalAlign = 0.5;

    if(hasImageHorizontalAlignAttribute)
        imageHorizontalAlign = element.attr("data-ratio");

    if(hasImageVerticalAlignAttribute)
        imageVerticalAlign = element.attr("data-vertical-ratio");

    var hasImageUrl = element.is("[data-url]");
    if(hasImageUrl){
        var imageUrl =  element.attr("data-url");
        if(element.css("background-image") != imageUrl)
            element.css("background-image", imageUrl);
    }

    element.css("background-position",
                (targetWidth - imageWidth) * imageHorizontalAlign + "px " +
                (targetHeight - imageHeight) * imageVerticalAlign + "px");
}

function resizeAbsoluteElement(element, targetWidth, targetHeight) {
    var naturalWidth = element.attr("data-width");
    var naturalHeight = element.attr("data-height");
    var imageWidth = targetWidth;
    var imageHeight = imageWidth * naturalHeight / naturalWidth;

    if(imageHeight < targetHeight){
        imageHeight = targetHeight;
        imageWidth = imageHeight * naturalWidth / naturalHeight;
    }

    element.width(imageWidth);
    element.height(imageHeight);

    var hasImageHorizontalAlignAttribute = element.is("[data-ratio]");
    var hasImageVerticalAlignAttribute = element.is("[data-vertical-ratio]");
    var imageHorizontalAlign = 0.5;
    var imageVerticalAlign = 0.5;

    if(hasImageHorizontalAlignAttribute)
        imageHorizontalAlign = element.attr("data-ratio");

    if(hasImageVerticalAlignAttribute)
        imageVerticalAlign = element.attr("data-vertical-ratio");

    element.css("left", (targetWidth - imageWidth) * imageHorizontalAlign);
    element.css("top", (targetHeight - imageHeight) * imageVerticalAlign);
}

function resizeImageElement(element, targetWidth, targetHeight) {
    resizeAbsoluteElement(element, targetWidth, targetHeight);
}

function resizeBackgroundElement(element, targetWidth, targetHeight){
    resizeAbsoluteElement(element, targetWidth, targetHeight);
    element.css("background-size", element.width() + "px " + element.height() + "px");
}

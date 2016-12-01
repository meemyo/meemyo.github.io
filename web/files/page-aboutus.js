// JavaScript Document
$(function(){
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
            modalYoutube("MoUb5XndIr4");
        });

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

        var parentElement = $("#aboutus-member");
        var parentElementWidth = parentElement.width();
        var parentElementX = (parentElement.innerWidth() - parentElement.width()) / 2;
        var memberElements = $(".member");
        var memberElementFirstChild = $(".member:first-child");

        var targetWidth = memberElementFirstChild.width();
        var targetHeight = memberElementFirstChild.height();
        var targetSize = Math.floor(parentElement.width() / targetWidth);
        var targetMargin = targetWidth * 0.185;
        var memberSize = memberElements.length;

        if(targetSize > 4)
            targetSize = 4;

        var targetLineMargin = (parentElement.width() - (targetWidth * targetSize)) / (targetSize - 1);
        var targetLineSize = Math.ceil(memberSize / targetSize);

        if(targetLineMargin < 30){
            targetSize --;

            targetLineMargin = (parentElement.width() - (targetWidth * targetSize)) / (targetSize - 1);
            targetLineSize = Math.ceil(memberSize / targetSize);
        }

        parentElement.height(targetHeight * targetLineSize);

        memberElements.each(function(index, e){
            var x = index % targetSize;
            var y = Math.floor(index / targetSize);

            if(targetSize != 1) {
                if(targetSize != 2){
                    if(x == targetSize - 1)
                        $(e).css("left", parentElementWidth - targetWidth + parentElementX);
                    else
                        $(e).css("left", (targetWidth + targetLineMargin) * x + parentElementX);

                    $(e).css("top", targetHeight * y);
                }
                else if(targetSize == 2){
                    if(x == 0)
                        $(e).css("left", parentElementWidth / 2 - targetWidth - targetMargin + parentElementX);
                    else
                        $(e).css("left", parentElementWidth / 2 + targetMargin + parentElementX);

                    $(e).css("top", targetHeight * y);
                }
            }
            else {
                $(e).css("left", (parentElementWidth - targetWidth) / 2.0 + parentElementX);
                $(e).css("top", targetHeight * y);
            }
        });

        var youtubeParentElement = $("#aboutus-youtube");
        var youtubeElement = $(".youtube-video-embed a");
        youtubeElement.width(youtubeParentElement.width());
        youtubeElement.height(youtubeParentElement.width() * 540 / 960);
 }

// INIT
initLogo();

function initLogo(){
    loadImage("images/apps/apps_main_jellybus_logo.png");
}

function loadImage(src){
    var image = new Image();
    image.src = src;
}

function isMobile() {
  return (/android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i).test(navigator.userAgent);
}

function getYoutubeId(youtubeName){
      if(youtubeName == "picsplay"){
         return "pCvmSJ8f0uM";
      }
      else if(youtubeName == "rookiecam"){
         return "BDpSCycCkl8";
      }
      else{
         return "mopoC8z_bGI";
      }
}

function getYoutubeName(){
      var random = Math.floor(Math.random() * 3);
      if(random === 0) {
         return "picsplay";
      }
      else if(random === 1) {
         return "rookiecam";
      }
      else {
         return "moldiv";
      }
}

function getRandomImageName(defaultName){
      if(Math.floor(Math.random() * 2) === 0) {
         return defaultName + "_a.jpg";
      }
      else {
         return defaultName + "_b.jpg";
      }
}

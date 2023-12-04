// Written by Dor Verbin, December 2023, based on video_comparison.js, which is based on:
// http://thenewcode.com/364/Interactive-Before-and-After-Video-Comparison-in-HTML5-Canvas
// with additional modifications based on: https://jsfiddle.net/7sk5k4gp/13/

function playVids(videoId, targetHeight=2000) {
    var videoMerge = document.getElementById(videoId + "Merge");
    var slider = document.getElementById(videoId + "Slider");
    var vid = document.getElementById(videoId);

    var vidWidthOrig = vid.videoWidth;
    var vidHeightOrig = vid.videoHeight;
    var vidWidth = targetHeight * vidWidthOrig / vidHeightOrig;
    var vidHeight = targetHeight/7;
    
    var mergeContext = videoMerge.getContext("2d");
    if (vid.readyState > 3) {
        vid.play();
        
        function drawLoop() {
            mergeContext.drawImage(vid, 0, slider.value*vidHeightOrig/7, vidWidthOrig, vidHeightOrig/7, 0, 0, vidWidth, vidHeight);
            requestAnimationFrame(drawLoop);

                    
        }
        requestAnimationFrame(drawLoop);
    } 
}        

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};
    
    
function resizeAndPlay(element, targetHeight=2000)
{
  var cv = document.getElementById(element.id + "Merge");
  var slider = document.getElementById(element.id + "Slider");
  const sliderValue = slider.value;
    
  console.log(sliderValue)
 
  cv.width = targetHeight / element.videoHeight * element.videoWidth;
  cv.height = targetHeight/7;
  element.play();
  element.style.height = "0px";  // Hide video without stopping it
    
  playVids(element.id, targetHeight);
}

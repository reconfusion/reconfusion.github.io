// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;


$(document).ready(function() {
    var editor = CodeMirror.fromTextArea(document.getElementById("bibtex"), {
        lineNumbers: false,
        lineWrapping: true,
        readOnly:true
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    
activeMethodPill = $('.method-pill').filter('.active')[0];
activeModePill = $('.mode-pill').filter('.active')[0];
activeScenePill = $('.scene-pill').filter('.active')[0];

// var frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 500, 
//     // get page height from video duration
//     setHeight = document.getElementById("main"), 
//     // select video element         
//     vid = document.getElementById('v0'); 
//     // var vid = $('#v0')[0]; // jquery option

    
    

// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// console.log('scroll');
// }
    
// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });
    
    
//     window.requestAnimationFrame(scrollPlay);
});

function selectCompVideo(methodPill, scenePill, n_views, modePill) {
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");
    select = true;
    var videoSwitch = document.getElementById("compVideoSwitch");
    var viewNum = document.getElementById("compVideoValue");

    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }
    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }
    if (modePill) {
        activeModePill.classList.remove("active");
        modePill.classList.add("active");
        activeModePill = modePill;
    }
    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    methodPill.classList.add("active");
    scenePill.classList.add("active");
    method = methodPill.getAttribute("data-value");
    pill = scenePill.getAttribute("data-value");
    mode = activeModePill.getAttribute("data-value");

    // if (videoSwitch.checked) {
    //     mode = 'depth'
    // } else {
    //     mode = 'rgb'
    // }

    // swap video to avoid flickering
    activeVidID = 1 - activeVidID;
    var video_active = document.getElementById("compVideo" + activeVidID);
    var video_hidden = document.getElementById("compVideo" + (1 - activeVidID));
    video_active.src = "videos/comparison/" + pill + "_" + method + "_vs_ours_" + mode + ".mp4";
    video_active.load();

    if (n_views) {
        viewNum.innerHTML = n_views;
    }
}
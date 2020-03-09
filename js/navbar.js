/*
	Sidebar
*/
function activateSidebar(action) {
  switch(action) {
    case 'open':
    $("#sidebar").css({transform: 'translateX(0px)'})
    break;

    case 'close':
    $("#sidebar").css({transform: 'translateX(-300px)'})
    break;
  }
}

/*
	Fullscreen Buttons
*/

// Func, based on screensize show appropriate button
function toggleFullscreenButtons(){
	if(window.innerHeight == screen.height){
	  $('.open').addClass( "hide" );
	  $('.close').removeClass( "hide" );
	}
	else{
	  $('.open').removeClass( "hide" );
	  $('.close').addClass( "hide" );
	}
}

// Call function at page load
toggleFullscreenButtons();

// Call function after screen resize
var resizeId;
$(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 300);
});

function doneResizing(){
    toggleFullscreenButtons();
}

// Functions to activate or deactivate fullscreen
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
  
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
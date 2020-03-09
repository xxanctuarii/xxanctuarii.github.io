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

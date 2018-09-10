var movil=screen.width<=700;

$("a").click(function () {		
    $(this).animate({
        'borderBottomWidth':"7px"
    }, 500);
     $(this).animate({
        'borderBottomWidth':"0px"
    }, 500);

	var elem=$(this).attr('href');
	if ( this.classList.contains("anchor")){
		smooth_scroll_to(elem);
	}
});
$(document).ready(function() {
    document.body.style.opacity=1;
});

function smooth_scroll_to(elem){	
	var offset = 0;
	offset = $(elem).offset().top;
	$('html').animate({
	    scrollTop: offset
	}, 550);	   
}
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
}

function closeNav() {
	if(movil){
		document.getElementById("mySidenav").style.width = "0";	
	}
} 

window.onresize = function(event) {
   if(screen.width<=700){
   		movil=true;
      document.getElementById("mySidenav").style.width = "0";
   }else{
   		movil=false;	
   		document.getElementById("mySidenav").style.width="auto";
   }
};
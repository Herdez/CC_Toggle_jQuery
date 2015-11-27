//it toggles the navigation bar

$(document).ready(function(){
	     
    $(".flip").click(function(){
    	//it gets value 
    	var open = $('.logo').attr('value');
      //it evaluates value of 'open' variable 
    	if (open === "closed") {
    		//it animates 'nav' - open to left
        $('nav').animate({left:'+=100'});
        //it changes css value of 'cuerporec' class
        $('.cuerporec').css('visibility', 'visible');
        //it animates 'logo' class - toggle.png
        $('.logo').animate({left:'+=100'});
        //it animates 'h1' - open to left
        $('h1').animate({left:'+=100'});
        //it animates 'content' class - open to left
        $('.content').animate({left:'+=100'});
        //it animates 'footer' class - open to left
        $('.footer').animate({left:'+=100'});
        //it changes 'open' value for attribute 'value'
				$('.logo').attr( 'value','open');
				//it is hidden 'logo' class
				$('.logo').hide();
				//it shows 'panel' class
        $('.panel').show();  
    	}else {
        //it shows 'panel' class
    		$('.logo').show();
    		//it is hidden 'logo' class
        $('.panel').hide(); 
        //it animates 'nav' - close to left
    		$('nav').animate({left:'-=100'});
    		//it changes css value of 'cuerporec' class
    		$('.cuerporec').css('visibility', 'hidden');
    		//it animates 'logo' class - toggle.png
    		$('.logo').animate({left:'-=100'});
    		//it animates 'h1' - close to left
    		$('h1').animate({left:'-=100'});
    		//it animates 'content' class - close to left
        $('.content').animate({left:'-=100'});
        //it animates 'footer' class - close to left
        $('.footer').animate({left:'-=100'});
    		 //it changes 'closed' value for attribute 'value'
    		$('.logo').attr( 'value','closed');
    	}
    });

});
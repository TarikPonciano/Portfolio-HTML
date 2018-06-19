$(document).ready(function(){

  		$("#bg_inicial, #confira").hover(

  	  		function(){$("#confira").css("opacity", "1.0");},
  	  		function(){$("#confira").css("opacity", "0.5");}
  	  		);

  	var somClick = document.createElement('audio');
  	var play = 0;
    somClick.setAttribute('src', 'swoosh.mp3');
   

  		$(".botoes_menu, #confira").mouseenter(

  			function(){
  				
  				somClick.volume = 0.5;
  				somClick.play();
  				 }

  			

  			);

  		$("#submit").click(function(){$("#dialog").dialog()});

});
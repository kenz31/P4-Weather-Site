$(document).ready(function() {
	
 $('.flip').hide();
 
 $('button').click(function(){
	 var code;
	  var zip = $('input').val();
	  $('.flip').show();
	  $.simpleWeather({
		zipcode: zip,
		woeid: '2357536',
		location: '',
		unit: 'f',
		
		success: function(weather) {
		  html = '<h2>'+weather.city+'</h2>';
		  html += '<ul><li class="temp">'+weather.temp+'&deg;'+weather.units.temp+'</li>';
		  html += '<li class="currently">'+weather.currently+'</li>';
		  html += '<li class="hilo">'+weather.high+'	'+'<p class="lo">'+weather.low+'</p>'+'</li></ul>';
		  html += '<ul class="tmr"><li class="tomorrow">'+weather.tomorrow.day+' '+weather.tomorrow.date+'</li>'
		  html += '<li class="tFore tomorrow">'+weather.tomorrow.forecast+'</li>';
 		  html += '<li class="tomorrow">'+weather.tomorrow.high+'	'+weather.tomorrow.low+'</li></ul>';			
		  $("#weather").html(html);
		  console.log(weather.code);
		  if(weather.code==33 || weather.code==31)
			{
			$('.currently').add('<img class="image" src="img/3.gif"/>').insertBefore(".currently");
			}
			else if(weather.code==27 || weather.code==29)
			{
			$('.currently').add('<img class="image" src="img/9.gif"/>').insertBefore(".currently");
			}
			else if((weather.code>2 && weather.code<5) ||(weather.code>36 && weather.code<40)||weather.code==47||weather.code==45)
			{
			$('.currently').add('<img class="image" src="img/15.gif"/>').insertBefore(".currently");
			}
			else if((weather.code>7 && weather.code<13) ||weather.code==40)
			{
			$('.currently').add('<img class="image" src="img/18.gif"/>').insertBefore(".currently");
			}
			else if((weather.code>4 && weather.code<8) ||(weather.code>12 && weather.code<19)||weather.code==35||weather.code==46 || (weather.code>40 && weather.code<44))
			{
			$('.currently').add('<img class="image" src="img/23.gif"/>').insertBefore(".currently");
			}
			
			else if(weather.code ==32 || weather.code==36)
			{
				$('.currently').add('<img class="image" src="img/2.gif"/>').insertBefore(".currently");				
			}
			
			else
			{
				$('.currently').add('<img class="image" src="img/8.gif"/>').insertBefore(".currently");			
			}
			
			if(weather.tomorrow.code==33 || weather.tomorrow.code==31)
			{
			$('.tFore').add('<img class="Timage" src="img/3.gif"/>').insertBefore(".tFore");
			}
			else if(weather.tomorrow.code==27 || weather.tomorrow.code==29)
			{
			$('.tFore').add('<img class="Timage" src="img/9.gif"/>').insertBefore(".tFore");
			}
			else if((weather.tomorrow.code>2 && weather.tomorrow.code<5) ||(weather.tomorrow.code>36 && weather.tomorrow.code<40)||weather.tomorrow.code==47||weather.tomorrow.code==45)
			{
			$('.tFore').add('<img class="Timage" src="img/15.gif"/>').insertBefore(".tFore");
			}
			else if((weather.tomorrow.code>7 && weather.tomorrow.code<13) ||weather.tomorrow.code==40)
			{
			$('.tFore').add('<img class="Timage" src="img/18.gif"/>').insertBefore(".tFore");
			}
			else if((weather.tomorrow.code>4 && weather.tomorrow.code<8) ||(weather.tomorrow.code>12 && weather.tomorrow.code<19)||weather.tomorrow.code==35||weather.tomorrow.code==46 || (weather.tomorrow.code>40 && weather.tomorrow.code<44))
			{
			$('.tFore').add('<img class="Timage" src="img/23.gif"/>').insertBefore(".tFore");
			}
			
			else if(weather.tomorrow.code ==32 || weather.tomorrow.code==36)
			{
				$('.tFore').add('<img class="Timage" src="img/2.gif"/>').insertBefore(".tFore");				
			}
			
			else
			{
				$('.tFore').add('<img class="Timage" src="img/8.gif"/>').insertBefore(".tFore");			
			}
		},
		
		error: function(error) {
		  $("#weather").html('<p>'+error+'</p>');
		}
		
	  });
	  	  
	  $('.flip').click(function(){
		  $('.next').transition({ 
		  	opacity:100,
		  
		  });  
	});
	
	 $('.up').click(function(){
		  $('.next').transition({ 
		  	opacity: 0
		  
		  });  
	});
  
  });
});

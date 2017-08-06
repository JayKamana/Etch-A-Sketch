$(function(){

	var $container = $('.container');

	for (var i = 0; i < 64; i++) {
		$container.append('<div class="row row-'+i+'"></div>');
		for(var j=0; j< 64; j++){
			$('.row-'+i).append('<div class="cell"></div>');
		}
	}

	$('.cell').hover(function(){
		var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
   		$(this).css({"background-color": randomColor})
    });
})
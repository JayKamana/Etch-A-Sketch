$(function(){

	var $container = $('.container');
	var gridSize = 64;


	var formGrid = function(){
		$container.html('')
		for (var i = 0; i < gridSize; i++) {
			$container.append('<div class="row row-'+i+'"></div>');
			for(var j=0; j< gridSize; j++){
				$('.row-'+i).append('<div class="cell"></div>');
			}
		}

		$('.cell').css({"width": "calc(960px/"+gridSize+")",
						"height": "calc(960px/"+gridSize+")"
		})

		$('.cell').on('mouseenter',function(){
			var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	   		$(this).css({"background-color": randomColor})
   		 });
	}

	 formGrid();

    
    $('.grid-new').on('click', function(){
    	gridSize = parseInt(prompt("Enter grid size"));
    	formGrid();
    })

     $('.grid-clear').on('click', function(){
    	formGrid();
    })


   
})
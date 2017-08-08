$(function(){

	var $container = $('.container');
	var gridSize = 16;
	var useRandom = false;

	var formGrid = function(){
		$container.html('')
		for (var i = 0; i < gridSize; i++) {
			$container.append('<div class="row row-'+i+'"></div>');
			for(var j=0; j< gridSize; j++){
				$('.row-'+i).append('<div class="cell"></div>');
			}
		}

		$('.cell').css({"width": "calc(680px/"+gridSize+")",
						"height": "calc(680px/"+gridSize+")"
		})

		$('.cell').on('mouseenter',function(){
			var color = "#222"
			if(useRandom){
			color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		}
	   		$(this).css({"background-color": color})
   		 });
	}

	 formGrid();

    
    $('.grid-new').on('click', function(){
    	gridSize = parseInt(prompt("Enter your new grid size"));
    	formGrid();
    })

     $('.grid-clear').on('click', function(){
    	formGrid();
    })

     $('.grid-random').on('click', function(){
    	useRandom = !useRandom;
    	$(this).toggleClass('active');
    })


   
})
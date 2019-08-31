$( document ).ready(function(){

	var userFeed = new Instafeed({

			get:'user',
			userId:'15238467558',
			limit:12,
			resolution:'standard_resolution',
			accessToken:'15238467558.1677ed0.9340e9e7dd0a414f8e796ad8cf76d4b3',
			sortBy:'most-recent',
			template:'<div class="col-lg-3 gallery instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}"alt="{{caption}}" class="img-fluid"/></a></div>',
			});

		
			     userFeed.run();



			 // This will create a single gallery from all elements that have class "gallery-item"
			$('.gallery').magnificPopup({
			  type: 'image',
			  delegate:'a',
			  gallery:{
			    enabled:true
			  }
			});    
			

			

});


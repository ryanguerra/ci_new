$(document).ready(function() {

	flag = 1;

	$("#next").click(function(){
		if(flag == 1){
			$('#card_one').addClass("hide");
			$('#card_two').addClass("first");
			$('#card_three').addClass("second");
			$('#card_four').addClass("third");

			$('#card_two').removeClass("second");
			$('#card_three').removeClass("third");
			flag = 2;
			console.log(flag);
		}

		else if(flag == 2){
			$('#card_two').addClass("hide");
			$('#card_three').addClass("first");
			$('#card_four').addClass("second");
			$('#card_five').addClass("third");

			$('#card_three').removeClass("second");
			$('#card_four').removeClass("third");
			flag = 3;
			console.log(flag);
		}

		else if(flag == 3){
			$('#card_three').addClass("hide");
			$('#card_four').addClass("first");
			$('#card_five').addClass("second");

			$('#card_four').removeClass("second");
			$('#card_five').removeClass("third");
			flag = 4;
			console.log(flag);
		}

		else if(flag == 4){
			$('#card_four').addClass("hide");
			$('#card_five').addClass("first");

			$('#card_five').removeClass("second");
			flag = 5;
			console.log(flag);
		}

		else if(flag == 5){

		}
	});






	$("#prev").click(function(){
		if(flag == 5){
			$('#card_five').removeClass("first");
			$('#card_four').removeClass("hide");
			
			$('#card_four').addClass("first");
			$('#card_five').addClass("second");
			flag = 4;
			console.log(flag);
		}

		else if(flag == 4){
			$('#card_five').addClass("third");
			$('#card_four').addClass("second");
			$('#card_three').addClass("first");
			
			$('#card_five').removeClass("second");
			$('#card_four').removeClass("first");
			$('#card_three').removeClass("hide");
			flag = 3;
			console.log(flag);
		}

		else if(flag == 3){
			$('#card_four').addClass("third");
			$('#card_three').addClass("second");
			$('#card_two').addClass("first");

			$('#card_two').removeClass("hide");
			$('#card_three').removeClass("first");
			$('#card_four').removeClass("second");
			$('#card_five').removeClass("third");
			flag = 2;
			console.log(flag);
		}

		else if(flag == 2){
			$('#card_three').addClass("third");
			$('#card_two').addClass("second");
			
			$('#card_four').removeClass("third");
			$('#card_three').removeClass("second");
			$('#card_two').removeClass("first");
			$('#card_one').removeClass("hide");
			flag = 1;
			console.log(flag);
		}

		else if(flag == 1){
			
		}
	});


});




$(document).ready(function() {

	$('#haruki_input_fname').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#haruki_input_fname').removeClass("valid_input_haruki");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#haruki_input_fname').addClass("valid_input_haruki");
	    }

	});

	$('#haruki_input_lname').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#haruki_input_lname').removeClass("valid_input_haruki");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#haruki_input_lname').addClass("valid_input_haruki");
	    }

	});

	$('#haruki_input_email').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#haruki_input_email').removeClass("valid_input_haruki");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#haruki_input_email').addClass("valid_input_haruki");
	    }

	});

	
	$('#hoshi_input_name').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#hoshi_input_name').removeClass("valid_input_hoshi");
	    
	    if( $(this).val().length > 0 ) {
		    $('#hoshi_input_name').addClass("valid_input_hoshi");
	    }

	});

	$('#hoshi_input_street').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#hoshi_input_street').removeClass("valid_input_hoshi");
	    
	    if( $(this).val().length > 0 ) {
		    $('#hoshi_input_street').addClass("valid_input_hoshi");
	    }

	});

	$('#hoshi_input_town').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#hoshi_input_town').removeClass("valid_input_hoshi");
	    
	    if( $(this).val().length > 0 ) {
		    $('#hoshi_input_town').addClass("valid_input_hoshi");
	    }

	});


	$('#juro_input_fname').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#juro_input_fname').removeClass("valid_input_juro");
	    
	    if( $(this).val().length > 0 ) {
		    $('#juro_input_fname').addClass("valid_input_juro");
	    }

	});

	$('#juro_input_lname').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#juro_input_lname').removeClass("valid_input_juro");
	    
	    if( $(this).val().length > 0 ) {
		    $('#juro_input_lname').addClass("valid_input_juro");
	    }

	});

	$('#juro_input_mname').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#juro_input_mname').removeClass("valid_input_juro");
	    
	    if( $(this).val().length > 0 ) {
		    $('#juro_input_mname').addClass("valid_input_juro");
	    }

	});


	$('#madoka_input_frequency').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#madoka_input_frequency').removeClass("valid_input_madoka");
	    
	    if( $(this).val().length > 0 ) {
		    $('#madoka_input_frequency').addClass("valid_input_madoka");
	    }

	});

	$('#madoka_input_weight').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#madoka_input_weight').removeClass("valid_input_madoka");
	    
	    if( $(this).val().length > 0 ) {
		    $('#madoka_input_weight').addClass("valid_input_madoka");
	    }

	});

	$('#madoka_input_strength').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#madoka_input_strength').removeClass("valid_input_madoka");
	    
	    if( $(this).val().length > 0 ) {
		    $('#madoka_input_strength').addClass("valid_input_madoka");
	    }

	});

});
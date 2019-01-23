$(document).ready(function() {

	$('#ruri_input_uname').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#ruri_input_uname').removeClass("valid_input_ruri");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#ruri_input_uname').addClass("valid_input_ruri");
	    }

	});

	$('#ruri_input_website').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#ruri_input_website').removeClass("valid_input_ruri");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#ruri_input_website').addClass("valid_input_ruri");
	    }

	});

	$('#ruri_input_icode').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#ruri_input_icode').removeClass("valid_input_ruri");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#ruri_input_icode').addClass("valid_input_ruri");
	    }

	});



	$('#manami_input_uname').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#manami_input_uname').removeClass("valid_input_manami");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#manami_input_uname').addClass("valid_input_manami");
	    }

	});

	$('#manami_input_website').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#manami_input_website').removeClass("valid_input_manami");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#manami_input_website').addClass("valid_input_manami");
	    }

	});

	$('#manami_input_icode').keyup(function(){
	    
	    console.log($(this).val().length);
	    $('#manami_input_icode').removeClass("valid_input_manami");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#manami_input_icode').addClass("valid_input_manami");
	    }

	});

});
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

	$('#chisato_input_fname').keyup(function(){
	    console.log($(this).val().length);
	    $('#chisato_input_fname').removeClass("valid_input_chisato");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#chisato_input_fname').addClass("valid_input_chisato");
	    }
	});

	$('#chisato_input_mname').keyup(function(){
	    console.log($(this).val().length);
	    $('#chisato_input_mname').removeClass("valid_input_chisato");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#chisato_input_mname').addClass("valid_input_chisato");
	    }
	});

	$('#chisato_input_lname').keyup(function(){
	    console.log($(this).val().length);
	    $('#chisato_input_lname').removeClass("valid_input_chisato");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#chisato_input_lname').addClass("valid_input_chisato");
	    }
	});

	$('#kohana_input_time').keyup(function(){
	    console.log($(this).val().length);
	    $('#kohana_input_time').removeClass("valid_input_kohana");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#kohana_input_time').addClass("valid_input_kohana");
	    }
	});

	$('#kohana_input_line').keyup(function(){
	    console.log($(this).val().length);
	    $('#kohana_input_line').removeClass("valid_input_kohana");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#kohana_input_line').addClass("valid_input_kohana");
	    }
	});

	$('#kohana_input_phone').keyup(function(){
	    console.log($(this).val().length);
	    $('#kohana_input_phone').removeClass("valid_input_kohana");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#kohana_input_phone').addClass("valid_input_kohana");
	    }
	});

	$('#fumi_input_cname').keyup(function(){	    
	    console.log($(this).val().length);
	    $('#fumi_input_cname').removeClass("valid_input_fumi");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#fumi_input_cname').addClass("valid_input_fumi");
	    }
	});

	$('#fumi_input_degree').keyup(function(){
	    console.log($(this).val().length);
	    $('#fumi_input_degree').removeClass("valid_input_fumi");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#fumi_input_degree').addClass("valid_input_fumi");
	    }
	});

	$('#fumi_input_wplace').keyup(function(){
	    console.log($(this).val().length);
	    $('#fumi_input_wplace').removeClass("valid_input_fumi");
	    
	    if( $(this).val().length > 0 ) {
	    	$('#fumi_input_wplace').addClass("valid_input_fumi");
	    }
	});
});
$(document).ready(function(){





$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	
    if (wScroll > $('.title_text').offset().top - 300){
		$('.article_text').addClass('show');
	}
    else {
        	$('.article_text').removeClass('show');
    };


    if (wScroll > $('.title_text').offset().top - 300){
		$('.article_img').addClass('show');
	}
    else {
        	$('.article_img').removeClass('show');
    };




    if (wScroll > $('.trigger_btns').offset().top - 300){
		$('.btn_2').addClass('tada');
	}


    if (wScroll > $('.trigger_btns').offset().top - 400){
		$('.btn_1').addClass('tada');
	}






    if (wScroll > $('.advantages_trigger').offset().top - 450){
		$('.pict_1').addClass('show');
		$('.text_1').addClass('show');
	}


    if (wScroll > $('.advantages_trigger').offset().top - 350){
		$('.pict_2').addClass('show');
		$('.text_2').addClass('show');
	}


    if (wScroll > $('.advantages_trigger').offset().top - 250){
		$('.pict_3').addClass('show');
		$('.text_3').addClass('show');
	}


    if (wScroll > $('.advantages_trigger').offset().top - 200){
		$('.pict_4').addClass('show');
		$('.text_4').addClass('show');
		$('.advantages_trigger').css({
			display: 'none'
		});
	}




	$('.btn').bind('click', function(){
		$('.form_container').addClass('show_form_container');
	})
	$('.btn_form_conteiner_hide').bind('click', function(){
		$('.form_container').removeClass('show_form_container');
	})

});

/*
##     ##    ###    #### ##
###   ###   ## ##    ##  ##
#### ####  ##   ##   ##  ##
## ### ## ##     ##  ##  ##
##     ## #########  ##  ##
##     ## ##     ##  ##  ##
##     ## ##     ## #### ########       #######################################
 */



 	$(document).on('change', '#form input:checkbox', function() {
if($(this).is(':checked')){
$("#form input[type=text]").removeAttr('disabled');
$('#form button').removeAttr('disabled');

}
else {
$("#form input[type=text]").attr('disabled','disabled');

}
});




	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			// i++;
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$('.form_container').removeClass('show_form_container');
		});
		return false;

	});










	});

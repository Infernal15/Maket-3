//Author @Abyss


//   $( "li.lvl2" ).mouseenter(function() {
// 	$( this ).parent().parent().children("a").addClass( "active" );
// });

// $( "li.lvl2" ).mouseleave(function() {
// 	$( this ).parent().parent().children("a").removeClass( "active" );
// });

// Add fade animetion for left list panet in content

  $( "li.lvl-1" ).on('mouseenter', function() {
	$( this ).children("ul").fadeIn(500, function(){
		$( this ).css("display", "block")
	})
});

$( "li.lvl-1" ).on('mouseleave', function() {
	$( this ).children("ul").fadeOut(300, function(){
		$( this ).css("display", "none")
	})
});

// Add click event for object feedback

$("#feed").on('click', function(){
	$("#feedback-form").css("display", "flex").hide().fadeIn();
	
});

$("#close").on('click', function(){
	$("#feedback-form").fadeOut("slow", ()=>$("#feedback-form").css("display", "none"));
	$("#user-name").attr("placeholder", "");
	$("#user-name").css("box-shadow","");
	$("#phone").attr("placeholder", "");
	$("#phone").css("box-shadow","");
	$("#email").attr("placeholder", "");
	$("#email").css("box-shadow","");
});

//Phone validate

function phone_validate(){
	var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById("phone").value;
    var valid = re.test(myPhone);
	if (document.getElementById("phone").value.length == 0 || !valid)
	{
		$("#phone").attr("placeholder", "Поле обязательно для заполнения");
		$("#phone").css("box-shadow","inset 0 0 13px rgba(228, 106, 106, 0.75)");
	}
	else
	{
		$("#phone").attr("placeholder", "");
		$("#phone").css("box-shadow","");
	}
}

//Email validate

function email_validate(){
	var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
	var myMail = document.getElementById("email").value;
	var valid = re.test(myMail);
	if (document.getElementById("email").value.length == 0 || !valid)
	{
		$("#email").attr("placeholder", "Поле обязательно для заполнения");
		$("#email").css("box-shadow","inset 0 0 13px rgba(228, 106, 106, 0.75)");
	}
	else
	{
		$("#email").attr("placeholder", "");
		$("#email").css("box-shadow","");
	}
}

//Name validate

function name_validate(){
	if (document.getElementById("user-name").value.length <= 2)
	{
		$("#user-name").attr("placeholder", "Поле обязательно для заполнения");
		$("#user-name").css("box-shadow","inset 0 0 13px rgba(228, 106, 106, 0.75)");
	}
	else if (document.getElementById("user-name").value.length > 2)
	{
		$("#user-name").attr("placeholder", "");
		$("#user-name").css("box-shadow","");
	}
}

//Validate all element

function validation(){
	phone_validate();
	email_validate()
	name_validate();
	tmp = true;
}

//Validate element when button was pressed

var tmp = false;

$("#user-name").keyup((e)=>{
	if(tmp && e.which)
	{
		name_validate();
	}
});
$("#phone").keyup((e)=>{
	if(tmp && e.which)
	{
		phone_validate();
	}
});
$("#email").keyup((e)=>{
	if(tmp && e.which)
	{
		email_validate();
	}
});

$("#submit").on('click', validation);

// Add slider event for prev and next button

var i = 0;


document.addEventListener('DOMContentLoaded', function(event){
	var list = $('.slider-image');
	for( var j = 0; j < list.length; j++){
		if(j != 0){
			list.slice(j, j+1).css('display', 'none');
		}
		
	}
});


$("#prev").on('click', slider_prev);
$("#next").on('click', slider_next);

function slider_prev(){
	var list = $('.slider-image');
	list.slice(i, i + 1).fadeOut("slow");
	if (i > 0){
		i--;
	}
	else{
		i = list.length - 1;
	}
	list.slice(i, i + 1).fadeIn("slow");
}

function slider_next(){
	var list = $('img.slider-image');
	list.slice(i, i + 1).fadeOut("slow");
	if (i < list.length - 1){
		i++;
	}
	else{
		i = 0;
	}
	list.slice(i, i + 1).fadeIn("slow");
	clearInterval(timeSlide);
	timeSlide = setInterval(slider_next, 4000);
}

//Timer for slider

var timeSlide = setInterval(slider_next, 4000);
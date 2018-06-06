$(function() {

// form validation/animation
$(".form__input_area input").blur(function() {
    if( $(this).val() ) {
      $(this).next().addClass('fixed');
  } else {
    $(this).next().removeClass('fixed');
}
});

$(".form__input_area input").keyup(function() {
    if( $(this).val() ) {
      $(this).parent().addClass('not_empty');
  } else {
    $(this).parent().removeClass('not_empty');
}
});

$(".input__delete").click(function() {
    $(this).parent().find("input").val('');
    $(this).parent().removeClass('not_empty');
    $(this).parent().find("label").removeClass('fixed');
});


$("form").submit(function(e) {
    e.preventDefault();

        // fix : delete all errors 
        $(".error_info").hide();

        var check = $("#form #form__check");
        var name = $("#form #input__name");
        var email = $("#form #input__email");
        var select = $("#form #input__select");
        var check = $("#form #form__check");

        regexName = /^[a-zа-я- ]+$/i;
        regexEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;

        if ( name.val() && regexName.test(name.val())) {
            name.removeClass("error");
            $("#incorrect_name").remove();
        } else {
            name.addClass("error");
            name.parent().append("<span class='error_info' id='incorrect_name'>Input correct Name</span>");
        }

        if ( email.val() && regexEmail.test(email.val()) ) {
            email.removeClass("error");
            $("#incorrect_email").remove();
        } else {
            email.addClass("error");
            email.parent().append("<span class='error_info' id='incorrect_email'>Input correct E-Mail</span>");
        }

        if ( $(select).val()  ) {
            $(select).removeClass("error"); 
        } else {
            $(select).addClass("error"); 
        }

        if ($(check).is(":checked")) {
            $(check).removeClass("error");
        } else {
            $(check).addClass("error");
        }

        var v1 = email.val();
        var v2 = name.val();
        var v3 = select.val()


        $.ajax({
            type: "POST",
            url: "",
            data: { form_email: v1, form_name: v2, form_country: v3 },
            dataType: 'json',
            cache: false,
            success: function(data) {
                if (data == "success") {

                } else if (data = "false") {
                }
            },
        });
    });

// modal window animation
$('#promo-block ul li').click(function(e) {
    var id = $('#modal');
    var winH = $(window).height();
    var winW = $(window).width();
    id.css('top', winH/2-id.height()/2);
    id.css('left', winW/2-id.width()/2);
    id.fadeIn(500);
    $("#overlay").fadeIn(1000);
});

$('#modal #close, #modal #buttons__cancel').click(function (e) {
    e.preventDefault();
    $('#overlay').fadeOut(500);
    $('#modal').fadeOut(500);
});

$('.cards').hover(function(e) {
    $(this).find(".cards__info").stop( true, false ).animate({bottom: "0%"});
}, function () {
        // If the device's window is 800 or smaller
        if (Modernizr.mq("screen and (max-width:800px)")) {
            $(this).find(".cards__info").stop( true, false ).animate({bottom: "-73%"});
        } else {
            $(this).find(".cards__info").stop( true, false ).animate({bottom: "-65%"});
        }
    });
});
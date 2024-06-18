$(document).ready(function(){
    //My full code goes inside this code

    //Smooth Scrolling
    var $root = $('html, body');
        $('#navbar-example a').click(function () {
            var href = $.attr(this, 'href');
            if (href != undefined && href != '#') {
                $root.animate({
                    scrollTop: $(href).offset().top
                }, 500, function () {
                    window.location.hash = href;
                });
            }
            return false;
        });

        // Work section 
        for(var i = 0; i < work.length; ++i) {
            $("#work").append("\
            <div class='col-sm-3 col-sm-3'>\
            <a href='#' class='work-img'>\
            <img class='img-responsive' src='" + work[i].pic + "'>\
            <span class='info'><p class='proj-title'>Title:</p> " + work[i].title + " </span>\
            </a>\
            </div>\
            ");

            var images = $("#work img");
        if (i%2 === 0){
            $(images[i]).css("border", "2px solid DodgerBlue");
        } else {
            $(images[i]).css("border", "2px solid salmon");
        };
        };

        $(".work-img").mouseenter(function(){
            $(".info", this).show();
          }).mouseleave(function(){
            $(".info", this).hide();
          });


        //Tooltip = The White Box with CV
        $(function () {
            $("#item1").tooltip();
          });

        //Button
        $("#button").on("click", function() {
            var originalComment = $('#message-box').val();

            var finalComment = originalComment + " I have received your message!";


            $('#visible-comment').html(finalComment);
            //Hide the box where you write
            $('#message-box').hide();
            return false;
          });

        $("#message-box").on("keyup", function() {
            console.log("keyup happened"); //here we make sure we're catching the keyup
            var charCount = $("#message-box").val().length;
            console.log(charCount);
            $("#char-count").html(charCount);
            if(charCount > 50) {
                $("#char-count").css("color", "red");
            } else {
                $("#char-count").css("color", "black");
            }        
        });

  });
  
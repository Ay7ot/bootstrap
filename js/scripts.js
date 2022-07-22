$(document).ready(function() {
    $('#mycarousel').carousel({
        interval:2000,
        pause: 'false'
    });


    $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
        });

    $('#reserveButton').click(function(){
        $('#reserveModal').modal('show');
    });

    $('#loginModalButton').click(function(){
        $('#loginModal').modal('show');
    })

    $('#closeReserveButton').click(function(){
        $('#reserveModal').modal('hide');
    })
    
    $('#closeLoginButton').click(function(){
        $('#loginModal').modal('hide');
    });

    $('#reserveCancelButton').click(function(){
        $('#reserveModal').modal('hide');
    });
});
$(document).ready(function () {

    $('#mycarousel').carousel({ interval: 1500 });
    $('#carousel-button').click(function () {
        if ($('#carousel-button').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carousel-button').children('span').removeClass('fa-pause');
            $('#carousel-button').children('span').addClass('fa-play');
        } else if ($('#carousel-button').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carousel-button').children('span').removeClass('fa-play');
            $('#carousel-button').children('span').addClass('fa-pause');

        }
    });

    $('#modalReserve').click(function () {
        $('#reserveModal').modal('show');
    })

    $('#modalLogin').click(function () {
        $('#loginModal').modal('show');
    })

});
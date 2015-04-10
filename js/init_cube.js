function init_cube()
{
    $('.view').one("tap", function () {
        $('#cube').removeClass('animate');
        $("#cube").css('display', 'none');
        setTimeout(function () {
            $("#cube").fadeIn('slow');
        }, 201);
        touch_face_cube();
    });

}
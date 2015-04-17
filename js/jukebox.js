function touch_menu_jukebox() {
    $('#content').on("tap", function () {
        if ($('#options').hasClass('position_init')) {
            $('#options').removeClass('position_init').addClass('position_finale');
        }
        else {
            $('#options').removeClass('position_finale').addClass('position_init');
        }
    });
}
var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
       prop,
       el = document.createElement('div'),
       xAngle = 0,
       yAngle = 0,
       diffSizeScreenToCube,
      currentNormalTransform;

function resize_cube() {
    var widthExperiment = $(window).width();
    // les trois parametres a modifier pour changer la taille du cube.

    var newSquare = widthExperiment / 1.8;
    var translateZ = (widthExperiment / 3.6) + 1;
    var newSquareHeight = (0.255 * widthExperiment - 40.2095);
    var heightAbsolute = (1.24 * newSquare - 21.4);
    diffSizeScreenToCube = widthExperiment / (1.24 * newSquare - 21.4);
    console.log(diffSizeScreenToCube);
    //console.log(translateZpochetteChoosen);

    $('#cube .one,#cube .two,#cube .three,#cube .four,#cube .five,#cube .six').width(newSquare).height(newSquare);

    $('#cube .one').css('-webkit-transform', 'rotateX(90deg) translateZ(' + translateZ + 'px)').css('-moz-transform', 'rotateX(90deg) translateZ(' + translateZ + 'px)');
    $('#cube .two').css('-webkit-transform', 'translateZ(' + translateZ + 'px)').css('-moz-transform', 'translateZ(' + translateZ + 'px)');
    $('#cube .three').css('-webkit-transform', 'rotateY(90deg) translateZ(' + translateZ + 'px)').css('-moz-transform', 'rotateY(90deg) translateZ(' + translateZ + 'px)');
    $('#cube .four').css('-webkit-transform', 'rotateY(180deg) translateZ(' + translateZ + 'px)').css('-moz-transform', 'rotateY(180deg) translateZ(' + translateZ + 'px)');
    $('#cube .five').css('-webkit-transform', 'rotateY(-90deg) translateZ(' + translateZ + 'px)').css('-moz-transform', 'rotateY(-90deg) translateZ(' + translateZ + 'px)');
    $('#cube .six').css('-webkit-transform', 'rotateX(-90deg) translateZ(' + translateZ + 'px)').css('-moz-transform', 'rotateX(-90deg) translateZ(' + translateZ + 'px)');
    $('#cube').width(newSquare).height(newSquare);
    console.log();

}

function swipe_cube() {
    for (var i = 0, l = props.length; i < l; i++) {
        if (typeof el.style[props[i]] !== "undefined") {
            prop = props[i];
            break;
        }
    }

    $('.view').on("swipeleft", function () {
        yAngle -= 90;
        document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
    });
    $('.view').on("swiperight", function () {
        yAngle += 90;
        document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
    });
    $('.view').on("swipeup", function () {
        xAngle += 90;
        document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
    });
    $('.view').on("swipedown", function () {
        xAngle -= 90;
        document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
    });
}


function touch_face_cube() {
    $('.front').on("tap", function () {
        currentNormalTransform = $(this).parent().css('-webkit-transform');
        $(this).parent().css('-webkit-transform', currentNormalTransform + ' scale(' + diffSizeScreenToCube + ')');
        $(this).hide();
        $(this).parent().children('.back').show();
    });

    $('.back').on("tap", function () {
        $(this).parent().css('-webkit-transform', currentNormalTransform + ' scale(1)');
        $(this).parent().children('.front').show();
        $(this).hide();
    });

}

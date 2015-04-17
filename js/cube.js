var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
       prop,
       el = document.createElement('div'),
       xAngle = 0,
       yAngle = 0,
       zAngle = 0,
       diffSizeScreenToCube,
      currentNormalTransform,
      down = 0,
       up = 0,
      left = 0,
      right = 0,
      changeRotate = 0,
          changeRotateLeftRight = 0;

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
        left++;
        if (changeRotate && changeRotateLeftRight)
            console.log('okslide');
        testFaceLeftRight();
       

        if (changeRotate) {
            zAngle -= 90;
            document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg) rotateZ(" + zAngle + "deg)";
        } else {
            console.log('test');
            yAngle -= 90;
            document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg) rotateZ(" + zAngle + "deg)";
        }
    });
    $('.view').on("swiperight", function () {
        righ++;

        if (changeRotate && changeRotateLeftRight)
            console.log('okslide');
        testFaceLeftRight();


        if (changeRotate) {
            zAngle += 90;
            document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg) rotateZ(" + zAngle + "deg)";
        } else {
            console.log('test');
            yAngle += 90;
            document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg) rotateZ(" + zAngle + "deg)";
        }
    });
    $('.view').on("swipeup", function () {

        up++;
        testFaceUpDown();
        xAngle += 90;
        document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg) rotateZ(" + zAngle + "deg)";
    });

    $('.view').on("swipedown", function () {

        down++;
        testFaceUpDown();
        xAngle -= 90;
        document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg) rotateZ(" + zAngle + "deg)";


    });
}

function testFaceUpDown() {
    if (((up - down) % 2 == 1) || ((up - down) % 2 == -1))
        changeRotate = 1;
    else
        changeRotate = 0;

}

function testFaceLeftRight() {
    if (((left - right) % 2 == 1) || ((left - right) % 2 == -1))
        changeRotateLeftRight = 1;
    else
        changeRotateLeftRight = 0;

    console.log((left - right) % 2);
}

function touch_face_cube() {
    //$('.front').on("tap", function () {
    //    currentNormalTransform = $(this).parent().css('-webkit-transform');
    //    $(this).parent().css('-webkit-transform', currentNormalTransform + ' scale(' + diffSizeScreenToCube + ')');
    //    $(this).hide();
    //    $(this).parent().children('.back').show();
    //});

    //$('.back').on("tap", function () {
    //    $(this).parent().css('-webkit-transform', currentNormalTransform + ' scale(1)');
    //    $(this).parent().children('.front').show();
    //    $(this).hide();
    //});

}

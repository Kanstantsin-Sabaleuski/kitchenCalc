(function() {
    var currentStep = 0;
    var currentTypeN;
    var kitchenType;
    var discountType;
    var fabricType;
    var color;
    var noSize = false;
    var noFabric = false;
    var noClick = false;
    var bar = function() {
        $('.progressive-bar-orange').css('width', 25*currentStep + '%');
        $('.progressive-bar-white').css('width', 100 - 25*currentStep + '%');
    }
    var stepForward = function() {
        noClick = true;
        $( '.step-' + currentStep ).fadeOut("slow", function() {
            currentStep++;
            $('.step-' + currentStep).fadeIn('slow');
            bar();
            noClick = false;
        });

    }
    var stepBackward = function() {
        noClick = true;
        $( '.step-' + currentStep ).fadeOut("slow", function() {
            currentStep--;
            $('.step-' + currentStep).fadeIn('slow');
            bar();
            noClick = false;
        });
    }
    $('#callculate').click(function() {
        // $('.step-0').addClass('hidden');
        // $('.step-1').removeClass('hidden');
        $( ".step-0" ).fadeOut("slow", function() {
            currentStep = 1;
            $('.step-1').fadeIn('slow');
            $('.btns-group').fadeIn('slow');
            $('.progressive-bar-container').fadeIn('slow');
        });
    });
    $('#back').click(function() {
        if (noClick) {
            return;
        }
        if (currentStep === 1) {
            $( ".step-1" ).add($('.btns-group')).add($('.progressive-bar-container')).fadeOut("slow", function() {
                currentStep--;
                $('.step-0').fadeIn('slow');
            });
        } else {
            stepBackward();
        }
    });
    // $('#back').click(function() {
    //     if (currentStep === 1) {
    //         $( ".step-1" ).add($('.btns-group')).add($('.progressive-bar-container')).fadeOut("slow", function() {
    //             currentStep--;
    //             $('.step-0').fadeIn('slow');
    //         });
    //     }
    //     if (currentStep === 2) {
    //         $( ".step-2" ).fadeOut("slow", function() {
    //             currentStep--;
    //             $('.step-1').fadeIn('slow');
    //             bar();
    //         });
    //     }
    //     if (currentStep === 3) {
    //         $( ".step-3" ).fadeOut("slow", function() {
    //             currentStep--;
    //             $('.step-2').fadeIn('slow');
    //             bar();
    //         });
    //     }
    // });
    $('#forward').click(function() {
        if (noClick) {
            return;
        }
        if (currentStep === 4) {
            $('.complete-wrapper').removeClass('hidden');
            //console.log('Complete');
            //return;
        } else {
            stepForward();
        }
    });
    // $('#forward').click(function() {
    //     if (currentStep === 1) {
    //         $( ".step-1" ).fadeOut("slow", function() {
    //             currentStep++;
    //             $('.step-2').fadeIn('slow');
    //             // $('.progressive-bar-orange').animate({
    //             //     width: 20*currentStep + '%'
    //             // }, 1500);
    //             // $('.progressive-bar-white').animate({
    //             //     width: 100 - 20*currentStep +'%'
    //             // }, 1500);
    //             bar();
    //         });
    //     }
    //     if (currentStep === 2) {
    //         $( ".step-2" ).fadeOut("slow", function() {
    //             currentStep++;
    //             $('.step-3').fadeIn('slow');
    //             bar();
    //         });
    //     }
    // });
    $('.kitchen-types').on('click', '.type', function(event) {
        //console.log(this);
        if (kitchenType) {
            $(kitchenType).removeClass('active');
        }
        $(this).addClass('active');
        kitchenType = this;
        var currentTypeN = +$(this).attr('class').charAt(10);
        //console.log(currentType);
    });
    $('.discount-types').on('click', '.type', function(event) {
        //console.log(this);
        if (discountType) {
            $(discountType).removeClass('active');
        }
        $(this).addClass('active');
        discountType = this;
    });
    $('.fabric-types').on('click', '.type', function(event) {
        if (fabricType) {
            $(fabricType).removeClass('active');
        }
        $(this).addClass('active');
        fabricType = this;
    });
    $('.color-types').on('click', '.color', function(event) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    $('#nosize').on('click', function() {
        //console.log(this);
        noSize = !noSize;
        if (noSize) {
            $('#nosize').addClass('active');
        } else {
            $('#nosize').removeClass('active');
        }
    });
    $('#nofabric').on('click', function() {
        noFabric = !noFabric;
        if (noFabric) {
            $('#nofabric').addClass('active');
        } else {
            $('#nofabric').removeClass('active');
        }
    });
    $('.complete-wrapper').on('click', function(event) {
        if (this === event.target) {
            $('.complete-wrapper').addClass('hidden');
        }
        // var out = $('.complete-wrapper');
        // var inside = $('.complete');
        // console.log(out[0] === this);
        // console.log(inside[0] === event.target);
        // console.log(this === event.target);
        // console.log(out[0]);
        // console.log(inside[0]);
        // console.log(this);
        //console.log(event.target);
    });
    $('.get-btn').click(function(event) {
        $('.complete-wrapper').addClass('hidden');
        $( '.step-' + currentStep).
            add($('.btns-group')).
            add($('.progressive-bar-container')).
            fadeOut("slow", function() {
            currentStep = 0;
            $('.step-0').fadeIn('slow');
        });
    });
})();

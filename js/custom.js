/*
Author URI: http://webthemez.com/
Note: 
Licence under Creative Commons Attribution 3.0 
Do not remove the back-link in this web template 
-------------------------------------------------------*/

$(window).load(function () {
    jQuery('#all').click();
    return false;
});

$(document).ready(function () {
    $('#header_wrapper').scrollToFixed();
    $('.res-nav_click').click(function () {
        $('.main-nav').slideToggle();
        return false

    });

    function resizeText() {
        var preferredWidth = 767;
        var displayWidth = window.innerWidth;
        var percentage = displayWidth / preferredWidth;
        var fontsizetitle = 25;
        var newFontSizeTitle = Math.floor(fontsizetitle * percentage);
        $(".divclass").css("font-size", newFontSizeTitle)
    }
    if ($('#main-nav ul li:first-child').hasClass('active')) {
        $('#main-nav').css('background', 'none');
    }
    $('#mainNav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function () {
        },
        end: function () {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }

        },
        scrollChange: function ($currentListItem) {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }
        }
    });

    var container = $('#portfolio_wrapper');


    container.isotope({
        animationEngine: 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows'
    });

    $('#filters a').click(function () {
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        container.isotope({
            filter: selector
        });
        setProjects();
        return false;
    });

    function splitColumns() {
        var winWidth = $(window).width(),
            columnNumb = 1;


        if (winWidth > 1024) {
            columnNumb = 4;
        } else if (winWidth > 900) {
            columnNumb = 2;
        } else if (winWidth > 479) {
            columnNumb = 2;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }

        return columnNumb;
    }

    function setColumns() {
        var winWidth = $(window).width(),
            columnNumb = splitColumns(),
            postWidth = Math.floor(winWidth / columnNumb);

        container.find('.portfolio-item').each(function () {
            $(this).css({
                width: postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }

    container.imagesLoaded(function () {
        setColumns();
    });


    $(window).bind('resize', function () {
        setProjects();
    });


});

function openModal(src) {
    if (!isMobileDevice()) {
        document.getElementById("modalImage").src = src;
        document.getElementById("myModal").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}


function pickRandomStrings(strings, numPicks) {
    if (numPicks > strings.length) {
        throw new Error("Number of picks cannot be greater than the number of available strings.");
    }

    const result = [];
    const availableStrings = [...strings]; // Create a copy of the array to avoid modifying the original

    for (let i = 0; i < numPicks; i++) {
        const randomIndex = Math.floor(Math.random() * availableStrings.length);
        result.push(availableStrings[randomIndex]);
        availableStrings.splice(randomIndex, 1); // Remove the picked string from the array
    }

    return result;
}

function updateImageSources(pickedStrings) {
    const imgGrid = document.getElementById('imgGrid');
    const images = imgGrid.getElementsByTagName('img');

    if (pickedStrings.length > images.length) {
        throw new Error("Number of picked strings exceeds the number of images.");
    }

    for (let i = 0; i < pickedStrings.length; i++) {
        images[i].src = pickedStrings[i];
    }
}

// Example usage:
const strings = ["./img/galleryPics/1.jpeg", "./img/galleryPics/2.jpeg", "./img/galleryPics/3.jpeg", "./img/galleryPics/4.jpeg", "./img/galleryPics/5.jpeg",
    "./img/galleryPics/6.jpeg", "./img/galleryPics/7.jpeg", "./img/galleryPics/8.jpeg", "./img/galleryPics/9.jpeg"];
const numPicks = 9;

const pickedStrings = pickRandomStrings(strings, numPicks);
//updateImageSources(pickedStrings);



wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();

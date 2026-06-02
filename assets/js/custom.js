// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(document).ready(function () {
    // Isotope initialization
    var $grid = $('.grid').isotope({
        itemSelector: '.all',
        layoutMode: 'fitRows'
    });

    // Determine default filter based on the current page
    var defaultFilter = '.başlangıç';

    if (window.location.pathname.includes('index.html')) {
        defaultFilter = '.burger';
    } else if (window.location.pathname.includes('menu-icecekler.html')) {
        defaultFilter = '.colddrinks';
    } else if (window.location.pathname.includes('menu-alkoller.html')) {
        defaultFilter = '.bira';
    } else if (window.location.pathname.includes('menu-nargile.html')) {
        defaultFilter = '.nargile';
    } else if (window.location.pathname.includes('menu-pastane.html')) {
        defaultFilter = '.servisler';
    } else if (window.location.pathname.includes('test-pastane.html')) {
        defaultFilter = '.servisler';
    }


    // Apply the default filter
    $grid.isotope({ filter: defaultFilter });

    // Filter items on menu click
    $('.filters_menu li').on('click', function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    
    $('.alt-filtre-container').remove(); // Öncekini kaldır
    if (filterValue === '.viski') {
        // Viskiler seçildiyse, son üründen sonra ekle
        var $lastViski = $('.grid .viski:visible').last();
        if ($lastViski.length) {
            var $altFiltre = $('#alt-filtre-template').clone().removeAttr('id').addClass('alt-filtre-container').show();
            $lastViski.after($('<div class="col-12 alt-filtre-container"></div>').append($altFiltre));
        }
    }
});
});


// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

$(document).ready(function () {
    const filtersMenu = $('.filters-container');
    const scrollStep = 200; // Kaydırma adımı

    // Sağ kaydırma
    $('.scroll-right').click(function () {
        filtersMenu.animate({ scrollLeft: filtersMenu.scrollLeft() + scrollStep }, 300);
    });

    // Sol kaydırma
    $('.scroll-left').click(function () {
        filtersMenu.animate({ scrollLeft: filtersMenu.scrollLeft() - scrollStep }, 300);
    });

    // Kaydırma butonlarını gerektiğinde göster/gizle
    function updateScrollButtons() {
        const scrollLeft = filtersMenu.scrollLeft();
        const maxScroll = filtersMenu[0].scrollWidth - filtersMenu[0].clientWidth;

        $('.scroll-left').toggle(scrollLeft > 0);
        $('.scroll-right').toggle(scrollLeft < maxScroll);
    }

    filtersMenu.on('scroll', updateScrollButtons);
    updateScrollButtons(); // Sayfa yüklendiğinde butonları güncelle
});

// Swiper slider
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    breakpoints: {
        1200: {
            slidesPerView: 3, // Desktoplerde 3 slide göster
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2, // Tabletlerde 2 slide göster
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1, // Mobilde 1 slide göster
            spaceBetween: 10,
        },
    },
});
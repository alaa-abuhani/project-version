var slickSlider = () => {
    $(document).ready(function () {

        $('.wrapper-item-slide ').slick({
            infinite: true,
            slidesToShow: 4.5,
            slidesToScroll: 3,
            arrows: false,
            dots: false,
            // centerMode: true,
            // centerPadding: '20%',
            rtl: true,

            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        // infinite: true,
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        settings: "unslick"
                    }
                }

            ]

        });

        var itemContainer = $('.wrapper-item-slide div.item .product ');
        var itemContainer2 = $('.wrapper-item-slide .slick-initialized .slick-slider');
        console.log("is" + itemContainer2.text());
    });
}
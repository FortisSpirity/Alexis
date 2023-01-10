$(function(){

    document.querySelector('#play').onclick = play;
    let video;
    video = document.querySelector('#video-player')
    function play() {
        video.play();
    }

    $('.play__btn, .team__item-descr, .team__description-inner').on('click', function (e) {
        e.preventDefault;
        $('.play__btn, .team__item-descr, .team__description-inner').toggleClass('active')
    })

    $('.test__slider').slick({
         dots: true,
         arrows: false,
        
    });




    $('.portfolio__gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });
  
});
/******** MOBILE MENU ********/
$('[role="menu-opener"]').click(function(){
  const dt = $($(this).data("target"));

  if($(this).hasClass('open')) {
    $(this).removeClass('open');
    $(dt).removeClass('open');
    $('body').removeClass('open-menu');
    window.history.go(-1);
  } else {
    $(this).addClass('open');
    $(dt).addClass('open');
    $('body').addClass('open-menu');
    window.history.replaceState({open_menu: 1, target: $(this).data("target")}, '', '');
    window.history.pushState({}, '', '');

    //Zamykanie po kliknieciu
    $(dt).find('.menu-scroll').click(function(){
      $(dt).removeClass('open');
      $('[role="menu-opener"]').removeClass('open');
      $('body').removeClass('open-menu');
    });
  }
});

if ($(window).scrollTop() > 0) {
  $("#headerTop").addClass('slim-nav');
}

$(document).scroll(function () {
  $("#headerTop").toggleClass('slim-nav', $(this).scrollTop() > 30);
});

$(document).ready(function(){

  $('.follow-btn').click(function() {
    if ($(this).hasClass('btn-primary')) {
      $(this).removeClass("btn-primary");
      $(this).addClass("btn-secondary");
      $(this).text('Followed');
    } else {
      $(this).removeClass("btn-secondary");
      $(this).addClass("btn-primary");
      $(this).text('Follow');
    }
  })

  $('.following-slider').addClass("d-none");
  $('.popular-slider').addClass("d-block");

  $('.btn-popular').click(function() {
    if ($('.popular-slider').hasClass('d-none')) {
      $('.btn-popular').removeClass("btn-secondary");
      $('.btn-popular').addClass("btn-primary");
      $('.btn-following').removeClass("btn-primary");
      $('.btn-following').addClass("btn-secondary");
      $('.following-slider').animate({opacity: '0'}, 500,function(){
        $('.following-slider').removeClass("d-block");
        $('.popular-slider').removeClass("d-none");
        $('.following-slider').addClass("d-none");
        $('.popular-slider').addClass("d-block");
        $('.popular-slider').animate({opacity: '1'}, 500);  
      });
    }
  });

  $('.btn-following').click(function() {
    if ($('.following-slider').hasClass('d-none')) {
      $('.btn-following').removeClass("btn-secondary");
      $('.btn-following').addClass("btn-primary");
      $('.btn-popular').removeClass("btn-primary");
      $('.btn-popular').addClass("btn-secondary");
      $('.popular-slider').animate({opacity: '0'}, 500,function(){
        $('.popular-slider').removeClass("d-block");
        $('.following-slider').removeClass("d-none");
        $('.popular-slider').addClass("d-none");
        $('.following-slider').addClass("d-block");
        $('.following-slider').animate({opacity: '1'}, 500);  
      });
    }
  });

  /******** WINDOW SCROLL ********/
  const checkWindowScroll = function() {
    if ($(window).scrollTop() > 500) {
      $('#icoGoTop').show();
    }else {
      $('#icoGoTop').hide();
    }

    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      $('#icoGoTop').addClass('is-bottom');
    }else{
      $('#icoGoTop').removeClass('is-bottom');
    }
  };

  checkWindowScroll();

  $(window).bind('scroll', function() {
    checkWindowScroll();
  });

  $('.creators-slider').slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});
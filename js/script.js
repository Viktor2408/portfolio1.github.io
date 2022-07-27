$(function(){
    $('.popup-open').click(function(){
        let $this=$(this);
        let idPopup=$this.attr('href');
        $(idPopup).addClass('active') //addClass добавляет класс
        return false;
    })
    // сделали закрытие 
    $('body').on('click',function(e){ //при нажатии на документ
      let container=$('.popup-content');// создали переменную в которой хранится наш блок
  
      if (container.has(e.target).length === 0){// если клик вне нашего контейнера 
        $('.popup-block').removeClass('active');//то убирается класс эктив
      }
    })
    $('input[type="phone"]').mask("+7 (999) 999-99-99");// подключили маску телефона
  
    $('.main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      infinite: true,
      arrows: false,
    });

    $('.main-slider-links a').on('click',function(){
      let index = $(this).data('index');

      $('.main-slider-links a').removeClass('active');
      $(this).addClass('active');

      $('.main-slider').slick('slickGoTo', index);
      return false;
    });

    // бургер
    $('.burger').click(function(event){
      $('.burger,.burger-menu').toggleClass('active');
      $('body').toggleClass('menu-active')
    });
  
  });

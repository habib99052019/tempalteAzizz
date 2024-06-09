function initSwiper() {
    
    const propSwiper = new Swiper('.container-slider-prop', {
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '.right-prop-slide',
          prevEl: '.left-prop-slide',
        },
      
      })    

}


initSwiper()
 $(document).ready(function() {

 	$('.burger').click(function(){
        $(this).toggleClass('active');
        $('.menu-mob').toggle();
    });

    $('.nav-mob .open-1').on('click', function() {
      event.preventDefault();
      $('.nav-mob__level-1').hide();
      var openid_1 = $(this).data('openid_1');
        $('#' + openid_1).fadeIn();
        $('.menu-mob .header__place').hide();
        $('.menu-mob .bottom').hide();
    });

    $('.level-back-1').click(function(){
        $('.nav-mob__level-1').fadeIn();
        $('.nav-mob__level-2').hide();
        $('.menu-mob .header__place').fadeIn();
        $('.menu-mob .bottom').fadeIn();
    });

    $('.nav-mob .open-2').on('click', function() {
      event.preventDefault();
      $('.nav-mob__level-2').hide();
      var openid_2 = $(this).data('openid_2');
        $('#' + openid_2).fadeIn();
    });

    $('.level-back-2').click(function(){
        $('.nav-mob__level-2').fadeIn();
        $('.nav-mob__level-3').hide();
    });

    $('.footer .subtitle').click(function(){
        $(this).toggleClass('active');
        $(this).next('.footer__full').toggle();
    });

 	var swiper = new Swiper(".swiper-view", {
		slidesPerView: "auto",
		spaceBetween: 18,
		loop: true,
		centeredSlides: true,
	  	navigation: {
	    	nextEl: "#swiper-button-next_1",
	    	prevEl: "#swiper-button-prev_1",
	  	},
	  	pagination: {
	        el: "#swiper-pagination_1",
	        type: "fraction",
	      },
	  	breakpoints: {
		    768: {
		      //slidesPerView: 3,
		      //spaceBetween: 18,
		    },
		    1201: {
		      //slidesPerView: 3,
		      //spaceBetween: 18,
		    	spaceBetween: 22,
		    },
		},
	});

	var swiper = new Swiper(".swiper-serv", {
		slidesPerView: "auto",
		spaceBetween: 18,
		loop: true,
		centeredSlides: false,
	  	navigation: {
	    	nextEl: "#swiper-button-next_2",
	    	prevEl: "#swiper-button-prev_2",
	  	},
	  	breakpoints: {
		    768: {
		      //slidesPerView: 3,
		      //spaceBetween: 18,
		    },
		    1201: {
		      //slidesPerView: 3,
	  			spaceBetween: 22,
		    },
		},
	});

	var swiper = new Swiper(".swiper-team", {
		slidesPerView: "auto",		
		spaceBetween: 18,
		loop: true,
		centeredSlides: false,
	  	navigation: {
	    	nextEl: "#swiper-button-next_3",
	    	prevEl: "#swiper-button-prev_3",
	  	},
	  	breakpoints: {
		    
		    1201: {
		      //slidesPerView: 3,
		      //spaceBetween: 18,
		    	spaceBetween: 40,
		    },
		},
	});

	var swiper = new Swiper(".swiper-accii", {
		slidesPerView: "auto",
		spaceBetween: 18,
		loop: true,
		centeredSlides: false,
	  	navigation: {
	    	nextEl: "#swiper-button-next_4",
	    	prevEl: "#swiper-button-prev_4",
	  	},
	  	breakpoints: {
		    768: {
		      //slidesPerView: 3,
		      //spaceBetween: 18,
		    },
		    1201: {
		      //slidesPerView: 3,
		      //spaceBetween: 18,
		    	spaceBetween: 22,
		    },
		},
	});

	var swiper = new Swiper(".swiper-accii_2", {
		slidesPerView: "auto",
		spaceBetween: 18,
		loop: true,
		centeredSlides: false,
	  	navigation: {
	    	nextEl: "#swiper-button-next_5",
	    	prevEl: "#swiper-button-prev_5",
	  	},
	  	breakpoints: {
		    768: {
		      //slidesPerView: 3,
		      //spaceBetween: 18,
		    },
		    1201: {
		      //slidesPerView: 3,
		      //spaceBetween: 18,
		    	spaceBetween: 22,
		    },
		},
	});

	var swiper = new Swiper(".swiper-sorting", {
		slidesPerView: "auto",
		spaceBetween: 18,
		loop: true,
		centeredSlides: false,
	  	navigation: {
	    	nextEl: "#swiper-button-next_6",
	    	prevEl: "#swiper-button-prev_6",
	  	},
	  	breakpoints: {
		    768: {
		      //slidesPerView: 3,
		      //spaceBetween: 18,
		    },
		    1201: {
		      //slidesPerView: 3,
		      //spaceBetween: 18,
		    	spaceBetween: 40,
		    },
		},
	});

	var swiper = new Swiper(".swiper-eqi", {
		slidesPerView: "auto",
		spaceBetween: 18,
		loop: true,
		centeredSlides: false,
	  	navigation: {
	    	nextEl: "#swiper-button-next_7",
	    	prevEl: "#swiper-button-prev_7",
	  	},
	  	breakpoints: {
		    768: {
		      //slidesPerView: 3,
		      //spaceBetween: 18,
		    },
		    1201: {
		      //slidesPerView: 3,
	  			spaceBetween: 22,
		    },
		},
	});

	$('.mask').mask('+7 999 999 99 99');
          

});
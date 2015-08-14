/*$('.btn_nav,#home').click(function() {
  // animate content
 // $('.page__style').addClass('animate_content');
  $('.page__description').fadeOut(100).delay(2800).fadeIn();

  setTimeout(function() {
    //$('.page__style').removeClass('animate_content');
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function() {
    $('.page__style').removeClass('fadeIn');
  }, 1500);

});
*/

 $(".fa").mouseenter(function() {
      TweenMax.fromTo(this, 0.15, {
          x: "-=5"
      }, {
          x: "+=5",
          repeat: 3,
          yoyo: true,
          ease: Sine.easeInOut,
          onComplete: function() {
              TweenMax.to(this.target, 1.5, {
                  x: 0,
                  ease: Elastic.easeOut
              })
          }
      })

  });


$('.btn_nav,#home').click(function(){

  $('.page__description').fadeOut(100).delay(2800).fadeIn();
setTimeout(function() {
 }, 3200);
setTimeout(function() {
    $('.page__style').removeClass('fadeIn');
  }, 1500);


  var slideTop=$('#slideTop');
  var slideBottom=$('#slideBottom');
  var loading_div=$('#loading_div');
  var loading_div_charge=$('#loading_div_charge');
  var overlay=$('#overlay');
   TweenLite.to(overlay, 0.5, {
    force3D: true,
    autoAlpha:1,
    zIndex:99
  });
 TweenLite.to(slideTop, 1, {
    top:'-1%',
    ease: Power4.easeOut,
    force3D: true
  });
  TweenLite.to(slideBottom, 1, {
    bottom:'0%',
    ease: Power4.easeOut,
    force3D: true
  });
    TweenLite.to(loading_div,1, {
    onComplete:prepare_loading
  });

    function prepare_loading(){
      TweenLite.to(slideTop,0, {
        top:'0%',
         ease: Power4.easeOut,
        force3D: true
      });
      TweenLite.to(slideBottom,0, {
        bottom:'0%',
         ease: Power4.easeOut,
        force3D: true
      });

      TweenLite.to(loading_div,0, {
        zIndex:99999,
       // width:'50%',
        //left: '25%',
        //top:'49%',
        autoAlpha:1,
        ease: Power4.easeOut,
        force3D: true,
       onComplete:load_full
      });
     

    }
    function load_full(){
        TweenLite.to(loading_div,1, {
          width:'50%',
          left: '25%',
          ease: Power4.easeOut,
          force3D: true,
          onComplete:chargebar
                 
        });
    }

    function chargebar(){

      TweenLite.to(loading_div_charge,2, {
          width:'50%',
          zIndex:999999,
          ease: SlowMo.ease.config(0.7, 0.7, false),
          force3D: true,
          onComplete:continued
        });
    }

 

     function continued(){
        TweenLite.to(loading_div_charge,1, {
        left:0,
        width:'100%',
        zIndex:999999,
        ease: Power4.easeOut,
        force3D: true,
        onComplete:finish
      });

     }

       function finish(){
      
        TweenLite.to(loading_div,0, {
          ease: Power4.easeOut,
          force3D: true,
          opacity:0
        });
        TweenLite.to(slideTop, 1, {
          top:'-50%',
          ease: Power4.easeOut,
          force3D: true
        });
        TweenLite.to(slideBottom, 1, {
          bottom:'-50%',
          ease: Power4.easeOut,
          force3D: true
        });
        //undo all
        TweenLite.to(overlay, 0, {
          force3D: true,
          autoAlpha:0,
          zIndex:0
        });
        TweenLite.to(loading_div,0, {
          width:'100%',
          left: 0,
        });
        TweenLite.to(loading_div_charge,0, {
        width: '0%',
        left:'25%',
        zIndex: 9999
     });


     }

});

// on click show page after 1500ms
$('.home_link').click(function() {
  setTimeout(function() {
    $('.home').addClass('fadeIn');
  }, 1500);
});

$('.projects_link').click(function() {
  setTimeout(function() {
    $('.projects').addClass('fadeIn');
  }, 1500);
});

$('.skills_link').click(function() {
  setTimeout(function() {
    $('.skills').addClass('fadeIn');
  }, 1500);
});

$('.about_link,#home').click(function() {
  setTimeout(function() {
    $('.about').addClass('fadeIn');
  }, 1500);
});


$('.contact_link').click(function() {
  setTimeout(function() {
    $('.contact').addClass('fadeIn');
  }, 1500);
  

  var slide = $('.hola');
  TweenLite.to(slide, 1, {
      delay: 6,
      left: 0,
      ease: Power4.easeOut,
      force3D: true,
      onStart:show_contact_div_content,
      onComplete: completeBouncle
  });

   function hola() {
        var name = $('.name');
        var span = $('.name span');
        var contact_div = $('.contact-div');
        /*TweenLite.to(name, 1, {
            opacity: 1
        });
        TweenLite.to(name, 1, {
            color: '#ffffff',
            onComplete: TweenLite.to(span, 1, {
                color: '#555255'
            })
        });
        TweenLite.to(name, 1, {
            color: '#ffffff',
            onComplete: completeBouncle
        });*/

    }

     function show_contact_div_content() {
        var contact_div=('.contact-div');
        var social = $('.social');
         TweenLite.to(contact_div, 1, {
          autoAlpha: 1,
          zIndex:99,
          delay:3
        });
  
          
       
        /*TweenLite.to(span, 1, {
            color: '#212121'
        });*/
        TweenLite.to('.fa-twitter', 2, {
            delay:4,
            autoAlpha: 1
        });
        TweenLite.to('.fa-facebook', 2, {
            delay:4.6,
            autoAlpha: 1
        });
        TweenLite.to('.fa-linkedin', 2, {
            delay:5.2,
            autoAlpha: 1
        });
     }

    function completeBouncle() {

        var fullname = $('input[name="fullname"]');
        var phone = $('input[name="phone"]');
        var email = $('input[name="email"]');
        var message = $('textarea');
        var button = $('button[type="submit"]');
        var span1 = $('.span1');
        var span2 = $('.span2');
        var interrogation = $('.span222');


        TweenLite.to(fullname, 1, {
            delay: 0.4,
            marginLeft: '0vw',
            force3D: true,
            ease: Power4.easeInOut
        });
        TweenLite.to(email, 1, {
            delay: 0.8,
            marginLeft: '0vw',
            force3D: true,
            ease: Power4.easeInOut
        });
        TweenLite.to(phone, 1, {
            delay: 1.2,
            marginLeft: '0vw',
            force3D: true,
            ease: Power4.easeInOut
        });
        TweenLite.to(message, 1, {
            delay: 1.6,
            marginLeft: '0vw',
            force3D: true,
            ease: Power4.easeInOut
        });
        TweenLite.to(button, 1, {
            delay: 2,
            marginLeft: '0vw',
            force3D: true,
            ease: Power4.easeInOut
        });
        TweenLite.to(span1, 1, {
            delay: 2.4,
            right: '50vw',
            force3D: true,
            autoAlpha: 1,
            ease: Power4.easeOut
        });
        TweenLite.to(span2, 1, {
            delay: 2.4,
            left: '50vw',
            force3D: true,
            autoAlpha: 1,
            ease: Power4.easeOut
        });
        TweenLite.to(span2, 1, {
            delay: 2.4,
            left: '50vw',
            force3D: true,
            autoAlpha: 1,
            ease: Power4.easeOut
        });
        tween = TweenMax.to(interrogation, 0.5, {
            css: {
                fontSize: '4.0rem'
            },
            repeat: -1,
            yoyo: true,
            scale: 3,
            force3D: true
        });
    }

    function changePage(){

    }
     
});

$( document ).ready(function() {
  
var name = $('.name');
  var span = $('.name span');
  var contact_div = $('.contact-div');
  var social = $('.social');
  TweenLite.to(contact_div, 1, {
      opacity: 0,
      zIndex:99,
      left:0,
  });

  TweenLite.to('.fa-twitter', 0, {
      opacity: 0
  });
  TweenLite.to('.fa-facebook', 0, {
      opacity: 0
  });
  TweenLite.to('.fa-linkedin', 0, {
      opacity: 0
  });

});

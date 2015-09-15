// namespace global

var MIAPLICACION = MIAPLICACION || {};



// Creación del contenedor llamado MIAPLICACION.metodoComun de método y propiedades comunes.
MIAPLICACION = {
  //regExParaNombre: "", // define regex para la validación del nombre
  //regExParaTelefono: "", // define regex para validación del teléfono



  //funcion que activa el boton de continue
  activa_continue_boton: function(tl){
    //variables para control de boton continue
    var sub = document.getElementsByClassName('sub');
    
    //lanzamos indefinidamente las funcion de aumentar y reducir
    tl.to(sub, 2, {
        onStart: hover,
        onComplete: out
    });

    //minimo rango border
    function hover() {
        TweenLite.to(sub, 1, {
            x: 0,
            ease: Power4.easeOut,
            force3D: true
        });
    }
    //maximo rango border
    function out() {
        TweenLite.to(sub, 1, {
            x: '-65px',
            ease: Power4.easeOut,
            force3D: true
        });
    }

  },

  mostrar_homepage: function (tl){
    //mostramos la pagina principal desde lo oscuro
    TweenMax.fromTo(document.getElementsByClassName('container'), 5, {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        delay: 1
    });
    TweenMax.fromTo(document.getElementsByClassName('red'), 5, {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        delay: 2
    });
    TweenMax.fromTo(document.getElementById('continue_div'), 5, {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        delay: 2.4
    });

       //ejecuto continue boton effect
       MIAPLICACION.activa_continue_boton(tl); 
  
    },
    //transicion entre paginas
    effecto_cambio:function(tl){
        $('.btn_nav,.name,#continue_div').click(function(){
        //document.getElementsByClassName('.btn_nav, .name,#continue_div').click(
        tl.pause(); //paro loop
        $('.page__description').fadeOut(100).delay(2800).fadeIn();
        setTimeout(function() {}, 3200);
        setTimeout(function() {
            $('.page__style').removeClass('fadeIn');
        }, 1500);

        var slideTop = document.getElementById('slideTop');
        var slideBottom = document.getElementById('slideBottom');
        var slideLeft = document.getElementById('slideLeft');
        var slideRight = document.getElementById('slideRight');
        var loading_div = document.getElementById('loading_div');
        var loading_div_charge = document.getElementById('loading_div_charge');
        var overlay = document.getElementById('overlay');
        var ball1 = document.getElementById('ball1');
        var ball2 = document.getElementById('ball2');
        var ball3 = document.getElementById('ball3');
        var loader = document.getElementById('loader');
        TweenLite.to(loader, 0, {
            zIndex: 99999
        });
        TweenLite.to(ball1, 1, {
            delay: 0.5,
            css: {
                'cx': '6',
                'visibility': 'visible'
            },
            ease: Power4.easeOut,
            force3D: true
        });
        TweenLite.to(ball2, 1, {
            delay: 0.7,
            css: {
                'cx': '30',
                'visibility': 'visible'
            },
            ease: Power4.easeOut,
            force3D: true
        });
        TweenLite.to(ball3, 1, {
            delay: 0.9,
            css: {
                'cx': '54',
                'visibility': 'visible'
            },
            ease: Power4.easeOut,
            force3D: true
        });
        TweenLite.to(overlay, 0.5, {
            force3D: true,
            autoAlpha: 1,
            zIndex: 99
        });
        TweenLite.to(slideTop, 1, {
            height: '49.5%',
            ease: Power4.easeOut,
            force3D: true
        });
        TweenLite.to(slideBottom, 1, {
            height: '49.5%',
            ease: Power4.easeOut,
            force3D: true
        });
        TweenLite.to(slideLeft, 1, {
            delay: 0.8,
            width: '25%',
            ease: Power4.easeOut,
            force3D: true
        });
        TweenLite.to(slideRight, 1, {
            delay: 0.8,
            width: '25%',
            ease: Power4.easeOut,
            force3D: true
        });

        TweenLite.to(loading_div, 1, {
            //zIndex:99999,
            delay: 0.8,
            width: '50%',
            x: '50%',
            //top:'49%',
            autoAlpha: 1,
            ease: Power4.easeOut,
            force3D: true,
        });

        TweenLite.to(loading_div, 1, {
            onComplete: prepare_loading
        });
        //cargamos la barra de carga al 0
        function prepare_loading() {

            TweenLite.to(slideTop, 1, {
                // display:'block',
                height: '49.5%',
                ease: Power4.easeOut,
                force3D: true
            });
            TweenLite.to(slideBottom, 1, {
                //  display:'block',
                height: '49.5%',
                ease: Power4.easeOut,
                force3D: true
            });

            TweenLite.to(loading_div, 1, {

                ease: Power4.easeOut,
                force3D: true,
                onComplete: load_full
            });
        }
        //rellenamos la barra 
        function load_full() {
            /* TweenLite.to(loading_div,0, {
               css:{className:'+=hovered'},
             });*/
            TweenLite.to(loading_div, 1, {
                //  width:'50%',
                //  x: '25%',
                ease: Power4.easeOut,
                force3D: true,
                onComplete: chargebar

            });
        }
        //llenamos la barra del 0 al 100 
        function chargebar() {
            TweenLite.to(ball1, 1, {
                css: {
                    'cx': '-2000'
                },
                delay: 1.8,
                ease: Power4.easeOut,
                force3D: true
            });
            TweenLite.to(ball2, 2, {
                css: {
                    'cx': '-2000'
                },
                delay: 2.0,
                ease: Power4.easeOut,
                force3D: true
            });
            TweenLite.to(ball3, 1, {
                css: {
                    'cx': '-2000'
                },
                delay: 2.2,
                ease: Power4.easeOut,
                force3D: true
            });



            TweenLite.to(loading_div_charge, 1, {
                width: '50%',
                zIndex: 99999999,
                ease: SlowMo.ease.config(0.7, 0.7, false),
                force3D: true,
                onComplete: continued
            });
        }
        //barra llega tope,expandimos maximo
        function continued() {
            TweenLite.to(slideTop, 0, {
                // display:'block',
                height: '50%',
            });
            TweenLite.to(slideBottom, 0, {
                //  display:'block',
                height: '50%',
            });

            TweenLite.to(loader, 1, {});
            TweenLite.to(loading_div, 1, {
                ease: Power4.easeOut,
                force3D: true,
            });
            TweenLite.to(slideLeft, 0, {
                width: '0%',
                ease: Power4.easeOut,
                force3D: true
            });
            TweenLite.to(slideRight, 0, {
                width: '0%',
                ease: Power4.easeOut,
                force3D: true
            });

            TweenLite.to(loading_div_charge, 0.5, {
                left: '0%',
                width: '100%',
                /*left:'-10%',
                width:'140%',*/
                //zIndex:999999,
                ease: Power4.easeOut,
                force3D: true,
                onComplete: finish
            });
        }
        //lidetop y slidebottom  y acabamos a nimacion
        function finish() {

            TweenLite.to(loading_div, 0, {
                delay: 1,
                ease: Power4.easeOut,
                force3D: true,
                // opacity:0
            });
            TweenLite.to(slideTop, 1, {

                height: '0%',
                ease: Power4.easeOut,
                force3D: true,
            });
            TweenLite.to(slideBottom, 1, {

                height: '0%',
                ease: Power4.easeOut,
                force3D: true,
            });


            //undo all
            TweenLite.to(overlay, 0, {
                force3D: true,
                autoAlpha: 0,
                zIndex: 0
            });
            TweenLite.to(loading_div, 1, {
                delay: 4,
                // width:'30%',
                // left: 0,
                autoAlpha: 0
            });
            TweenLite.to(loading_div_charge, 0, {
                width: '0%',
                left: '25%',
                zIndex: 9999
            });
            TweenLite.to(loader, 0, {
                zIndex: 0
            });
            TweenLite.to(ball1, 1, {
                css: {
                    'cx': '2000'
                },
                ease: Power4.easeOut,
                force3D: true
            });
            TweenLite.to(ball2, 2, {
                css: {
                    'cx': '2000'
                },
                ease: Power4.easeOut,
                force3D: true
            });
            TweenLite.to(ball3, 1, {
                css: {
                    'cx': '2000'
                },
                ease: Power4.easeOut,
                force3D: true
            });

            function hide() {
                autoAlpha: 1
            }
        }
      });
    },
    //mostrar contenido durante la transicion
    click_en_menu:function(){
      // on click show page after 1500ms
      $('.home_link,.name').click(function() {
          tl.resume(); //resumo loop
          jQuery('.responsive-menu').removeClass('expand');

          setTimeout(function() {
              $('.home').css('display','block');
              $('.home').addClass('fadeIn');
          }, 1500);
         $('about').css('display','none');
         $('skills').css('display','none');
         $('projects').css('display','none');
         $('contact').css('display','none');

      });

      $('.projects_link').click(function() {
          jQuery('.responsive-menu').removeClass('expand');
          
          setTimeout(function() {         
              $('.projects').addClass('fadeIn');
              $('.projects').css('display','block');
          }, 1500);
          
          $('.about').css('display','none');
          $('.skills').css('display','none');
          $('.home').css('display','none');
          $('.contact').css('display','none');
          //$('.contact').hide();
      });

      $('.skills_link').click(function() {
          jQuery('.responsive-menu').removeClass('expand');


          setTimeout(function() {
              document.getElementsByClassName('skills').style.display='block';
              $('.skills').addClass('fadeIn');
          }, 1500);
          $('.about').css('display','none');
          $('.home').css('display','none');
          $('.projects').css('display','none');
          $('.contact').css('display','none');
          //$('.contact').hide();
      });

      $('.about_link,#continue_div').click(function() {
          jQuery('.responsive-menu').removeClass('expand');

          setTimeout(function() {
              $('.about').css('display', 'block');
              $('.about').addClass('fadeIn');
              $('.home').css('display', 'none');
          }, 1500);
          //$('.about').css('display','none')
          $('.skills').css('display','none');
          $('.projects').css('display','none');
          $('.contact').css('display','none');
          // $('.contact').hide();

      });
      $('.contact_link').click(function() {
          jQuery('.responsive-menu').removeClass('expand');

          setTimeout(function() {
              $('.contact').css('display', 'block');
              $('.contact').addClass('fadeIn');
              $('.about').css('display', 'none');
              $('.skills').css('display', 'none');
              $('.projects').css('display', 'none');
          }, 1500);

          var slide = $('.hola');
          TweenLite.to(slide, 1, {
              delay: 6,
              width: '50vw',
              ease: Power4.easeOut,
              force3D: true,
              onStart: show_contact_div_content,
              onComplete: completeBouncle
          });

          function hola() {
              var name = $('.name');
              var span = $('.name span');
              var contact_div = $('.contact-div');
          }

          function show_contact_div_content() {
              var contact_div = ('.contact-div');
              var social = $('.social');
              TweenLite.to(contact_div, 1, {
                  autoAlpha: 1,
                  zIndex: 99,
                  delay: 3,
                  display: 'inline'
              });
              TweenLite.to('.fa-twitter', 2, {
                  delay: 4,
                  autoAlpha: 1
              });
              TweenLite.to('.fa-facebook', 2, {
                  delay: 4.6,
                  autoAlpha: 1
              });
              TweenLite.to('.fa-linkedin', 2, {
                  delay: 5.2,
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
                  left: '0vw',
                  force3D: true,
                  ease: Power4.easeInOut
              });
              TweenLite.to(email, 1, {
                  delay: 0.8,
                  left: '0vw',
                  force3D: true,
                  ease: Power4.easeInOut
              });
              TweenLite.to(phone, 1, {
                  delay: 1.2,
                  left: '0vw',
                  force3D: true,
                  ease: Power4.easeInOut
              });
              TweenLite.to(message, 1, {
                  delay: 1.6,
                  left: '0vw',
                  force3D: true,
                  ease: Power4.easeInOut
              });
              TweenLite.to(button, 1, {
                  delay: 2,
                  left: '0vw',
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
                  delay: 2.8,
                  left: '50vw',
                  force3D: true,
                  autoAlpha: 1,
                  ease: Power4.easeOut
              });
              TweenLite.to(span2, 1, {
                  delay: 2.8,
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


      });
    }
}

// Objeto junto a la declaración del método
MIAPLICACION.event = {
  addListener: function(el, type, fn){
    // código de relleno
  },
  removeListener: function(el, type, fn){
    // código de relleno
  },
  getEvent: function(e) {
    // código de relleno
  }

  // Puedes agregar otras propiedades y métodos
}

// Sintaxis de utilización del método addListener:
//MIAPLICACION.event.addListener("turel", "tipo", callback);

//variable estado de boton continue
var tl = new TimelineMax({
      repeat: -1,
      repeatDelay: 2,
      delay: 1
  });

//mostramos con fade la pagina principal
MIAPLICACION.mostrar_homepage(tl);
MIAPLICACION.effecto_cambio(tl);
MIAPLICACION.click_en_menu();






$(document).ready(function() {

    var isOpen = false;

    jQuery('.menu-btn2').click(function() {

        jQuery('.responsive-menu2').toggleClass('expand');
        alert(jQuery('.mobile-nav2').attr('bgcolor'));
        if (jQuery('.menu-btn2').attr('bgcolor') == 'transparent') {
            alert('asddsa');
        }
        //jQuery('.mobile-nav2').css('background-color','#252525');
        isOpen = !isOpen;
        var firstspan = jQuery('.first');
        var secondspan = jQuery('.second');
        var thirdspan = jQuery('.third');


        if (isOpen) {
            toggleTween1 = TweenLite.to(firstspan, 1, {

                y: +11,
                rotation: 45,
                force3D: true,
                ease: Power4.easeInOut
            });
            toggleTween2 = TweenLite.to(secondspan, 1, {

                x: 100,
                force3D: true,
                ease: Power4.easeInOut
            });
            toggleTween3 = TweenLite.to(thirdspan, 1, {

                y: -11,
                rotation: -45,
                force3D: true,
                ease: Power4.easeInOut

            });

        } else {
            TweenLite.to(firstspan, 1, {

                y: 0,
                rotation: 0,
                force3D: true,
                ease: Power4.easeInOut
            });
            TweenLite.to(secondspan, 1, {

                x: 0,
                force3D: true,
                ease: Power4.easeInOut
            });
            TweenLite.to(thirdspan, 1, {

                y: 0,
                rotation: 0,
                force3D: true,
                ease: Power4.easeInOut
            });

        }

    });

    jQuery('.menu-btn').click(function() {
        jQuery('.responsive-menu').toggleClass('expand');
        isOpen = !isOpen;
        var firstspan = jQuery('.first');
        var secondspan = jQuery('.second');
        var thirdspan = jQuery('.third');


        if (isOpen) {
            toggleTween1 = TweenLite.to(firstspan, 1, {

                y: +11,
                rotation: 45,
                force3D: true,
                ease: Power4.easeInOut
            });
            toggleTween2 = TweenLite.to(secondspan, 1, {

                x: 100,
                force3D: true,
                ease: Power4.easeInOut
            });
            toggleTween3 = TweenLite.to(thirdspan, 1, {

                y: -11,
                rotation: -45,
                force3D: true,
                ease: Power4.easeInOut

            });

        } else {
            TweenLite.to(firstspan, 1, {

                y: 0,
                rotation: 0,
                force3D: true,
                ease: Power4.easeInOut
            });
            TweenLite.to(secondspan, 1, {

                x: 0,
                force3D: true,
                ease: Power4.easeInOut
            });
            TweenLite.to(thirdspan, 1, {

                y: 0,
                rotation: 0,
                force3D: true,
                ease: Power4.easeInOut
            });

        }

    });




    var name = $('.name');
    var span = $('.name span');
    var contact_div = $('.contact-div');
    var social = $('.social');
    TweenLite.to(contact_div, 1, {
        opacity: 0,
        zIndex: 99,
        left: 0
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
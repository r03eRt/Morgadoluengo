jQuery(document).ready(function(event) {
    var isAnimating = false,
        firstLoad = false;
    $('.photo-div').trigger('mouseenter');
    //trigger smooth transition from the actual page to the new one 
    $('main').on('click', '[data-type="page-transition"]', function(event) {
        event.preventDefault();
        //detect which page has been selected
        var newPage = $(this).attr('href');
        //if the page is not already being animated - trigger animation
        if (!isAnimating) changePage(newPage, true);
        firstLoad = true;
    });

    //detect the 'popstate' event - e.g. user clicking the back button
    $(window).on('popstate', function() {
        if (firstLoad) {
            /*
            Safari emits a popstate event on page load - check if firstLoad is true before animating
            if it's false - the page has just been loaded 
            */
            var newPageArray = location.pathname.split('/'),
                //this is the url of the page to be loaded 
                newPage = newPageArray[newPageArray.length - 1];
            if (!isAnimating) changePage(newPage, false);
        }
        firstLoad = true;
    });

    function changePage(url, bool) {
        isAnimating = true;
        // trigger page animation
        $('body').addClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            loadNewContent(url, bool);
            $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });
        //if browser doesn't support CSS transitions
        if (!transitionsSupported()) loadNewContent(url, bool);
    }

    function loadNewContent(url, bool) {
        url = ('' == url) ? 'index.html' : url;
        var newSection = 'cd-' + url.replace('.html', '');
        var section = $('<div class="cd-main-content ' + newSection + '"></div>');

        section.load(url + ' .cd-main-content > *', function(event) {
            // load new content and replace <main> content with the new one
            $('main').html(section);
            //if browser doesn't support CSS transitions - dont wait for the end of transitions
            var delay = (transitionsSupported()) ? 1200 : 0;
            setTimeout(function() {
                //wait for the end of the transition on the loading bar before revealing the new content
                (section.hasClass('cd-about')) ? $('body').addClass('cd-about'): $('body').removeClass('cd-about');
                (section.hasClass('cd-contact')) ? $('body').addClass('cd-contact'): $('body').removeClass('cd-contact');
                (section.hasClass('cd-work')) ? $('body').addClass('cd-work'): $('body').removeClass('cd-work');
                $('body').removeClass('page-is-changing');
                $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                    isAnimating = false;

                    $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
                    if (url == 'contact.html') {
                        var name = $('.name');
                        var span = $('.name span');
                        var contact_div = $('.contact-div');
                        var social = $('.social');
                        TweenLite.to(contact_div, 0, {
                            color: '#212121',
                            opacity: 0,
                            zIndex: 99
                        });
                        TweenLite.to(name, 0, {
                            color: '#212121',
                            opacity: 0,
                            zIndex: 99
                        });
                        TweenLite.to(span, 0, {
                            color: '#212121'
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

                        var boton = $('.hola');
                        TweenLite.to(boton, 1, {
                            delay: 1,
                            left: 0,
                            ease: Power4.easeOut,
                            force3D: true,
                            onComplete: hola
                        });

                    } else if (url == 'about.html') {
                        var photo_div = $('.photo-div');
                        var about_div = $('.about-div');
                        var about_div_p = $('.about-div p');
                        var about_div_h2 = $('.about-div h2');
                        var about_div_h3 = $('.about-div h3');
                        var list_div = $('.about-div .list-div');
                        //preparacion
                        TweenLite.to(photo_div, 0, {
                            color: '#212121',
                            opacity: 0,
                            zIndex: 99
                        });
                        TweenLite.to(about_div, 0, {
                            opacity: 1,
                            zIndex: 99
                        });
                        TweenLite.to(about_div_p, 0, {
                            opacity: 1,
                            position: 'relative',
                            left: '50vw',
                            zIndex: 99
                        });
                        TweenLite.to(about_div_h2, 0, {
                            opacity: 1,
                            position: 'relative',
                            left: '50vw',
                            zIndex: 99
                        });
                        TweenLite.to(about_div_h3, 0, {
                            opacity: 1,
                            position: 'relative',
                            left: '50vw',
                            zIndex: 99
                        });
                        TweenLite.to(list_div, 0, {
                            opacity: 1,
                            position: 'relative',
                            left: '50vw',
                            zIndex: 99
                        });


                        //muestro entrada
                        TweenLite.to(about_div, 1, {
                            delay: 0.4,
                            marginLeft: '0vw',
                            force3D: true,
                            ease: Power4.easeInOut
                        });
                        TweenLite.to(about_div_p, 1, {
                            delay: 1.2,
                            left: '0vw',
                            force3D: true,
                            ease: Power4.easeInOut
                        });
                        TweenLite.to(about_div_h2, 1, {
                            delay: 0.8,
                            left: '0vw',
                            force3D: true,
                            ease: Power4.easeInOut
                        });
                        TweenLite.to(about_div_h3, 1, {
                            delay: 1.6,
                            left: '0vw',
                            force3D: true,
                            ease: Power4.easeInOut
                        });
                        TweenLite.to(list_div, 1, {
                            delay: 2,
                            left: '0vw',
                            force3D: true,
                            ease: Power4.easeInOut
                        });

                        //para sacar imagen
                        $(window).hover(function() {
                            console.log('salgo');
                            TweenLite.to(photo_div, 1, {
                                delay: 1,
                                force3D: true,
                                autoAlpha: 1,
                                ease: Power4.easeOut
                            });
                        });
                        var aFx = 70,
                            trF = 4;
                        $('.photo-div').on('mousemove touchmove', function(e) {
                            var cH = $('.photo-div').innerHeight(),
                                cW = $('.photo-div').innerWidth(),
                                eX = (e.originalEvent.type === 'touchmove') ? e.originalEvent.touches[0].pageX : e.offsetX,
                                eY = (e.originalEvent.type === 'touchmove') ? e.originalEvent.touches[0].pageY : e.offsetY;

                            $.each($('.photo-div-inner'), function(i, el) {
                                //console.log(((eY - cH / 2) / aFx) - (i*2));
                                TweenMax.set($(el), {
                                    transformOrigin: ((eX / (cW * trF) / 100 * 10000) + (trF * 10)) + '% ' + ((eY / (cH * trF) / 100 * 10000) + (trF * 10)) + '%',
                                    transformPerspective: 1000 + (i * 500)
                                });
                                TweenMax.to($(el), 0.5, {
                                    rotationX: ((eY - cH / 2) / aFx) - i * 2,
                                    rotationY: ((eX - cW / 2) / aFx * -1) - i * 2,
                                    y: (eY - (cH / 2)) / (70 - i * 20),
                                    x: (eX - (cW / 2)) / (70 - i * 20)
                                });
                            });

                        }).on('mouseout touchend', function(e) {
                            $.each($('.photo-div-inner'), function(i, el) {
                                TweenMax.to($(el), 1, {
                                    delay: .2,
                                    y: 0,
                                    x: 0,
                                    rotationX: 0,
                                    rotationY: 0,
                                    transformPerspective: '1500'
                                });
                            });
                        });
                    }
                });

                if (!transitionsSupported()) isAnimating = false;
            }, delay);

            console.log(url);
            if (url != window.location && bool) {
                //add the new page to the window.history
                //if the new page was triggered by a 'popstate' event, don't add it
                window.history.pushState({
                    path: url
                }, '', url);
            }
            //HERE GO NEW FUCNTION AFTER LOAD PAGE
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

        });




    }

    function transitionsSupported() {
        return $('html').hasClass('csstransitions');
    }

    function hola() {
        var name = $('.name');
        var span = $('.name span');
        var contact_div = $('.contact-div');
        TweenLite.to(name, 1, {
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
        });

    }

    function completeBouncle() {
        var span = $('.name span');
        var contact_div = $('.contact-div');
        TweenLite.to(span, 1, {
            color: '#555255'
        });
        var tl = new TimelineLite();
        tl.to(contact_div, 1, {
            autoAlpha: 1
        });
        var span = $('.name span');
        var contact_div = $('.contact-div');
        TweenLite.to(span, 1, {
            color: '#555255'
        });
        tl.to('.fa-twitter', 0.6, {
            autoAlpha: 1
        });
        tl.to('.fa-facebook', 0.7, {
            autoAlpha: 1
        });
        tl.to('.fa-linkedin', 0.8, {
            autoAlpha: 1
        });


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


});
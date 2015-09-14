var default_content="";

$(document).ready(function(){
	



	checkURL();
	$('ul li a').click(function (e){
			checkURL(this.hash);
	});
	
	//filling in the default content
	default_content = $('#pageContent').html();
		setInterval("checkURL()",250);


	
	
});

var lasturl="";



function checkURL(hash)
{

	if(!hash) hash=window.location.hash;
	
	if(hash != lasturl){
		lasturl=hash;
		
		// FIX - if we've used the history buttons to return to the homepage,
		// fill the pageContent with the default_content
		
		if(hash=="")
		$('#pageContent').html(default_content);
		
		else
		loadPage(hash);
	}
    //efecto hover social
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





}





function loadPage(url){

	url=url.replace('#page','');
    alert(url);
    

    if(url==3){

        var contact_content = $('.contact-content');
        var name = $('.name');
        var span = $('.name span');
        var social = $('.social');
        console.log('hola');
       
        TweenLite.to(name, 1, {
            color: '#212121',
            opacity: 1,
            zIndex: 99
        });
        TweenLite.to(span, 1, {
            color: '#212121'
        });
        
        
       

        var boton = $('.hola');
        TweenLite.to(boton, 1, {
            delay: 1,
            left: 0,
            ease: Power4.easeOut,
            force3D: true,
            onComplete: hola
        });

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
        var contact_div = $('.contact-div');
         TweenLite.to(contact_div, 1, {
            delay:1,
            color: '#212121',
            onComplete: show_contact_div_content,
            left:0,
            force3D: true,
            ease: Power4.easeInOut
        });
         var contact_content = $('.contact-content');
            TweenLite.to(contact_content, 0, {
           opacity: 0
        });
        TweenLite.to(contact_content, 0, {
           opacity:0
        });
        TweenLite.to('.fa-twitter', 0, {
           opacity:0
        });
        TweenLite.to('.fa-facebook', 0, {
           opacity:0
        });
        TweenLite.to('.fa-linkedin', 0, {
           opacity:0
        }); 

    }
 

     function show_contact_div_content() {
        var name = $('.name');
        var span = $('.name span');
        var social = $('.social');
        var contact_content = $('.contact-content');
            TweenLite.to(contact_content, 1, {
           autoAlpha: 1
        });       
       
        TweenLite.to(span, 1, {
            color: '#212121'
        });
        TweenLite.to('.fa-twitter', 2, {
            autoAlpha: 1
        });
        TweenLite.to('.fa-facebook', 2, {
            autoAlpha: 1
        });
        TweenLite.to('.fa-linkedin', 2, {
            autoAlpha: 1
        });
     }

    function completeBouncle() {
        var span = $('.name span');
            var contact_div = $('.contact-div');

    
        TweenLite.to(span, 1, {
            color: '#555255'        });
        var tl = new TimelineLite();
        tl.to(contact_div, 1, {
            autoAlpha: 1
        });
        var span = $('.name span');
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

    }
	
	//$('#loading').css('visibility','visible');
	 $('body').addClass('page-is-changing');
	 	 $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend'); 
		$.ajax({
			type: "POST",
			url: "load_page.php",
			data: 'page='+url,
			dataType: "html",
			success: function(msg){
				 setTimeout(function() {
				 	if(parseInt(msg)!=0)
				{
					$('#pageContent').html(msg);
					//$('#loading').css('visibility','hidden');
                    //alert(msg);
					
				}
            	}, 1200);
				
			}
			
		});
            setTimeout(function() {
            	    $('body').removeClass('page-is-changing');
            	}, 1200);
            //alert('hola');




}
 


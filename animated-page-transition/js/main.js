jQuery(document).ready(function(event){
  var isAnimating = false,
    firstLoad = false;
  
  //trigger smooth transition from the actual page to the new one 
  $('main').on('click', '[data-type="page-transition"]', function(event){
    event.preventDefault();
    //detect which page has been selected
    var newPage = $(this).attr('href');
    //if the page is not already being animated - trigger animation
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });

  //detect the 'popstate' event - e.g. user clicking the back button
  $(window).on('popstate', function() {
  	if( firstLoad ) {
      /*
      Safari emits a popstate event on page load - check if firstLoad is true before animating
      if it's false - the page has just been loaded 
      */
      var newPageArray = location.pathname.split('/'),
        //this is the url of the page to be loaded 
        newPage = newPageArray[newPageArray.length - 1];
      if( !isAnimating ) changePage(newPage, false);
    }
    firstLoad = true;
	});

	function changePage(url, bool) {
    isAnimating = true;
    // trigger page animation
    $('body').addClass('page-is-changing');
    $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    	loadNewContent(url, bool);
      $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    //if browser doesn't support CSS transitions
    if( !transitionsSupported() ) loadNewContent(url, bool);
	}

	function loadNewContent(url, bool) {
		url = ('' == url) ? 'index.html' : url;
  	var newSection = 'cd-'+url.replace('.html', '');
  	var section = $('<div class="cd-main-content '+newSection+'"></div>');
  		
  	section.load(url+' .cd-main-content > *', function(event){
      // load new content and replace <main> content with the new one
      $('main').html(section);
      //if browser doesn't support CSS transitions - dont wait for the end of transitions
      var delay = ( transitionsSupported() ) ? 1200 : 0;
      setTimeout(function(){
        //wait for the end of the transition on the loading bar before revealing the new content
        ( section.hasClass('cd-about') ) ? $('body').addClass('cd-about') : $('body').removeClass('cd-about');
        $('body').removeClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;

          $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
          if(url=='contact.html'){
            var name=$('.name');
        var span=$('.name span');
        var contact_div=$('.contact-div');
        TweenLite.to(contact_div,0,{color:'#212121',opacity:0,zIndex:99});
        TweenLite.to(name,0,{color:'#212121',opacity:0,zIndex:99});
        TweenLite.to(span,0,{color:'#212121'});

        var boton=$('.hola');
        TweenLite.to(boton, 1, {delay:1,left:0,ease: Power4.easeOut,force3D:true,onComplete: hola});

        }
        });

        if( !transitionsSupported() ) isAnimating = false;
      }, delay);

      console.log(url);
      
        
      
      
      if(url!=window.location && bool){
        //add the new page to the window.history
        //if the new page was triggered by a 'popstate' event, don't add it
        window.history.pushState({path: url},'',url);
      }

		});

  }

  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }

 function hola(){
        var name=$('.name');
        var span=$('.name span');
        var contact_div=$('.contact-div');
        TweenLite.to(name,1,{opacity:1});
        TweenLite.to(name,1,{color:'#ffffff',onComplete:TweenLite.to(span,1,{color:'#555255'})});
        TweenLite.to(name,1,{color:'#ffffff',onComplete:completeBouncle});

      } 
      function completeBouncle(){
        var span=$('.name span');
        var contact_div=$('.contact-div');
        TweenLite.to(span,1,{color:'#555255'});
        var tl = new TimelineLite();
        tl.to(contact_div, 1, { autoAlpha:1}); 
        var span=$('.name span');
        var contact_div=$('.contact-div');
        TweenLite.to(span,1,{color:'#555255'});
        var fullname=$('input[name="fullname"]');
        var phone=$('input[name="phone"]');
        var email=$('input[name="email"]');
        var message=$('textarea');
        var button=$('button[type="submit"]');
        var span1=$('.span1');
        var span2=$('.span2');
        var interrogation=$('.span222');


      TweenLite.to(fullname,1,{delay:0.4,marginLeft:'0vw',force3D:true,ease: Power4.easeInOut});
      TweenLite.to(email,1,{delay:0.8,marginLeft:'0vw',force3D:true,ease: Power4.easeInOut});
      TweenLite.to(phone,1,{delay:1.2,marginLeft:'0vw',force3D:true,ease: Power4.easeInOut});
      TweenLite.to(message,1,{delay:1.6,marginLeft:'0vw',force3D:true,ease: Power4.easeInOut});
      TweenLite.to(button ,1,{delay:2,marginLeft:'0vw',force3D:true,ease: Power4.easeInOut});
      TweenLite.to(span1 ,1,{delay:2.4,right:'50vw',force3D:true,ease: Power4.easeInOut});
      TweenLite.to(span2 ,1,{delay:2.4,left:'50vw',force3D:true,ease: Power4.easeInOut});
      TweenLite.to(span2 ,1,{delay:2.4,left:'50vw',force3D:true,ease: Power4.easeInOut});
      var tl2 = new TimelineMax({
        onReverseComplete:reverseRepeat,
        onReverseCompleteParams:['{self}'],
        onComplete:complete,
        onCompleteParams:['{self}']
      });
      function reverseRepeat(tl) {
        tl.reverse(0); // 0 sets the playhead at the end of the animation
      }
      function complete(tl) {
        tl.restart(); // 0 sets the playhead at the end of the animation
      }
        tl.to(interrogation, 3,{ css:{color:'blue'},rotation:360, transformOrigin:"150px 150px", ease:Linear.easeNone});
        




      }

  /*$('#pincha').click(function(){

      $('.hola').toggleClass('change');
        });*/

});




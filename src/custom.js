document.addEventListener('DOMContentLoaded', function() {

  // img to svg
   $('img[src*=".svg"]').each(function(){
       var $img = jQuery(this);
       var imgID = $img.attr('id');
       var imgClass = $img.attr('class');
       var imgURL = $img.attr('src');

       jQuery.get(imgURL, function(data) {
           // Get the SVG tag, ignore the rest
           var $svg = jQuery(data).find('svg');

           // Add replaced image's ID to the new SVG
           if(typeof imgID !== 'undefined') {
               $svg = $svg.attr('id', imgID);
           }
           // Add replaced image's classes to the new SVG
           if(typeof imgClass !== 'undefined') {
               $svg = $svg.attr('class', imgClass+' replaced-svg');
           }

           // Remove any invalid XML tags as per http://validator.w3.org
           $svg = $svg.removeAttr('xmlns:a');

           // Check if the viewport is set, else we gonna set it if we can.
           if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
               $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
           }

           // Replace image with new SVG
           $img.replaceWith($svg);

       }, 'xml');

   });

   // menu
   var burger = 0
    $('#menu-burger').click(function(){
      if (burger == 0) {
        burger = 1;
        $('#menu-burger').addClass('burger-exit');
        $('nav.menu').removeClass('menu-closed');
        $('nav.menu').addClass('menu-opened');
      } else {
        burger = 0;
        $('#menu-burger').removeClass('burger-exit');
        $('nav.menu').removeClass('menu-opened');
        $('nav.menu').addClass('menu-closed');
      }
    })
    $('nav ul li a').click(function(){
        burger = 0;
        $('#menu-burger').removeClass('burger-exit');
        $('nav.menu').removeClass('menu-opened');
        $('nav.menu').addClass('menu-closed');
    })

  // ScrollMagic
  var controller = new ScrollMagic.Controller();

      // .aboutme button
        new ScrollMagic.Scene({triggerElement: ".aboutme button"})
        .setClassToggle(".aboutme button", "triggerred") // add class toggle
        .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      // .aboutme p
        new ScrollMagic.Scene({triggerElement: ".aboutme button"})
        .setClassToggle(".aboutme p", "triggerred") // add class toggle
        .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);


      // .skills h2
        new ScrollMagic.Scene({triggerElement: ".skills h2"})
        .setClassToggle(".skills h2", "triggerred") // add class toggle
        .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      // .skills .skills-container
        new ScrollMagic.Scene({triggerElement: ".skills .skills-item"})
        .setClassToggle(".skills .skills-item", "triggerred") // add class toggle
        .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      // background-attachment disabled - Skills
        new ScrollMagic.Scene({triggerElement: ".aboutme", triggerHook: 0})
        .setClassToggle(".skills", "attached")
        .reverse(true)
        // .addIndicators()
        .addTo(controller);

      // Change color Burger Menu - white
        new ScrollMagic.Scene({triggerElement: ".aboutme", triggerHook: 0.08})
        .setClassToggle("#menu-burger", "for-black")
        .reverse(true)
        //.addIndicators()
        .addTo(controller);

      //Change color Burger Menu - black
      new ScrollMagic.Scene({triggerElement: ".skills", triggerHook: 0.08})
      .setClassToggle("#menu-burger", "no-more")
      .reverse(true)
      //.addIndicators()
      .addTo(controller);

  // Anime.JS -- Intro logo
  var morphing_tl = anime({
    targets: '#logo_shapes .polymorph-tl',
    points: [
      { value: '0,0 0,72 47,72 47,0' }
    ],
    easing: 'easeInOutQuart',
    duration: 800,
    delay: 0
    });

      var morphing_bl = anime({
    targets: '#logo_shapes .polymorph-bl',
    points: [
      { value: '0,144 47,72 94,72 47,144' }
    ],
    easing: 'easeInOutQuart',
    duration: 800,
    delay: 200
      });

      var morphing_c = anime({
    targets: '#logo_shapes .polymorph-c',
    points: [
      { value: '94,0 141,0 141,144 94,144' }
    ],
    easing: 'easeInOutQuart',
    duration: 800,
    delay: 400
    });

      var morphing_tr = anime({
    targets: '#logo_shapes .polymorph-tr',
    points: [
      { value: '235,0 188,0 141,72 188,72' }
    ],
    easing: 'easeInOutQuart',
    duration: 800,
    delay: 600
    });

      var morphing_br = anime({
    targets: '#logo_shapes .polymorph-br',
    points: [
      { value: '188,72 235,72 235,144 188,144' }
    ],
    easing: 'easeInOutQuart',
    duration: 800,
    delay: 800
    });

      var logo_name = anime({
    targets: '#intro-logo #logo_name',
    translateY: '-0px',
    easing: 'easeOutQuart',
    duration: 500,
    delay: 2000
    });

      var end_transition = logo_name.finished.then(transition);

      function transition() {
        $('.intro-logo').addClass('ended');
        $('.intro').addClass('ended');
        $('body').css('overflow-y', 'scroll')

      }

  // Case studies are coming ?
  function comingsoon() {
    alert("Coming soon !");
  }

  // 000Webhost...
  $('*[style="text-align: right;position: fixed;z-index:9999999;bottom: 0; width: 100%;cursor: pointer;line-height: 0;display:block !important;"').hide();

  console.log("All's good, Jeffrey")
});

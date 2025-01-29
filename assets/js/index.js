
// LOADER

gsap.registerPlugin(ScrollTrigger);

paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
};

Pace.on('done', function () {
  gsap.to('.p', 1, {
    opacity: 0,
    y: '-15%',
    stagger: -.1,
  })

  gsap.to('#preloader', 1.5, {
    y: '-100%',
    ease: 'Expo.easeInOut',
    delay: 1,
    onComplete: function () {

      //ALL THE ANIMATIONS THAT WILL TAKE PLACE AFTER THE PAGE IS LOADED


      $('.text').each(function () {
        $(this).delay(1200).addClass('reveal')
      })
      $('.img').each(function () {
        $(this).delay(1200).addClass('reveal')
      })



      if (document.querySelector('#index-two') || document.querySelector('#index-one')) {
        gsap.to('.new-release', 0, { opacity: 1 })
        $('.new-release').delay(2000).addClass('opacity');
      }



      if (document.querySelector('.fade-in')) {
        gsap.to('.fade-in', 1, { delay: 1, opacity: 1, stagger: .4 })
      }


      if (document.querySelector('.opacity-contact')) {

        gsap.to('.opacity-contact', 1, { delay: 1, opacity: 1, stagger: .4 })

      }



      $('.menu-bar-line').delay(2000).addClass('opacity');




      // heading typing effect
      const text = "Simplon's";
      const typingText = document.getElementById('typing-text');
      let index = 0;
      let isErasing = false;

      function typeEffect() {
        if (!isErasing && index <= text.length) {
          typingText.textContent = text.substring(0, index);
          index++;
          setTimeout(typeEffect, 150);
        } else if (isErasing && index >= 0) {
          typingText.textContent = text.substring(0, index);
          index--;
          setTimeout(typeEffect, 100);
        }

        if (index === text.length) {
          setTimeout(() => {
            isErasing = true;
            typeEffect();
          }, 1500);
        } else if (index === 0 && isErasing) {
          isErasing = false;
          setTimeout(typeEffect, 500);
        }
      }

      typeEffect();



      //ALL THE ANIMATIONS THAT WILL TAKE PLACE 


      $(function () {
        var elements = $(".text-scroll, .img-scroll").toArray();
        $(window).scroll(function () {
          elements.forEach(function (item) {
            if ($(this).scrollTop() >= $(item).offset().top - window.innerHeight) {
              $(item).addClass("reveal");
            }
          });
        });
        elements.forEach(function (item) {
          if ($(this).scrollTop() >= $(item).offset().top - window.innerHeight) {
            $(item).addClass("reveal");
          }
        });
      });
      if (document.querySelector('.fade-up')) {
        gsap.to('.fade-up', 1, { opacity: 1, y: 0, delay: 1, stagger: .1 })
      }
    }
  })
});






// SCROLL PROGRESS ANIMATION

$(window).scroll(function () {
  var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();
  scrollPercent = (scroll / (dh - wh)) * 100;
  $(".progressbar").css("height", scrollPercent + "%");
});



//NAVIGATION CONTENT HOVER EFFECT 
$(function () {

  TweenMax.set(".project-preview", { width: 0 });

  $('.navigation-content ul li a').on('mouseover', function () {
    gsap.to('.project-preview', 1, { width: '200px', ease: Expo.easeInOut })
  })


  $('.navigation-content ul li a').on('mouseout', function () {
    gsap.to('.project-preview', 1, { width: '0px', ease: Expo.easeInOut })
  })


  $(".navigation-content ul li a").hover(function (e) {
    var img = e.currentTarget.dataset.img;

    $(".project-preview").css({ "background-image": `url(${img}) ` });

  });


  var $img = $('.project-preview');
  function cursormover(e) {
    gsap.to($img, {
      x: e.clientX,
      y: e.clientY,
    })
  }
  $('.navigation-content').on('mousemove', cursormover);
})






//NAVIGATION CONTENT 
$(function () {
  $('.menu-bar').on('click', function () {
    gsap.to('.navigation-content', 1.5, { y: 0, ease: 'Expo.easeInOut' })
    gsap.to('.navigation-content ul li', 1, { opacity: 1, delay: 1, stagger: .1 })
    gsap.to('.navigation-content .opacity', .5, { opacity: 1, stagger: .1, delay: 1 })

    if (document.querySelector('.fade-up')) {

      gsap.to('.fade-up', 1, { backdropFilter: 'blur(0px)', delay: 1 });
    }
  })




  $('.navigation-close').on('click', function () {
    gsap.to('.navigation-content ul li', .5, { opacity: 0, stagger: -.1 })
    gsap.to('.navigation-content .opacity', .5, { opacity: 0, stagger: .1 })
    gsap.to('.navigation-content', 1.5, { y: '100%', ease: 'Expo.easeInOut', delay: .2 })

    if (document.querySelector('.fade-up')) {

      gsap.to('.fade-up', 1, { backdropFilter: 'blur(20px)', delay: .5 });

    }
  })
})







//CUSTOM CURSOR ANIMATION
$(function () {
  var $cursor = $('.cursor');
  var $cursortwo = $('.cursor-two')
  function cursormover(e) {

    gsap.to($cursor, {
      x: e.clientX,
      y: e.clientY,
    })
    gsap.to($cursortwo, {
      x: e.clientX,
      y: e.clientY,
    })
  }
  function cursorhover(e) {
    gsap.to($cursor, {
      scale: 1.5,
      opacity: .4,
      background: '#AF8F6F',
      border: 'none',
      ease: Expo.easeOut,
    })
    gsap.to($cursortwo, {
      scale: 0,
      opacity: 0
    })
  }
  function cursor(e) {
    gsap.to($cursor, {
      scale: 1,
      opacity: 1,
      background: 'transparent',
      border: '1px solid #74512D',
      innerHTML: ''
    })
    gsap.to($cursortwo, {
      scale: 1,
      opacity: 1
    })
  }
  $(window).on('mousemove', cursormover);
  $('a').hover(cursorhover, cursor);
  $('.hover').hover(cursorhover, cursor);
  $('.mouse').hover(cursorhover, cursor);

})


const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".flip-card");
const cardWidth = cards[0].offsetWidth + 20;
const visibleCards = Math.ceil(window.innerWidth / cardWidth);
const totalCards = cards.length;


for (let i = 0; i < visibleCards; i++) {
  const clone = cards[i % totalCards].cloneNode(true);
  slider.appendChild(clone);
}


const totalWidth = cardWidth * (totalCards + visibleCards);


const animationDuration = totalWidth / 100;


// Animate the cards on scroll (entry and exit)
gsap.utils.toArray(".flip-card").forEach((card) => {
  gsap.fromTo(
    card,
    {
      y: 100, // Start slightly below
      opacity: 0, // Start completely hidden
    },
    {
      y: 0, // Slide into normal position
      opacity: 1, // Fully visible
      duration: 1.2, // Smooth transition
      ease: "power3.out", // Smooth easing
      scrollTrigger: {
        trigger: card, // Trigger each card individually
        start: "top 85%", // Start when the card enters 85% of the viewport
        end: "top 20%", // End when the card leaves 20% of the viewport
        toggleActions: "play reverse play reverse", // Replay animation on re-entrance
        once: false, // Allow re-triggering on scroll up
        scrub: false, // Smooth animation without scrubbing
      },
    }
  );
});

// GSAP Animation
gsap.to(slider, {
  x: -totalWidth + cardWidth * visibleCards,
  duration: animationDuration,
  ease: "none",
  repeat: -1,
  modifiers: {
    x: (x) => (parseFloat(x) % totalWidth) + "px",
  },
});




ScrollTrigger.create({
  trigger: ".popular-collection",
  start: "top 65%",  
  end: "bottom 60%", 
  onEnter: () => gsap.to("body", { backgroundColor: "#110900", duration: 0.5 }),  // Dark Brown when entering
  onLeave: () => gsap.to("body", { backgroundColor: "#FFFBEF", duration: 0.5 }), // Back to white when leaving down
  onEnterBack: () => gsap.to("body", { backgroundColor: "#110900", duration: 0.5 }), // Dark Brown again when scrolling back up
  onLeaveBack: () => gsap.to("body", { backgroundColor: "#FFFBEF", duration: 0.5 }) // White again when scrolling past
});

// Animate Collection Items
gsap.from(".collection-item, .collection", {
  scrollTrigger: {
    trigger: ".popular-collection",
    start: "top 90%",
    end: "bottom 20%",
    scrub: 1,
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});




function smoothScrollTestimonials(selector, direction) {
  gsap.fromTo(
      selector,
      {
          x: direction === "left" ? "-120%" : "120%", // Start slightly outside for smooth effect
          opacity: 0
      },
      {
          x: "0%", // Move into view naturally
          opacity: 1,
          duration: 2, // Increased duration for smoothness
          ease: "power2.out", // Softer easing for fluid motion
          scrollTrigger: {
              trigger: selector,
              start: "top 85%", // Starts when closer to view for a natural feel
              end: "top -15%", // Gradual exit
              scrub: 1.5, // Adjusted for smoother motion
              toggleActions: "play reverse play reverse"
          }
      }
  );
}

// Apply the function to each row smoothly
smoothScrollTestimonials(".row-1", "right");
smoothScrollTestimonials(".row-2", "left");
smoothScrollTestimonials(".row-3", "right");



// contacttt uss 

gsap.from(".contact-title", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%",
      end: "top 50%",
      scrub: 1
  }
});

gsap.from(".contact-form", {
  opacity: 0,
  scale: 0.9,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
      trigger: ".contact-section",
      start: "top 75%",
      end: "top 45%",
      scrub: 1
  }
});
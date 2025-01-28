
// LOADER
paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
    };
  
    Pace.on('done', function() {
        gsap.to('.p',1,{
          opacity:0,
          y:'-15%',
          stagger:-.1,
        })
  
    gsap.to('#preloader',1.5,{
        y:'-100%',
        ease:'Expo.easeInOut',
        delay:1,
        onComplete: function() {

            //ALL THE ANIMATIONS THAT WILL TAKE PLACE AFTER THE PAGE IS LOADED


            $('.text').each(function(){
                $(this).delay(1200).addClass('reveal')
            })
            $('.img').each(function(){
                $(this).delay(1200).addClass('reveal')
            })



            if(document.querySelector('#index-two') || document.querySelector('#index-one')){
                gsap.to('.new-release',0,{opacity:1})
                $('.new-release').delay(2000).addClass('opacity');
            }



            if(document.querySelector('.fade-in') ){
                gsap.to('.fade-in',1,{delay:1,opacity:1,stagger:.4})
            }


            if(document.querySelector('.opacity-contact')){

                gsap.to('.opacity-contact',1,{delay:1,opacity:1,stagger:.4})

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
            if ($(this).scrollTop() >= $(item).offset().top - window.innerHeight ) {
                $(item).addClass("reveal");
            }
        });
    });
        if(document.querySelector('.fade-up') ){
            gsap.to('.fade-up',1,{opacity:1,y:0,delay:1,stagger:.1})
        }
          }
    })
   });






   // SCROLL PROGRESS ANIMATION

   $(window).scroll(function() {
    var scroll = $(window).scrollTop(),
      dh = $(document).height(),
      wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 100;
    $(".progressbar").css("height", scrollPercent + "%");
  });



//NAVIGATION CONTENT HOVER EFFECT 
  $(function(){

 TweenMax.set(".project-preview", { width: 0 });

  $('.navigation-content ul li a').on('mouseover',function(){
      gsap.to('.project-preview',1,{width:'200px',ease: Expo.easeInOut})
  })


  $('.navigation-content ul li a').on('mouseout',function(){
    gsap.to('.project-preview',1,{width:'0px',ease: Expo.easeInOut})
})


$(".navigation-content ul li a").hover(function(e) {
    var img = e.currentTarget.dataset.img;

    $(".project-preview").css({ "background-image": `url(${img}) `});
 
  });
  

    var $img = $('.project-preview');
      function cursormover(e){
       gsap.to( $img, {
         x : e.clientX,
         y : e.clientY,
        })
      }
      $('.navigation-content').on('mousemove',cursormover);
  })

   




   //NAVIGATION CONTENT 
    $(function(){
        $('.menu-bar').on('click',function(){
            gsap.to('.navigation-content',1.5,{y:0, ease:'Expo.easeInOut'})
            gsap.to('.navigation-content ul li',1,{opacity:1,delay:1,stagger:.1})
            gsap.to('.navigation-content .opacity',.5,{opacity:1,stagger:.1,delay:1})

            if(document.querySelector('.fade-up')){

                gsap.to('.fade-up',1,{backdropFilter:'blur(0px)',delay:1});
            }  
        })




        $('.navigation-close').on('click',function(){
            gsap.to('.navigation-content ul li',.5,{opacity:0,stagger:-.1})
            gsap.to('.navigation-content .opacity',.5,{opacity:0,stagger:.1})
            gsap.to('.navigation-content',1.5,{y:'100%',ease:'Expo.easeInOut',delay:.2})

            if(document.querySelector('.fade-up')){

                gsap.to('.fade-up',1,{backdropFilter:'blur(20px)',delay:.5});

            }  
        })
    })



      
   


          //CUSTOM CURSOR ANIMATION
          $(function(){
            var $cursor = $('.cursor');
            var $cursortwo = $('.cursor-two')
              function cursormover(e){
               
               gsap.to( $cursor , {
                 x : e.clientX ,
                 y : e.clientY,
                })
                gsap.to( $cursortwo , {
                  x : e.clientX ,
                  y : e.clientY,
                 })
              }
              function cursorhover(e){
               gsap.to( $cursor,{
                scale:1.5,
                opacity:.4,
                background:'#AF8F6F',
                border:'none',
                ease: Expo.easeOut,
               })
               gsap.to( $cursortwo,{
                scale:0,
                opacity:0
               })
             }
             function cursor(e){
               gsap.to( $cursor, {
                scale:1,
                opacity:1,
                background:'transparent',
                border:'1px solid #74512D',
                innerHTML:''
               }) 
               gsap.to( $cursortwo,{
                scale:1,
                opacity:1
               })
             }
             $(window).on('mousemove',cursormover);
             $('a').hover(cursorhover,cursor);
             $('.hover').hover(cursorhover,cursor);
             $('.mouse').hover(cursorhover,cursor);
             
          })
    
            




  
 







const btnScrollUp = document.querySelector("#btnScrollUp");

btnScrollUp.addEventListener('click', () => {
 //window.scrollTo(0, 0);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
});


const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navDet = document.querySelector('.nav-details')
  const navDets = document.querySelectorAll('.nav-details li')


  burger.addEventListener('click', () => {
    navDet.classList.toggle('nav-active');

    navDets.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
      }
  
    });

    //Burger animation

    burger.classList.toggle('toggle');



  }); 

  
}

navSlide();




//time interval for loading screen

setTimeout(
  function() {
    let ring1 = document.querySelector(".ring");
    ring1.style.transition = "opacity " + 3 + "s";
    ring1.style.opacity = 0;
    ring1.addEventListener("transitionend", function() {
      //console.log("transition has ended, set display: none;");
      ring1.style.display = "none";
      document.querySelector(".wrapper").style.display = "block";
      document.querySelector('#btnScrollUp').style.display = "block"
    });
  }, 500
)







var nav = document.querySelector('.nav');

//initialize throttleTimer as false
let throttleTimer = false;
 
const throttle = (callback, time) => {
    //don't run the function while throttle timer is true
    if (throttleTimer) return;
     
    //first set throttle timer to true so the function doesn't run
    throttleTimer = true;
     
    setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
        callback();
        throttleTimer = false;
    }, time);
}

window.onscroll = function() {
    if(window.pageYOffset > 0) {
        nav.classList.add('nav-bar')
    }else {
        nav.classList.remove('nav-bar')
    }
}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const amazonDiv = entry.target.querySelector('.amazon-div');
      const diceDiv = entry.target.querySelector('.dice-div');
      const linkDiv = entry.target.querySelector('.linkedin-div');
      
    
      if (entry.isIntersecting) {
        amazonDiv.classList.add('move-up');
        diceDiv.classList.add('move-up');
        linkDiv.classList.add('move-up');
        return; // if we added the class, exit the function
      }
      amazonDiv.classList.remove('move-up');
      diceDiv.classList.remove('move-up');
      linkDiv.classList.remove('move-up');
    });
  });

  observer.observe(document.querySelector('.projects'));


  
    
  
  const observer1 = new IntersectionObserver(jobs => {
    jobs.forEach(job => {
      const introOne = job.target.querySelector('.intro-one');
      const introTwo = job.target.querySelector('.intro-two');
      const introThree = job.target.querySelector('.intro-three');
      
    
      if (job.isIntersecting) {
        introOne.classList.add('move-left');
        introTwo.classList.add('move-left');
        introThree.classList.add('move-left');
        return; // if we added the class, exit the function
      }
      introOne.classList.remove('moveleft');
    introTwo.classList.remove('moveleft');
    introThree.classList.remove('moveleft');
    });
  });

  observer1.observe(document.querySelector('#intro'));



  const scrollOffset = 100;
 
  const scrollElement = document.querySelector(".js-scroll");
   
  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
   
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
  };
   
  const displayScrollElement = () => {
    scrollElement.classList.add('scrolled');
  }
   
  const hideScrollElement = () => {
    scrollElement.classList.remove('scrolled');
  }
   
  const handleScrollAnimation = () => {
    if (elementInView(scrollElement, scrollOffset)) {
        displayScrollElement();
    } else {
      hideScrollElement();
    }
  }
   
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })





  //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



  

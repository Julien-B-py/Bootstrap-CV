ScrollTrigger.batch(".resume p", {
  onEnter: elements => {
    gsap.from(elements, {
      scrollTrigger: {
        trigger: elements,
        start: "center bottom",

        toggleActions: "play none none none",

      },

      autoAlpha: 0,
      scale: 0,
      stagger: 0.3
    });
  },
  once: true
});



ScrollTrigger.batch(".skill-card", {
  onEnter: elements => {
    gsap.from(elements, {
      scrollTrigger: {
        trigger: elements,
        start: "center bottom",

        toggleActions: "play none none none",

      },
      bottom: "-100%",
      autoAlpha: 0,
      scale: 0,
      stagger: 0.3
    });
  },
  once: true
});

ScrollTrigger.batch(".edu-card", {
  onEnter: elements => {
    gsap.from(elements, {
      scrollTrigger: {
        trigger: elements,
        start: "center bottom",

        toggleActions: "play none none none",

      },
      right: "-200%",
      autoAlpha: 0,
      scale: 0,
      stagger: 0.7
    });
  },
  once: true
});


gsap.from(".divers-container", {
  scrollTrigger: {
    trigger: ".divers-container",
    start: "center bottom",

    toggleActions: "play none none none",

  },
  y: '-50%',
  autoAlpha: 0,
  scale: 0,
  stagger: 0.1,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#footer",
    start: "center bottom",
    toggleActions: "play none none none",
  }
});
const footerIconOdd = document.querySelector('.footer-icon:nth-child(odd)');
const footerIconEven = document.querySelector('.footer-icon:nth-child(even)');
tl.from(footerIconOdd, {
  autoAlpha: 0,
  x: "-100%"
}).from(footerIconEven, {
  autoAlpha: 0,
  x: "+100%"
}, 0).from("#footer p", {
  y: "+100%",
  scale: 0
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "center bottom",
    toggleActions: "play none none none",
  }
});
tl2.from(".icon-container", {
    scale: 0
  }).from(".contact-icon", {
    x: "-200%",
    autoAlpha: 0,
    rotation: -360,
    ease: Elastic.easeOut.config(1, 0.3),
    duration: 1.5
  })
  .from(".contact-text", {
    x: '+200%',
    autoAlpha: 0,
    scale: 0
  }, "-=0.8");

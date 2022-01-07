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
      stagger: 0.1
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
  y:'-50%',
  autoAlpha: 0,
  scale: 0,
  stagger: 0.1,
});

var tl = gsap.timeline({scrollTrigger: {
    trigger: "#footer",
        start: "center bottom",
    toggleActions: "play none none none",
  }})
tl.from(".footer-icon", {scale:0})
tl.from("#footer p", {scale:0})

var tl2 = gsap.timeline({scrollTrigger: {
    trigger: "#contact",
        start: "center bottom",
    toggleActions: "play none none none",
  }})
tl2.from(".icon-container", {scale:0})
tl2.from(".contact-text", {x:'+200%', autoAlpha:0, scale:0})

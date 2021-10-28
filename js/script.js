let controller =  new ScrollMagic.Controller();
let timeline = new TimelineMax();


timeline
.fromTo(".icon-container", {opacity:0},{opacity:1, duration:1})
.fromTo(".contact-text", {opacity:0},{opacity:1, duration:1})
;

let scene= new ScrollMagic.Scene({
    triggerElement: "#contact",
    duration: "70%",
    triggerHook:  'onEnter',
})
.setTween(timeline)
.addTo(controller);






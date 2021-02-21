var tl2 = gsap.timeline({repeat: -1, repeatDelay: 0});

tl2.to(".yellowhighlight", {duration: 0.75, borderRightColor: 'rgba(0, 0, 0, 1)', yoyo: true, ease: "none"});
tl2.to(".yellowhighlight", {duration: 0.75, borderRightColor: 'rgba(0, 0, 0, 0)', yoyo: true, ease: "none"});
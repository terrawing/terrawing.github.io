gsap.from(".bar1", {delay: 1, duration: 1.5, scaleX: 0.25, transformOrigin: 'left', yoyo: true, repeat: -1, ease: 'power1.out'});
gsap.from(".bar2", {delay: 2, duration: 1.75, scaleX: 0.25, transformOrigin: 'left', yoyo: true, repeat: -1, ease: 'power1.out'}, "=.25");
gsap.from(".bar3", {delay: 3, duration: 2, scaleX: 0.25, transformOrigin: 'left', yoyo: true, repeat: -1, ease: 'power1.out'}, "=.5");

var tl = gsap.timeline({repeat: -1, repeatDelay: 1});

tl.to(".key1", {duration: 0.75, fill: '#023047', yoyo: true, ease: "none"});
tl.to(".key1", {duration: 0.75, fill: '#FFFFFF', yoyo: true, ease: "none"});
tl.to(".key2", {duration: 0.75, fill: '#023047', yoyo: true, ease: "none"});
tl.to(".key2", {duration: 0.75, fill: '#FFFFFF', yoyo: true, ease: "none"});
tl.to(".key3", {duration: 0.75, fill: '#023047', yoyo: true, ease: "none"});
tl.to(".key3", {duration: 0.75, fill: '#FFFFFF', yoyo: true, ease: "none"});
tl.to(".key4", {duration: 0.75, fill: '#023047', yoyo: true, ease: "none"});
tl.to(".key4", {duration: 0.75, fill: '#FFFFFF', yoyo: true, ease: "none"});
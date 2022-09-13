const tl = gsap.timeline({ defaults: { ease: "power1.out"}});

tl.to('.titleText span', {y:'0%', duration: 0.35})
tl.to('header', {y:'0%', duration: 0.35})
tl.to('li, a, button', {color:'#FDFFFC', duration: 0.35})
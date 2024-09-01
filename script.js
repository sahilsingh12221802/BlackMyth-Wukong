function HomepageAnimation(){
    gsap.set(".slider",{scale:5});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
    },
})

tl.to(".vdodiv",{
    '--clip': "0%",
    ease: Power2,
}, 'a')

tl.to(".slider",{
    scale: 1,
    ease: Power2
}, 'a')


tl.to(".lft",{
    xPercent: -10,
    stagger: .03,
    ease: Power4
},'b')

tl.to(".rgt",{
    xPercent: 10,
    stagger: .03,
    ease: Power4
},'b')




}
HomepageAnimation();


function realPageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
        xPercent: -200,
        ease: Power4
    })
}
realPageAnimation();

function teamAnimation(){
    document.querySelectorAll(".listelem").forEach(function(el){
        el.addEventListener("mousemove",function(dets){
            gsap.to(this.querySelector(".picture"), {opacity: 1, x: gsap.utils.mapRange(0, window.innerWidth, -300, 300, dets.clientX) ,ease: Power4, duration: 0.5})
        })
        el.addEventListener("mouseleave",function(dets){
            gsap.to(this.querySelector(".picture"), {opacity: 0, ease: Power4, duration: 0.5})
        })
    })
}
teamAnimation();

function paraAnimation(){
    var clutter = ""
document.querySelector(".textpara").textContent.split("").forEach(function(e){
    if(e == " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
})
document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span", {opacity: .1})
gsap.set(".textpara span", {
    scrollTrigger: {
        trigger: ".para",
        start: "top 60%",
        end: "bottom 90%",
        scrub: 2,
    },
    opacity: 1,
    stagger: .03,
    ease: Power4
})
}
paraAnimation();

function para1Animation(){
    var clutter = ""
document.querySelector(".textpara1").textContent.split("").forEach(function(e){
    if(e == " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
})
document.querySelector(".textpara1").innerHTML = clutter;

gsap.set(".textpara1 span", {opacity: .1})
gsap.set(".textpara1 span", {
    scrollTrigger: {
        trigger: ".para1",
        start: "top 60%",
        end: "bottom 90%",
        scrub: 2,
    },
    markers: true,
    opacity: 1,
    stagger: .03,
    ease: Power4
})
}
para1Animation();

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco();

function capsuleAnimation(){
    gsap.to(".capsule:nth-child(2",{
        scrollTrigger:{
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
        },
        y:0,
        ease: Power4
    })
}
capsuleAnimation();
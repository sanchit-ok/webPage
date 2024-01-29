

function loading() {
    var tl=gsap.timeline()
    tl.to(".yellow1", {
    top:"-100%",
    durration:0.5,
    delay:0.7,
    ease:"expo.out"
})
    tl.from(".yellow2", {
    top:"100%",
    durration:0.5,
    delay:0.7,
    ease:"expo.out"
},"anim")
    tl.to(".loader h1", {
    delay:0.3,
    color:"black",
},"anim")
    tl.to(".loader",{
    display:"none"
})
}
loading()

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-container'),
    smooth: true
});
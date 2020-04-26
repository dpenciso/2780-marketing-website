function openNav() {
    document.getElementById("open").style.display = "none"
    document.getElementById("nav").style.width = "70%"
}

function closeNav() {
    document.getElementById("nav").style.width = "0"
    document.getElementById("open").style.display = "block"

}

gsap.from("#logo", {duration: 1.5, y: -300, opacity: 0, scale: 0.5});



let hoverAnimation = document.querySelector('#cardDiv')
hoverAnimation.addEventListener('mouseover', event => {
    gsap.to('#cardDiv', {duration: 0.5, scale: 1.05})
})
hoverAnimation.addEventListener('mouseout', event => {
    gsap.to('#cardDiv', {duration: 0.5, scale: 1})
})

let hoverAnimation1 = document.querySelector('#cardDiv1')
hoverAnimation1.addEventListener('mouseover', event => {
    gsap.to('#cardDiv1', {duration: 0.5, scale: 1.05})
})
hoverAnimation1.addEventListener('mouseout', event => {
    gsap.to('#cardDiv1', {duration: 0.5, scale: 1})
})

let hoverAnimation2 = document.querySelector('#cardDiv2')
hoverAnimation2.addEventListener('mouseover', event => {
    gsap.to('#cardDiv2', {duration: 0.5, scale: 1.05})
})
hoverAnimation2.addEventListener('mouseout', event => {
    gsap.to('#cardDiv2', {duration: 0.5, scale: 1})
})
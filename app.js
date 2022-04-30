const themebtn1 = document.querySelector('#themebtn1')
const themebtn2 = document.querySelector('#themebtn2')

themebtn1.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
themebtn2.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

const tl = gsap.timeline({ defaults: { ease: 'back' } })

tl.from('.illus', {
    opacity: 0,
    duration: 3,
    delay: 1
}).to('#y1', {
    x: '200px',
    repeat: -1,
    yoyo: true,
    duration: 0.8
}, '-=5').to('#y2', {
    x: '150px',
    repeat: -1,
    yoyo: true,
    duration: 0.5

}, '-=5').to('#y3', {
    x: '50px',
    repeat: -1,
    yoyo: true,
    duration: 0.6
}, '-=5').to('#r1', {
    x: '200px',
    repeat: -1,
    yoyo: true,
    duration: 0.7
}, '-=5')

const tl2 = gsap.timeline({ defaults: { ease: 'power4' } })

tl2.from('.hero img', {
    delay: 1,
    opacity: 0,
    y: '-20%',
    duration: 2
}).from('.hero .title', {
    opacity: 0,
    y: '100%',
    duration: 1
}, '=-2').from('.hero .herobtns #btn', {
    opacity: 0,
    y: '100%',
    duration: .1,
    stagger: .3
}, '=-2').from('.navbar', {
    opacity: 0,
    duration: 2,
    delay: 1
}, '-=2')

const scrollAbt = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: '100px bottom',
        end: '-100px top',
    }
})
scrollAbt.from('.about .title', {
    x: '-100%',
    opacity: 0,
    duration: .7
}).from('.aboutcontent', {
    x: '-100%',
    opacity: 0,
    duration: 0.7,
    stagger: 0.2
})

const scrollskills = gsap.timeline({
    scrollTrigger: {
        markers: true,
        trigger: '.about',
        start: '700px bottom',
        end: '-50px top',
    }
}).from('.skills .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7,
}).from('.skills .cardrow .card', {
    x: '-100%',
    opacity: 0,
    duration: 0.1,
    stagger: 0.2
})




const scrollprojects = gsap.timeline({
    scrollTrigger: {
        markers: true,
        trigger: '.projects',
        start: '0px bottom',
        end: '-50px top',
    }
}).from('.projects', {
    x: '-100%',
    opacity: 0,
    duration: 0.7,
}).from('.projects .cardrow .card', {
    x: '-100%',
    opacity: 0,
    duration: 0.7,
    stagger: 0.2
})


const scrollcontact = gsap.timeline({
    scrollTrigger: {
     
        trigger: '.contact',
        start: 'px bottom',
        end: '-50px top',
    }
}).from('.contact .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.1,
})
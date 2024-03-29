gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: {
        smooth: true
    },

    // for mobile
    smartphone: {
        smooth: true
    }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ?
            locoScroll.scrollTo(value, 0, 0) :
            locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



// loader and hero section
function hero() {
    var tl = gsap.timeline()

    function loaderTime() {
        var count = 0;
        setInterval(function () {
            count = count + Math.floor(Math.random() * 12)
            if (count < 100) {
                document.querySelector('.loader-count span').innerHTML = count + "%"
            } else {
                document.querySelector('.loader-count span').innerHTML = 100 + "%"
            }

        }, 150)
    }

    tl.to('.loader-count span', {
        delay: .5,
        duration: 3,
        onStart: loaderTime()
    })

    tl.to('.click-here', {
        display: "block",
        ease: "expo.out",
        opacity: 1

    })

    document.querySelector('.click-here').addEventListener('click', () => {
        tl.to('.loader-count', {
            y: "-40",
            duration: 1,
            opacity: 0,
            ease: "expo.out",
        })

        tl.to('.loader', {
            y: "-100%",
            delay: -.5,
            duration: .7,
            ease: "power1.inOut"
        })


        tl.to(".loader-blue", {
            top: 0,
            height: "100%",
            duration: 1,
            delay: -1.3,
            ease: "power1.inOut"

        })

        tl.to(".loader-blue", {
            height: "0%",
            duration: .6,
            delay: -.6,
            ease: "power1.inOut"

        })
        tl.from('.logo,.nav-links a', {
            y: 50,
            duration: 1.4,
            opacity: 0,
            delay: -.4,
            stagger: .1

        })

        new SplitType('.hero h1')
        tl.to(".hero h1 .char", {
            y: 0,
            delay: -1.2,
            duration: .5,
            stagger: 0.07
        })

        new SplitType('.hero-desc')
        tl.to(".hero-desc .char", {
            y: 0,
            delay: -1,
            stagger: 0.01
        })

    })



}
hero()


function heroText() {
    $(document).ready(function () {
        var vidState = 0;
        vid = $('#hi')[0];

        $('#hover').hover(
            function () {
                vidPlay();
            },
            function () {
                vidPause();
            }
        );

        vid.addEventListener('ended', function () {
            vid.currentTime = 0;
            vid.style.opacity = 0;
            vid.volume = 0;
            setTimeout(function () {
                $(vid).remove();
            }, 100);
        });

    });

    function vidPlay() {
        vid.play();
        vidState = 1;
    }

    function vidPause() {
        vid.pause();
        vidState = 0;
    }




    var heroText = document.querySelector('.hero');
    var cursor = document.querySelector("#cursor");


    heroText.addEventListener('mouseenter', (dets) => {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            opacity: 0,
            scale: 1
        })
    });
    heroText.addEventListener('mouseleave', (dets) => {
        gsap.to(cursor, {
            opacity: 0,
            scale: 0,
            duration: 1

        })
    });
    heroText.addEventListener('mousemove', (dets) => {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            opacity: 1,
            scale: 1
        })
    });


    heroText.addEventListener('mouseenter', () => {
        gsap.to('.video', {
            scale: 1,
            // play:true,
        })
    })
    heroText.addEventListener('mouseleave', () => {
        gsap.to('.video', {
            opacity: 0,
            duration: 1,
            // pause:true
        })
    })
    heroText.addEventListener('mousemove', () => {
        gsap.to('.video', {
            opacity: 1,
            scale: 1,
            // play:true
        })
    })

    heroText.addEventListener('mousemove', () => {
        gsap.to('.arrow', {
            opacity: 1,
            scale: 1,
            duration: 1
        })
    })
    heroText.addEventListener('mouseleave', () => {
        gsap.to('.arrow', {
            opacity: 0,
            scale: 0
        })
    })
    heroText.addEventListener('click', () => {
        gsap.to('.arrow', {
            opacity: .7,
            scale: 1.8,
            duration: 1
        })
    })

}
heroText()


// about section

gsap.to('.about-section', {
    scrollTrigger: {
        trigger: ".about-section",
        scroller: "#main",
        pin: ".about-left",
        start: "top top",
        end: "bottom -10%",
        scrub: 1
    }
})




// works section


function work(){

    gsap.from(".grid-1", {
        opacity: 0,
        y: "150px",
        duration: 1,
        scrollTrigger: {
            trigger: ".works-section",
            scroller: "#main",
            start: "-50% top",
            end: "self",
        }
    });
    gsap.from(".top-card", {
        opacity: 0,
        y: "150px",
        duration: .7,
        delay:.5,
        scrollTrigger: {
            trigger: ".works-section",
            scroller: "#main",
            start: "-50% top",
            end: "self",
        }
    });
    gsap.from(".grid-3", {
        opacity: 0,
        y: "150px",
        duration: .7,
        scrollTrigger: {
            trigger: ".works-section",
            scroller: "#main",
            start: "top top",
            end: "self",
        }
    });
    gsap.from(".grid-4", {
        opacity: 0,
        y: "150px",
        duration: .7,
        delay:.1,
        scrollTrigger: {
            trigger: ".works-section",
            scroller: "#main",
            start: "top top",
            end: "self",
        }
    });
    gsap.from(".bottom-card", {
        opacity: 0,
        x: "150px",
        duration: .8,
        delay:.3,
        scrollTrigger: {
            trigger: ".works-section",
            scroller: "#main",
            start: "top top",
            end: "self",
        }
    });
}
work()


// about 2

gsap.to(".about-section-bg",{
    width:"95%",
    duration:1,
    scrollTrigger:{
        trigger: ".about-section-2",
        scroller: "#main",
        start: "top 50%",
        end: "top 30%",
        scrub:1
    }
})
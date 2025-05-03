const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const main = document.querySelector("#main")
const cur = document.querySelector("#cur")


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


main.addEventListener('mousemove',(e)=>{
  gsap.to(cur,{
    x:e.x,
    y:e.y,
    duration:.5
  })
})

main.addEventListener('mouseenter',(e)=>{
  gsap.to(cur,{
    opacity:1,
    
    duration:.3
  })
})

main.addEventListener('mouseleave',(e)=>{
  gsap.to(cur,{
    opacity:0,
    
    duration:.3
  })
})


function firstPageAnimation() {
    let tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button", {
        opacity: 0,
        delay: 1,
        y: -40,
        duration: 0.2,
        stagger: 0.15
    })

    tl.from(".center-part1 h1", {
        x: -100,
        opacity: 0,
        duration: 0.5
    })
    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4
    })
    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4
    })
    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.4
    }, "-=1")

    tl.from(".sectionbottom img", {
        opacity: 0,
        duration: 0.6,
        stagger: .15,
        y: 30
    })

}

firstPageAnimation()

function secondPageAnimation(){
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 0%",
            scrub:2
        }
    })
    
    tl2.from(".services h3",{
        y:-30,
        opacity:0,
    })
    tl2.from(".services p",{
        y:40,
        opacity:0
    },'-=.5')
    

    
    tl2.from(
      ".line1.left",
      {
        x: -300,
        opacity: 0,
        duration: 2.5,
        ease: "back.inOut(3)",
      },
      "firstLine"
    );
    tl2.from(
      ".line1.right",
      {
        x: 300,
        opacity: 0,
        duration: 2.5,
        ease: "back.inOut(3)",
      },
      "firstLine"
    );
    
    tl2.from(
      ".line2.left",
      {
        x: -300,
        opacity: 0,
        duration: 2.5,
        ease: "back.inOut(3)",
      },
      "secondLine"
    );
    tl2.from(
      ".line2.right",
      {
        x: 300,
        opacity: 0,
        duration: 2.5,
        ease: "back.inOut(3)",
      },
      "secondLine"
    );
}

secondPageAnimation()
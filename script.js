/* =====================================
   WEBS BY DETWAL
   HOME PAGE JAVASCRIPT
===================================== */


/* =========================
   WEBSITE SHOWCASE
========================= */

const previews = document.querySelectorAll(".website-preview");
const indicators = document.querySelectorAll(".indicator");

let activeSlide = 0;

function updateShowcase(){

    previews.forEach((preview,index)=>{

        if(index === activeSlide){

            preview.style.zIndex = "4";
            preview.style.opacity = "1";

        }else{

            preview.style.zIndex = "1";

        }

    });


    indicators.forEach((indicator,index)=>{

        indicator.classList.toggle(
            "active",
            index === activeSlide
        );

    });

}


/* Automatically change showcase every 3 seconds */

setInterval(()=>{

    activeSlide++;

    if(activeSlide >= previews.length){
        activeSlide = 0;
    }

    updateShowcase();

},3000);


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(
    ".feature-card, .process-card, .price-card"
);


const revealObserver =
new IntersectionObserver(

    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold:.12
    }

);


revealElements.forEach(element=>{

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


/* =========================
   MOUSE PARALLAX
========================= */

const showcase =
document.querySelector(".website-showcase");

if(showcase){

    showcase.addEventListener(
        "mousemove",
        (event)=>{

            const rect =
                showcase.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;


            const main =
                document.querySelector(".preview-main");


            if(main){

                main.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-4px)`;

            }

        }
    );


    showcase.addEventListener(
        "mouseleave",
        ()=>{

            const main =
                document.querySelector(".preview-main");

            if(main){
                main.style.transform = "";
            }

        }
    );

}


/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link=>{

    link.addEventListener(
        "click",
        function(event){

            const targetId =
                this.getAttribute("href");

            if(targetId === "#"){
                return;
            }

            const target =
                document.querySelector(targetId);

            if(target){

                event.preventDefault();

                target.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

            }

        }
    );

});


/* =========================
   REDUCED MOTION
========================= */

const reducedMotion =
window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if(reducedMotion.matches){

    document.documentElement.style.scrollBehavior =
        "auto";

}

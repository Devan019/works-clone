function first_animation() {
    var tl = gsap.timeline();

    tl.to("#yellow", {
        y: "-100vh",
        delay: 0.2,
        duration: 0.8,
        ease: "expo.out",
    }, "with1")

    tl.to("#mid p", {
        color: "#fff",
    }, "with1")
    tl.to("#loader video", {
        y: "-100vh",
        delay: 0.4,
        ease: "expo.out",
    }, "with2")
    tl.to("#mid p", {
        color: "#111",
        "z-index": "0",
    }, "with2")
    tl.to("#loader", {
        display: "none",
    })

    tl.to("#nav", {
        color: "black",
    }, "with2")

    tl.to("#nav-plus", {
        filter: "invert(0)",
    }, "with2")

    tl.to("#nav #part1 svg path",{
        fill : "#111",
    },"with2")


}
first_animation();

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    // lerp: 0.03,
})

function nav_open() {
    gsap.to("#nav-plus", {
        rotate: "315deg",
    })
    gsap.to("#pro", {
        x: "-28vh",
    })
    gsap.to(".hidden", {
        visibility: "visible",
        x: "200%",
    })
}

function nav_close() {
    gsap.to("#nav-plus", {
        rotate: "0deg",
    })
    gsap.to("#pro", {
        x: "0%",
        delay: 1,
    })
    gsap.to(".hidden", {
        visibility: "hidden",
        x: "-200%",
    })
}
nav_open();
let flag = 1;
document.querySelector("#nav-plus").addEventListener("click", (e) => {
    if (flag == 0) {
        flag = 1;
        nav_open();
    } else {
        flag = 0;
        nav_close();
    }
}
)

document.body.addEventListener("wheel", (dets) => {
    // console.log(dets.deltaY)
    if (dets.deltaY > 0 && flag == 1) {
        flag = 0;
        nav_close();
    }
    // else if(dets.deltaY <= -0.55 && flag == 0){
    //     flag = 1;
    //     nav_open();
    // }
}
)

let imgs_url = ["./MIN-1.jpg", "./Home-Featured-Image.jpg", "./converse.jpg", "./skky.jpg", "./BOLDLY.jpg"]

let menu_part = document.querySelectorAll(".menu-part");
let newDiv = document.createElement("div");
newDiv.classList.add("newDiv");

function page2_open_animation(value,idx) {
    gsap.to("#page2", {
        backgroundImage: `url(${imgs_url[idx]})`,
        duration: 0.5,
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100vw 100vh",
    })

    gsap.to(value, {
        color: "#111",
        fontStyle: "italic",
    })
    gsap.to(newDiv, {
        background: "#F5E41B",
        // width: "100vw",
        height: "10px",

    })
    value.appendChild(newDiv);
}

function page2_close_animation(value){
    gsap.to(value, {
        color: "white",
        fontStyle: "normal",
    })
    if(value.getElementsByTagName("div")){
        value.getElementsByTagName("div").remove();
    }

}

menu_part.forEach((value, idx) => {
    value.addEventListener("mousemove", (params) => {
        page2_open_animation(value,idx);
})

    value.addEventListener("mouseleave", (params) => {
        page2_close_animation(value);
    }
    )
})

document.querySelector("#pro").addEventListener("click",(params) => {
  scroll.scrollTo(1000);
}
)
document.querySelector("#footer1 svg").addEventListener("click",(params) => {
  scroll.scrollTo(document.querySelector("#page2"));
}
)
document.querySelector("#footer2 svg").addEventListener("click",(params) => {
    scroll.scrollTo(document.querySelector("#page3"));
  }
)

let all_photo_urls = ["https://works.studio/assets/imager/images/converse/38120/v1.5-converse-bball-3_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    "https://works.studio/assets/imager/images/public/37839/public-cover2_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    "https://works.studio/assets/imager/images/jeen-yuhs/35858/v1.5-home-image2_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    "https://works.studio/assets/imager/images/us-soccer/21753/NewThumb_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
]


let all_photo = document.querySelectorAll(".photo-grid");
let rows = [1, 1, 1]; // Tracks the current row position for each column (3 columns).

all_photo.forEach((value, idx) => {
    let col = idx % 3; // Determine the column (0, 1, or 2)

    // Assign different spans based on the index pattern, this is just an example:
    let span = 1; // Default span
    if (idx % 7 === 0) {
        span = 3; // Every 7th item spans 3 rows
    } else if (idx % 5 === 0) {
        span = 2; // Every 5th item spans 2 rows
    }

    value.style.gridRow = `${rows[col]} / span ${span}`;
    rows[col] += span; // Move the start row for the next item in this column by the span
});

all_photo_urls.forEach((value,idx)=>{
    all_photo[idx].style.backgroundImage = `url(${value})`;
})


// window.addEventListener('scroll', () => {
//     let scrollTop = window.scrollY;
//     console.log(scrollTop);
//     if(scrollTop >= 600){
//         console.log(scrollTop);
//         gsap.to("#nav #part2 div",{
//             color : "#fff",
//         })
//     }else{
//         console.log(scrollTop);
//     }
// });
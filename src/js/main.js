// /*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      navigation.classList.toggle("is-active");
        body.classList.toggle("is-active");
    });

const navLinks = document.querySelectorAll(".l_header-nav_link");
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        navigation.classList.remove("is-active");
        body.classList.remove("is-active");
    });
});

// /*---------- header-fixed ----------*/
// スクロール0でヘッダー表示なし、100pxスクロールしたら追従
const header = document.querySelector(".l_header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("js_header_fixed");
  } else {
    header.classList.remove("js_header_fixed");
  }
});

// /*---------- スライドショー ----------*/
const slideshow = new Swiper(".js_slideshow", {
  speed: 1200,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// /*---------- スクロールアニメーション ----------*/
document.querySelectorAll(".js_section").forEach((section) => {
  const title = section.querySelector(".js_section_title");
  const copy = section.querySelector(".js_section_copy");
  const desc = section.querySelector(".js_section_desc");
  const item = section.querySelector(".js_section_item");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });

  tl.from(title, {
    opacity: 0,
    x: -30,
    duration: 1.2,
    ease: "power2.out",
  })
    .from(
      copy,
      {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.8"
    )
    .from(
      desc,
      {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.8"
    )
    .from(
      item,
      {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.8"
    );
}); 

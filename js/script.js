const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const navItems = document.querySelectorAll(".nav-links li");

let isOpen = false;

// Sidebar Timeline
const tl = gsap.timeline({ paused: true });

tl.to(sidebar, {
  x: 0,
  duration: 0.4,
  ease: "power2.out"
});

tl.from(navItems, {
  x: 50,
  opacity: 0,
  stagger: 0.1,
  duration: 0.3
}, "-=0.2"); 

// Toggle menu
menuBtn.addEventListener("click", () => {
  if (!isOpen) {
    tl.play();
    menuBtn.classList.add("active");
  } else {
    tl.reverse();
    menuBtn.classList.remove("active");
  }
  isOpen = !isOpen;
});


gsap.from(".navbar", {
  opacity: 0,
  y: -30,
  duration: 1,
  ease: "power2.out"
});

// 2. Main Text reveals
gsap.from(".main-content h1, .main-content h2, .main-content p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.4,
  stagger: 0.2,
  ease: "power3.out"
});

gsap.from(".main-content button", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  delay: 0.8, // Give text time to finish
  stagger: 0.4,
  ease: "back.out(1.7)",
  onComplete: function() {
    gsap.set(this.targets(), { clearProps: "all" }); 
  }
});

// 4. Footer & Icons
gsap.from(".footer", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 1.5,
  ease: "power2.out"
});

gsap.from(".icons li", {
  opacity: 0,
  scale: 0,
  stagger: 0.1,
  duration: 0.6,
  delay: 1.8
});

gsap.from(".copyright", {
  opacity: 0,
  x: -20,
  duration: 1,
  delay: 2
});

gsap.from(".skills ul li ", {
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.5,
  delay: 1.5
});

gsap.from(".skills ", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 1.1
})


gsap.from(".about-me", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 1.2,
});

gsap.from(".contact-main",{
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 1.1,
})
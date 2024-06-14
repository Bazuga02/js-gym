var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

gsap.to("#nav", {
  backgroundColor: "lightskyblue",
  duration: 1,
  height: "115px",
  scrollTrigger: {
    trigger: "#nav",
    scoller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 0.5,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scoller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

const slider = document.getElementById("slider");
const slides = slider.querySelectorAll(".slide");
let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

showSlide(currentSlideIndex);

setInterval(nextSlide, 2000);

const reviews = [
  " <sup><i class='fa-solid fa-quote-left' style='color: #05acff; font-size: 7vh;'></i></sup> Undoubtedly one of the finest fitness facilities around! HRX Gym has truly raised the bar with top-notch amenities. The inclusion of the innovative TopTracer technology in most of the bays is a fantastic addition, and it's all offered at an incredible value. I haven't had the chance to experience the Mini Golf yet, but it's a hit with everyone, and I'm eager to give it a try. HRX Gym is the place to be for an exceptional fitness journey! 😎🔥<sup><i class='fa-solid fa-quote-right' style='color: #05acff; font-size: 7vh;'></i></sup> <i style='color: lightskyblue;'>-Kapil</i>",
  " <sup><i class='fa-solid fa-quote-left' style='color: #05acff; font-size: 7vh;'></i></sup> HRX Gym has exceeded all my expectations. The state-of-the-art equipment and expert trainers have transformed my fitness goals into reality. The positive and motivating environment keeps me coming back for more. Whether you're a seasoned athlete or a newbie, HRX Gym has something for everyone. It's the ultimate destination for achieving your fitness dreams.😁<sup><i class='fa-solid fa-quote-right' style='color: #05acff; font-size: 7vh;'></i></sup> <i style='color: lightskyblue;'>-Prabhu</i>",
  "<sup><i class='fa-solid fa-quote-left' style='color: #05acff; font-size: 7vh;'></i></sup> HRX Gym is a fitness powerhouse. It's equipped with the latest in fitness gear and offers a wide range of classes to suit all fitness levels. The trainers are knowledgeable and motivating, making every workout session enjoyable. The gym's clean and modern environment is a plus. HRX Gym has been instrumental in my fitness journey, and I highly recommend it to anyone looking to achieve their fitness goals.😍💪<sup><i class='fa-solid fa-quote-right' style='color: #05acff; font-size: 7vh;'></i></sup> <i style='color: lightskyblue;'>-Priyanshu</i>",
];

let currentReview = 0;
const reviewContainer = document.getElementById("review");

function showReview() {
  reviewContainer.style.display = "none";
  reviewContainer.innerHTML = reviews[currentReview];
  reviewContainer.style.display = "block";

  currentReview = (currentReview + 1) % reviews.length;
  setTimeout(showReview, 3000); // Change reviews every 3 seconds
}

showReview(); // Start the review rotation

document.querySelector("#show-login").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});

document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });

gsap.from("#about-us .bard, #about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#scroller",
    scroller: "body",
    // markers: true,
    start: "top 65%",
    end: "top 58%",
    scrub: 2,
  },
});

gsap.from(".card", {
  scale: 0.5,
  opacity: 0,
  duration: 0.5,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 69%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#sider", {
  x: -70,
  opacity: 0.2,
  duration: 0.5,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: "#sider",
    scroller: "body",
    // markers: true,
    start: "top 89%",
    end: "top 85%",
    scrub: 2,
  },
});

gsap.from("#coffee-shop", {
  x: 90,
  opacity: 0,
  duration: 1,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: "#coffee-shop",
    scroller: "body",
    // markers: true,
    start: "top 79%",
    end: "top 75%",
    scrub: 4,
  },
});

gsap.from("#meet", {
  x: 100,
  opacity: 0,
  duration: 2,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: "#meet",
    scroller: "body",
    // markers: true,
    start: "top 89%",
    end: "top 85%",
    scrub: 2,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const dietShopLink = document.getElementById("diet-shop-link");

  const coffeeShopSection = document.getElementById("coffee-shop");

  dietShopLink.addEventListener("click", function () {
    coffeeShopSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const trainers = document.getElementById("personal-trainers-link");

  const tc = document.getElementById("trainer-container");

  trainers.addEventListener("click", function () {
    tc.scrollIntoView({ behavior: "smooth" });
  });
});

function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  document.getElementById("emailError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";

  if (!email || !email.includes("@")) {
    document.getElementById("emailError").innerHTML =
      "Enter a valid email address.";
    return;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").innerHTML =
      "Password must be at least 6 characters.";
    return;
  }

  console.log("Form submitted successfully!");
}

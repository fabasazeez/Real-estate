/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);

  }, 800);
});

/* ==========================
   STICKY HEADER
========================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ==========================
   COUNTERS
========================== */

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

  counters.forEach(counter => {

    const target = +counter.dataset.target;

    let count = 0;

    const speed = target / 100;

    const updateCount = () => {

      count += speed;

      if (count < target) {

        counter.innerText = Math.floor(count);

        requestAnimationFrame(updateCount);

      } else {

        counter.innerText = target;
      }
    };

    updateCount();
  });
};

let counterStarted = false;

window.addEventListener("scroll", () => {

  const statsSection = document.querySelector(".stats-section");

  if (!statsSection) return;

  const sectionTop = statsSection.offsetTop - 400;

  if (window.scrollY > sectionTop && !counterStarted) {

    startCounter();

    counterStarted = true;
  }
});

/* ==========================
   TESTIMONIAL SLIDER
========================== */

const slides = document.querySelectorAll(".testimonial-slide");

let currentSlide = 0;

function showSlide(index) {

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

if (slides.length > 0) {

  showSlide(0);

  setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);

  }, 4000);
}

/* ==========================
   BACK TO TOP BUTTON
========================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 600) {

    backToTop.style.display = "block";

  } else {

    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});

/* ==========================
   MOBILE MENU
========================== */

const mobileBtn =
  document.getElementById("mobileMenuBtn");

const navMenu =
  document.querySelector(".nav-menu");

if (mobileBtn && navMenu) {

  mobileBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

  });

}

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(
  ".property-card, .service-card, .team-card, .location-card, .about-content, .about-image"
);

function revealOnScroll() {

  revealElements.forEach(el => {

    const top = el.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (top < windowHeight - 120) {

      el.classList.add("show");

    }

  });
}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

/* ==========================
   CONTACT FORM
========================== */
/* ==========================
CONTACT FORM
========================== */

const contactForm =
document.querySelector(".contact-form");

if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function(e) {

      const inputs =
        contactForm.querySelectorAll(
          "input[required], textarea[required]"
        );

      let valid = true;

      inputs.forEach(input => {

        if (input.value.trim() === "") {
          valid = false;
        }

      });

      if (!valid) {

        e.preventDefault();

        alert("Please fill all fields.");

        return;
      }

      // Allow normal form submission to FormSubmit
    }
  );
}

/* ==========================
   NEWSLETTER FORM
========================== */

const newsletterForm =
  document.querySelector(
    ".newsletter-box form"
  );

if (newsletterForm) {

  newsletterForm.addEventListener(
    "submit",
    function(e) {

      e.preventDefault();

      const email =
        newsletterForm.querySelector(
          "input"
        ).value;

      if (email === "") {

        alert(
          "Please enter your email."
        );

        return;
      }

      alert(
        "Subscription successful!"
      );

      newsletterForm.reset();
    }
  );
}

/* ==========================
   PROPERTY HOVER EFFECT
========================== */

const cards =
  document.querySelectorAll(
    ".property-card"
  );

cards.forEach(card => {

  card.addEventListener(
    "mousemove",
    e => {

      const rect =
        card.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      card.style.transform =
        `perspective(1000px)
         rotateX(${(y - rect.height/2)/25}deg)
         rotateY(${-(x - rect.width/2)/25}deg)
         translateY(-10px)`;

    }
  );

  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform =
        "translateY(0)";
    }
  );
});

/* ==========================
   INTERSECTION ANIMATION
========================== */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "show"
          );

        }

      });

    },
    {
      threshold: 0.15
    }
  );

document
  .querySelectorAll(
    ".property-card, .service-card, .team-card, .location-card"
  )
  .forEach(el => {

    observer.observe(el);

  });

console.log(
  "Prestige Estates Loaded Successfully"
);
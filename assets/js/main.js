/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm("", "", "#contact-form", "").then(
    () => {
      // Show sent message
      contactMessage.textContent = "Message sent successfully ✅";

      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      // Clear input fields
      contactForm.reset();
    },
    () => {
      // Show error message
      contactMessage.textContent = "Message not sent (service error) ❌";
    }
  );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll("section[id]");

// const scrollActive = () => {
//   const scrollDown = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute("id"),
//       sectionsClass = document.querySelector(
//         ".nav__menu a[href*=" + sectionId + "]"
//       );

//     if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
//       sectionsClass.classList.add("active-link");
//     } else {
//       sectionsClass.classList.remove("active-link");
//     }
//   });
// };
// window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
});

sr.reveal(`.home__perfil,  .contact__mail`, { origin: "right" });
sr.reveal(
  `.background__text, .home__instituto, .home__name, .home__name__rod, .home__info, 
            .about__container .section__title-1, .about__info, 
            .contact__social, .contact__data`,
  { origin: "left" }
);
sr.reveal(`.services__card`, { interval: 100 });

/*=============== MAS INFO ===============*/

document.addEventListener('DOMContentLoaded', (event) => {
  const readMoreBtn = document.querySelector('.read-more-btn');
  const additionalInfo = document.querySelector('.about__additional-info');

  readMoreBtn.addEventListener('click', () => {
    additionalInfo.classList.toggle('hidden');

   
    if (additionalInfo.classList.contains('hidden')) {
      readMoreBtn.textContent = 'Ler mais';
      readMoreBtn.classList.remove('open');
    } else {
      readMoreBtn.textContent = 'Fechar';
      readMoreBtn.classList.add('open');
    }
  });
});

/*=============== carrusel  testimonios ===============*/

document.addEventListener('DOMContentLoaded', function() {
  const btnPrev = document.querySelector('.prev');
  const btnNext = document.querySelector('.next');
  const carousel = document.querySelector('.carousel');
  const cards = carousel.querySelectorAll('.projects__card');

  function scrollCarousel(offset) {
    const cardStyle = window.getComputedStyle(cards[0]);
    const cardMarginRight = parseInt(cardStyle.marginRight, 10);
    const cardWidth = cards[0].offsetWidth + cardMarginRight;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    let newScrollPosition = carousel.scrollLeft + (cardWidth * offset);


    if (newScrollPosition < 0) {
      carousel.scrollTo(maxScrollLeft, 0);
    } else if (newScrollPosition > maxScrollLeft) {
      carousel.scrollTo(0, 0);
    } else {
      carousel.scrollTo(newScrollPosition, 0);
    }
  }


  btnPrev.addEventListener('click', function() {
    scrollCarousel(-1);
  });

  
  btnNext.addEventListener('click', function() {
    scrollCarousel(1);
  });
});


/*=============== carrusel marcas ===============*/

document.addEventListener('DOMContentLoaded', function() {

  function scrollCarousel(carouselSelector, offset) {
    const carousel = document.querySelector(carouselSelector);
    const cards = carousel.querySelectorAll('.projects__brand'); //
    const cardStyle = window.getComputedStyle(cards[0]);
    const cardMarginRight = parseInt(cardStyle.marginRight, 10);
    const cardWidth = cards[0].offsetWidth + cardMarginRight;
    
    carousel.scrollBy(cardWidth * offset, 0);
  }


  document.querySelector('.button__tratamientos.prev').addEventListener('click', function() {
    scrollCarousel('.projects__container', -1);
  });
  document.querySelector('.button__tratamientos.next').addEventListener('click', function() {
    scrollCarousel('.projects__container', 1);
  });


  document.querySelector('.brands-prev').addEventListener('click', function() {
    scrollCarousel('.brands__container', -1);
  });
  document.querySelector('.brands-next').addEventListener('click', function() {
    scrollCarousel('.brands__container', 1);
  });
});

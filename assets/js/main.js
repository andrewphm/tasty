/* ========== SHOW MENU ======== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    // Validate the variable exists(media query is ineffect)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            //toggle show-menu class to the nav variable
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

/* ========== REMOVE MENU ======== */
// Get an array of every element with class .nav__link
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

// Add eventlistener for each element with class .nav__link
navLink.forEach(e => e.addEventListener('click', linkAction));



/* ========== CHANGE BACKGROUND HEADER ======== */
const scrollHeader = () => {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the tag
    if(window.scrollY >= 200) {
        nav.classList.add('scroll-header')
    } else {
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);


/* ========== SHOW SCROLL TOP ======== */
// When the scroll is greater than 560 vh, add the show-scroll class to the div with class scrolltop
const scrollTop = () => {
    const scrollTop = document.getElementById('scroll-top')

    if(window.scrollY >= 560) {
        scrollTop.classList.add('scroll-top')
    } else {
        scrollTop.classList.remove('scroll-top')
    }
}
window.addEventListener('scroll', scrollTop);

/* ========== DARK/LIGHT THEME ======== */
const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic(if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme taht the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// Validate if the user previously chose a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


// Toggle theme manually w/ the button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darktheme)
    // Change the icon
    themeButton.classList.toggle(iconTheme);

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})


/* ======== SCROLL REVEAL ANIMATION ======== */
const sr = ScrollReveal({
    distance: '100px',
    duration: 2400,
    reset: true,
})

sr.reveal(`.home__data, .home__img,
           .about__data, .about__img,
           .services__content, .menu__content,
           .app__data, .app__img,
           .contact__data, .contact__button`, {
    origin: 'top',
    interval: 100,
})
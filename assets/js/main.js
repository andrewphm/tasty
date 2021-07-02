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

/* ========== SCROLL SECTION ACTIVE LINK ======== */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(e => {
        const sectionHeight = e.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* ========== CHANGE BACKGROUND HEADER ======== */
const scrollHeader = () => {
    const nav = doucment.getElementById('header')
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

/* ========== SHOW MENU ======== */


/* ========== SHOW MENU ======== */

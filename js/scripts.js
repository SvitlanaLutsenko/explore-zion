const navSlide = () => {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav-link-box");

    burger.addEventListener('click', () => {

         // toggle nav
        nav.classList.toggle('nav-active');

        // burger animation
        // burger.classList.toggle('toggle');
        
    });
}

navSlide();
//================= toggle icon navbar =======================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//============== scroll section active link ===================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    //================== sticky navbar ======================
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //============= remove toggle icon and navbar when click navbar link (scroll) ==================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//================== scroll reveal ======================

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .qualifications-container, .technologies-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


//================== typed js ======================
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer','Front End Developer','Back End Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


//================== smtp js (mail process) ======================

// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "maldinukshi@gmail.com",
//         Password : "mala1966",
//         To : 'sudeshsudeera@gmail.com',
//         /* Fullname: document.getElementById("fullName").value,
//         Mobilenumber: document.getElementById("number").value, */
//         From : document.getElementById("email").value,
//         Subject : document.getElementById("emailSubject").value,
//         Body : document.getElementById("body").value
//     }).then(
//       message => alert(message)
//     );
// }



//================== mail process ======================
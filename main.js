let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top % 150 == 0)console.log({offset, height, id});
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']')
                .classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 100
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.me, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

const typed = new Typed('.multiple-text',{
    strings: ['Software Developer', 'Data Analyst', 'Fullstack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function downloadCV() {
    // Replace 'path_to_cv.pdf' with the actual path to your CV file
    const cvPath = 'assets/Curriculum Vitae.pdf';
    
    // Create an anchor element
    const link = document.createElement('a');
    
    // Set the href attribute to the path of your CV file
    link.href = cvPath;
    
    // Set the download attribute to the filename you want the file to be downloaded as
    link.download = 'Bruno_Elias_Gamarra_CV.pdf';
    
    // Programmatically trigger a click event on the anchor element
    link.click();
  }

  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_0e5jw9q', 'template_hmipo1c', this)
            .then(() => {
                console.log('SUCCESS!');
                window.alert('Message sent successfully');
            }, (error) => {
                console.log('FAILED...', error);
                window.alert('Error, message not sent');

            });
    });
}


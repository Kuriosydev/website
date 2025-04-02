// Render header on hover

// const header = document.getElementById('header');
// let lastScrollY = window.scrollY;
// let isHeaderVisible = true;
// let hoverTimeout = null;

// // Handle scrolling
// window.addEventListener('scroll', () => {
//     clearTimeout(hoverTimeout);
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY) {
//         // Scrolling down
//         header.style.top = '-84px'; // Hide header
//         isHeaderVisible = false;
//     } else {
//         // Scrolling up
//         header.style.top = '0'; // Show header
//         isHeaderVisible = true;
//         hoverTimeout = setTimeout(() => {
//             if (!isMouseInTopArea()) {
//                 header.style.top = '-84px'; // Hide header after delay
//                 isHeaderVisible = false;
//             }
//         }, 1500); // Delay in milliseconds
//     }

//     lastScrollY = currentScrollY;
// });

// // Handle mouse hover in top 60px
// document.addEventListener('mousemove', (event) => {
//     if (event.clientY <= 84 && !isHeaderVisible) {
//         header.style.top = '0'; // Show header
//         isHeaderVisible = true;
//     } else if (event.clientY > 84 && isHeaderVisible && header.style.top !== '0') {
//         header.style.top = '-84px'; // Hide header
//         isHeaderVisible = false;
//     }
// });

// // Check if the mouse is in the top 60px area
// const isMouseInTopArea = () => window.scrollY === lastScrollY && window.scrollY !== 0;





const toggle = document.getElementById('toggle');
const toggleSidebar = document.getElementById('toggle-sidebar');
const body = document.body;

// Function to toggle theme
function toggleTheme() {
  toggle.classList.toggle('active');
  toggleSidebar.classList.toggle('active');
  body.classList.toggle('dark-mode');

  // Save preference to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }

  // Update ARIA attribute
  toggle.setAttribute('aria-checked', toggle.classList.contains('active') ? 'true' : 'false');
  toggleSidebar.setAttribute('aria-checked', toggleSidebar.classList.contains('active') ? 'true' : 'false');
}

// Add click event
toggle.addEventListener('click', toggleTheme);
toggleSidebar.addEventListener('click', toggleTheme);

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
  toggle.classList.add('active');
  toggleSidebar.classList.add('active');
  body.classList.add('dark-mode');
}

// Support keyboard accessibility
toggle.setAttribute('tabindex', '0');
toggle.setAttribute('role', 'switch');
toggle.setAttribute('aria-checked', toggle.classList.contains('active') ? 'true' : 'false');
toggleSidebar.setAttribute('tabindex', '0');
toggleSidebar.setAttribute('role', 'switch');
toggleSidebar.setAttribute('aria-checked', toggleSidebar.classList.contains('active') ? 'true' : 'false');

toggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleTheme();
  }
});

toggleSidebar.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleTheme();
  }
});

// Sidebar
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const dimOverlay = document.createElement('div');
dimOverlay.classList.add('dim-overlay');
document.body.appendChild(dimOverlay);

menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  dimOverlay.classList.toggle('active');
  sidebar.style.transition = 'transform 0.3s ease-in-out';
  if (sidebar.classList.contains('show')) {
    sidebar.style.transform = 'translateX(0)';
  } else {
    sidebar.style.transform = 'translateX(-100%)';
  }
});

// Collapse sidebar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    sidebar.classList.remove('show');
    dimOverlay.classList.remove('active');
    sidebar.style.transform = 'translateX(-100%)';
  }
});




let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Display the current slide
  slides[index].style.display = "block";
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

document.getElementById("snapshot_slider_button_right_bg").addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  nextSlide();
  autoSlideInterval = setInterval(nextSlide, 3000);
});
document.getElementById("snapshot_slider_button_left_bg").addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  prevSlide();
  autoSlideInterval = setInterval(nextSlide, 3000);
});

// Initialize the slideshow
showSlide(slideIndex);

// Automatically change slides every 1 second
let autoSlideInterval = setInterval(nextSlide, 3000);



// AppScript to send Mail

// Kurixel SMTP Mail Script

// Gmail:	nelay.karmakar@kuriosy.com
// Deployment ID:	AKfycbwpiWfVTZhJ-S2qxDauov4Iq1upF-uGPNPz0FYFplxww21ckV8D0CuF6SY9sD31mg-ADg
// Web app URL:	https://script.google.com/macros/s/AKfycbwpiWfVTZhJ-S2qxDauov4Iq1upF-uGPNPz0FYFplxww21ckV8D0CuF6SY9sD31mg-ADg/exec

document.getElementById("contact_us_form").addEventListener("submit", function (event) {
  event.preventDefault();

  var formData = new FormData(this);
  fetch("https://script.google.com/macros/s/AKfycbwpiWfVTZhJ-S2qxDauov4Iq1upF-uGPNPz0FYFplxww21ckV8D0CuF6SY9sD31mg-ADg/exec", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(data => {
      alert(data);
      this.reset(); // Clear and blank the form
    })
    .catch(error => alert("Email received! We'll be in touch shortly."));
});
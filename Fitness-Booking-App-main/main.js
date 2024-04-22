const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};



// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});


// main.js

document.addEventListener('DOMContentLoaded', function () {
    var bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', function (event) {
        // Assuming you have a way to get the current number of booked spaces
        var currentBookings = getCurrentBookings(); // Implement this function

        // Check if adding the new booking would exceed the maximum capacity
        if (currentBookings >= 15) {
            alert('Sorry, the gym is fully booked. Please join the waiting list.');
            event.preventDefault(); // Prevent the form submission
        }
    });

    function getCurrentBookings() {
        // Implement your logic to get the current number of booked spaces
        // This could involve making an API call or accessing a variable on the server side
        // For now, let's assume a simple example where we count the checked checkboxes in the form
        var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        return checkedCheckboxes.length;
    }
});


 document.addEventListener('DOMContentLoaded', function () {
        var bookingForm = document.getElementById('booking-form');
        var bookingIcon = document.getElementById('booking-icon');

        // Toggle the booking form on button click
        bookingIcon.addEventListener('click', function () {
            if (bookingForm.style.display === 'none' || bookingForm.style.display === '') {
                bookingForm.style.display = 'block';
            } else {
                bookingForm.style.display = 'none';
            }
        });
    });

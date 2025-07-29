(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    // Get elements
const autoPopupForm = document.getElementById('autoPopupForm');
const closeAutoPopup = document.querySelector('.close-auto-popup');

// Function to show the popup after a delay (3 seconds)
window.onload = function() {
    setTimeout(function() {
        autoPopupForm.style.display = 'flex';
    }, 3000); // 3000 milliseconds = 3 seconds
};

// Close popup when clicking the close button
closeAutoPopup.addEventListener('click', function() {
    autoPopupForm.style.display = 'none';
});

// Close popup when clicking outside the form
window.addEventListener('click', function(event) {
    if (event.target === autoPopupForm) {
        autoPopupForm.style.display = 'none';
    }
});
// Get form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const serviceInput = document.getElementById('service');
const messageInput = document.getElementById('message');

// Function to validate email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Function to validate phone number
function validatePhone(phone) {
    const re = /^[0-9]{10}$/; // Assumes phone number has 10 digits
    return re.test(String(phone));
}

// Add event listener to form on submit
form.addEventListener('submit', function (e) {
    let valid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        valid = false;
    } else {
        clearError(nameInput);
    }

    // Phone number validation
    if (!validatePhone(phoneInput.value)) {
        showError(phoneInput, "Enter a valid 10-digit phone number");
        valid = false;
    } else {
        clearError(phoneInput);
    }
    

    // Email validation
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, "Enter a valid email address");
        valid = false;
    } else {
        clearError(emailInput);
    }

    // Service selection validation
    if (serviceInput.value === "select") {
        showError(serviceInput, "Please select a service");
        valid = false;
    } else {
        clearError(serviceInput);
    }

    // Message validation
    if (messageInput.value.trim() === "") {
        showError(messageInput, "Message cannot be empty");
        valid = false;
    } else {
        clearError(messageInput);
    }

    // If form is not valid, prevent submission
    if (!valid) {
        e.preventDefault();
    }
});

// Function to show error message
function showError(input, message) {
    input.classList.add('error');
    const error = document.createElement('div');
    error.className = 'error-message';
    error.innerText = message;
    input.parentElement.appendChild(error);
}

// Function to clear error message
function clearError(input) {
    input.classList.remove('error');
    const error = input.parentElement.querySelector('.error-message');
    if (error) {
        error.remove();
    }
}

    
})(jQuery);






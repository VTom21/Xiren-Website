let time = 5000;

document.addEventListener("DOMContentLoaded", function () {
    f1(time);
    document.body.classList.add('overflow_trigger');

    setTimeout(function () {
        document.body.classList.remove('overflow_trigger');
    }, time);
});




function f1(time) {
    const quotes = [
        "It's really an attempt to understand human intelligence and human cognition.",
        "A year spent in artificial intelligence is enough to make one believe in God.",
        "There is no reason and no way that a human mind can keep up with an artificial intelligence machine by 2035.",
        "AI is going to change everything, but it's going to be a partnership between humans and AI, not a competition",
        "Machine intelligence is the last invention that humanity will ever need to make.",
        "AI will eventually reach a level where it will essentially be a \"new form of life that will outperform humans\"",
        "We can harness AI to solve our biggest global problems",
        "A robot may not injure a human being or, through inaction, allow a human being to come to harm",
        "A robot must obey the orders given it by human beings except where such orders would conflict with the First Law",
        "A robot must protect its own existence as long as such protection does not conflict with the First or Second Law"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("preloader_text").innerHTML = quotes[randomIndex];
}
document.body.classList.add('preloader-active');
document.addEventListener("DOMContentLoaded", function () {
    // Simulate an async operation (e.g., loading data)
    setTimeout(function () {
        // Hide the preloader after 3 seconds
        document.querySelector('.preloader').style.display = 'none';
        document.body.classList.remove('preloader-active');
    }, time); // Adjust the delay as needed
});

// GSAP Animation for headline
gsap.from(".headline", {
    duration: 2,
    opacity: 0,
    y: 50,
    scale: 0.9,
    ease: "power4.out"
});

// GSAP Animation for subheadline
gsap.from(".subheadline", {
    duration: 2,
    opacity: 0,
    y: 50,
    scale: 0.9,
    ease: "power4.out",
    delay: 0.5
});

// GSAP Animation for buttons
gsap.fromTo(".button-grid",
    {
        opacity: 0,
        y: -40
    },
    {
        duration: 1,
        y: 20,
        opacity: 1,
        ease: "power2.out",
        stagger: 0.3
    }
);

gsap.from(".arrow", {
    duration: 1,
    opacity: 0,
    y: 20,
    scale: 0.9,
    ease: "power2.out",
    delay: 1
});

gsap.from(".text", {
    duration: 1,
    opacity: 0,
    y: 20,
    scale: 0.9,
    ease: "power2.out",
    delay: 1.5
});








document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');

    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 3000;  // Total duration of the counting animation
                const start = +counter.innerText;
                const increment = target / (duration / 16);  // Calculate increment per frame

                const updateCounter = () => {
                    const currentValue = +counter.innerText;
                    if (currentValue < target) {
                        counter.innerText = Math.ceil(currentValue + increment);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCounter();
                counterObserver.unobserve(counter);  // Unobserve once the animation is done
            }
        });
    }, { threshold: 0.75 });  // Trigger when the element is 75% in view

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

//Download Buttons

document.querySelector('#download1').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = ''; // Replace with a correct URL
    link.download = 'test.html';  // Replace with the desired file name
    link.click();
});

document.querySelector('#download2').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'https://www.w3schools.com/'; // Replace with a correct URL
    link.click();
});

function setupCopyButton(copyBtnId, textId, messageBoxId) {
    document.getElementById(copyBtnId).onclick = function () {
        const codeText = document.getElementById(textId).textContent;
        const messageBox = document.getElementById(messageBoxId);

        navigator.clipboard.writeText(codeText).then(() => {
            messageBox.classList.add('show');
            setTimeout(() => {
                messageBox.classList.remove('show');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };
}

// Set up the copy buttons
setupCopyButton('copy_btn', 'text', 'message_box');
setupCopyButton('copy_btn2', 'text2', 'message_box2');
setupCopyButton('copy_btn3', 'text3', 'message_box3');

const filled = document.querySelector(".filled");

function updateProgressBar() {
    const scrollTop = window.scrollY; // Current scroll position
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable area
    const scrollPercent = (scrollTop / docHeight) * 100; // Calculate percentage of scrolling

    filled.style.width = `${scrollPercent}%`; // Update the width of the progress bar
    requestAnimationFrame(updateProgressBar); // Continuously update the progress bar
}

// Initialize the progress bar update
updateProgressBar();












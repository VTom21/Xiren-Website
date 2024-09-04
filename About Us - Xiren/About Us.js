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

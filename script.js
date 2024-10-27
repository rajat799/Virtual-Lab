function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('mainContent');
    
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';
        content.style.marginLeft = '200px'; // Reset margin when sidebar is visible
    } else {
        sidebar.style.display = 'none';
        content.style.marginLeft = 'auto'; // Center content when sidebar is hidden
        content.style.marginRight = 'auto';
    }
}
function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}
document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to Virtual Lab..."; // Text to type
    const speed = 100; // Typing speed in milliseconds
    let i = 0; // Current index

    function type() {
        if (i < text.length) {
            document.getElementById("welcome-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type(); // Start the typing effect
});


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Scroll to the section
            const sectionId = this.getAttribute('href');
            const section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

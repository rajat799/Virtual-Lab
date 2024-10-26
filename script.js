function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'none' || sidebar.style.display === '' ? 'block' : 'none';
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

//Dark mode part
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const ceoElements = document.querySelectorAll('.CEO');
    ceoElements.forEach(element => {
        element.classList.toggle('dark-mode');
    });
});

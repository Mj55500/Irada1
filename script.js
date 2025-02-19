document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    
    function buyBook(event) {
        const bookTitle = event.target.closest(".book").querySelector("h2").textContent;
        alert(`Вы купили книгу: ${bookTitle}`);
    }


    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", buyBook);
    });
});
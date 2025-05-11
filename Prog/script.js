document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ticketForm");
    const modal = document.getElementById("successModal");
    const closeModal = document.getElementById("closeModal");
    const closeSpan = document.querySelector(".close");

    // Ховаємо модальне вікно при завантаженні сторінки
    modal.style.display = "none";

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Перевіряємо, чи всі поля заповнені
        if (form.checkValidity()) {
            modal.style.display = "flex"; // Відкриваємо модальне вікно
            form.reset(); // Очищаємо форму після успішного відправлення
        } else {
            alert("Будь ласка, заповніть усі поля.");
        }
    });

    // Закриття модального вікна
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    closeSpan.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

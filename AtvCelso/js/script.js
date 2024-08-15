document.addEventListener('DOMContentLoaded', function () {
    // Get modal element
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close-btn');

    // Add event listeners to each card
    document.getElementById('card-uv').addEventListener('click', function () {
        modalText.textContent = 'Você selecionou Impressão UV.';
        modal.style.display = 'block';
    });

    document.getElementById('card-termica').addEventListener('click', function () {
        modalText.textContent = 'Você selecionou Impressão Termica.';
        modal.style.display = 'block';
    });

    document.getElementById('card-sublimacao').addEventListener('click', function () {
        modalText.textContent = 'Você selecionou Impressão UV';
        modal.style.display = 'block';
    });

    // Close the modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

});

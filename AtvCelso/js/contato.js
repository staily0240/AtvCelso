document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    var modal = document.getElementById('successModal');
    var span = document.getElementsByClassName('close')[0];

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o comportamento padrão de envio do formulário
        modal.style.display = 'block'; // Exibe o modal
        modal.querySelector('.modal-content').style.animation = 'fadeIn 0.3s ease-in-out'; // Adiciona a animação de entrada
    });

    span.onclick = function () {
        modal.querySelector('.modal-content').style.animation = 'fadeOut 0.3s ease-in-out'; // Adiciona a animação de saída
        setTimeout(function() {
            modal.style.display = 'none'; // Fecha o modal após a animação
        }, 300); // Tempo de animação
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.querySelector('.modal-content').style.animation = 'fadeOut 0.3s ease-in-out'; // Adiciona a animação de saída
            setTimeout(function() {
                modal.style.display = 'none'; // Fecha o modal após a animação
            }, 300); // Tempo de animação
        }
    };
});

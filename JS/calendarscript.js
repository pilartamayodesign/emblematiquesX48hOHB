
// CALENDARIO RESERVAS

let days = document.querySelectorAll('.day');


    days.forEach(day => {
        day.addEventListener('click', function() {
            days.forEach(day => day.classList.remove('hover-fixed'));
            this.classList.add('hover-fixed');
        });
    });


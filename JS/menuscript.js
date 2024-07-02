
// MENÚ HAMBURGUESA 48H OHB


function toggleMenu() {
    var menuDesplegable = document.getElementById("menuDesplegable");
    if (menuDesplegable.classList.contains('mostrar')) {
        menuDesplegable.classList.remove('mostrar');
    } else {
        menuDesplegable.classList.add('mostrar');
    }
}

function hideMenu() {
    var menuDesplegable = document.getElementById("menuDesplegable");
    menuDesplegable.classList.remove('mostrar');
}


// CLICK TIPO DROPDOWN


window.onload = function() {
  var menuItems = document.querySelectorAll('.menuDesplegable li');

  menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function(event) {
      event.stopPropagation();
      event.preventDefault(); 
      var subMenu = this.querySelector('ul');
      if (subMenu.style.display === 'none' || subMenu.style.display === '') {
        subMenu.style.display = 'block';
      } else {
        subMenu.style.display = 'none';
      }
    });
  });
};






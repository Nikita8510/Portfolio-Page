// scroll

$(window).scroll(function() {
  
    if ($(this).scrollTop() > 50) {
        $('.header').addClass("fixo");
    } else {
        $('.header').removeClass("fixo");
    }
});
// menu
document.querySelector('button').addEventListener('click', function() {
    var elementOne = document.getElementById('one');
    
    
    if (elementOne.classList.contains("toggled")) {
      elementOne.classList.remove("toggled");
     
    } else {
      elementOne.classList.add("toggled");
     
    }
  })
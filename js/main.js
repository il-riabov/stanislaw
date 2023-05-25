menu = document.querySelector('.btn-menu');
cls = document.querySelector('.btn-close');

nav = document.querySelector('.head-nav');
reg_aut = document.querySelector('.head-aut_reg');

menu.addEventListener('click', e => {
    menu.style.display = "none";        
    cls.style.display = "block";

    nav.style.display = "flex";
    reg_aut.style.display = "flex";
})

cls.addEventListener('click', e => {
    menu.style.display = "block";        
    cls.style.display = "none";

    nav.style.display = "none";
    reg_aut.style.display = "none";
})
// скрываем контекстное меню
$("div.menu").hide();
$('.fdff, .menu').on('mouseover', function() { $(".menu").show(); });
$('.fdff, .menu').on('mouseout', function()  { $(".menu").hide(); });

$(document).click(function() {
  isHovered = $("div.menu").is(":hover");
  if (isHovered == false){ $("div.menu").fadeOut("fast"); }
});


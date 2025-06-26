//menu izquierdo
document.addEventListener("DOMContentLoaded", function () 
{
    const submenus = document.querySelectorAll(".has-submenu > .menu-item");
    submenus.forEach(item => 
        {
            item.addEventListener("click", function () 
                {
                    const parent = item.parentElement;
                    parent.classList.toggle("active");
                });
        });
});

//menu derecho
document.addEventListener("DOMContentLoaded", function () 
{
    const btnVolverArriba = document.getElementById("btnVolverArriba");
    
    window.addEventListener("scroll", function () 
    {
    if (window.scrollY > 200) 
        {
        btnVolverArriba.classList.add("show");
        } 
        else 
        {
        btnVolverArriba.classList.remove("show");
        }
    });
});
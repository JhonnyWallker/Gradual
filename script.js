document.querySelector(".bars__menu").addEventListener("click", animateBars);
document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");


function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    
} 

function mostrar_menu(){
    document.querySelector(".menu").classList.toggle("mostrar_menu");
}

<script>
document.getElementById("current_date").innerHTML = Date();
</script>



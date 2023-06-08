let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};

/* ======== Animação digitação ======= */
function escrevendoletra(){
    function ativar(elemento){
        const arraytexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arraytexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra; 
            }, 80 * i);
        });
    }

    const titulo = document.querySelector('.typing');
    ativar(titulo);    
}
escrevendoletra()


var swiper = new Swiper(".slide-content", {
    slidesPerView: 5,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        720: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
    });

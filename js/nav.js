const line = document.querySelector(".menu-line");
const menu = document.querySelector(".menu-background");
const close = document.querySelector(".close");

close.addEventListener("click", () => {
    menu.classList.remove("active");
})

line.addEventListener("click", () => {
    menu.classList.add("active");
})










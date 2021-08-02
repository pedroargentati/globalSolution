const menuItemScroll = document.querySelectorAll(".header-nav a");
console.log(menuItemScroll);

menuItemScroll.forEach(item => {
    item.addEventListener('click', scrollToClick);
})

function scrollToClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const scrollToElement = document.querySelector(id).offsetTop;

    window.scroll({
        top: scrollToElement - 80,
        behavior: "smooth"
    })
}

// Parallax effect for the banner image
document.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    document.querySelector('#home img').style.backgroundPositionY = offset * 0.7 + 'px';
});

// Popup message if user tries to leave the page
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = 'Are you sure you want to leave?';
});

// Menu dishes appear as user scrolls
const dishes = document.querySelectorAll('.dish');

window.addEventListener('scroll', function () {
    dishes.forEach(dish => {
        const dishTop = dish.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 1.5;

        if (dishTop < windowHeight) {
            dish.classList.add('dish-show');
        }
    });
});

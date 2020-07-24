// Login / Register

const loginPage = document.querySelector('header .active');
const showLoginPage = document.querySelector('.login-container');
const closeLoginPage = document.querySelector('#btn-close');

loginPage.addEventListener('click', () => {
    showLoginPage.style.clipPath = `circle(100% at 50% 50%)`;
})

closeLoginPage.addEventListener('click', () => {
    showLoginPage.style.clipPath = `circle(0 at 50% 50%)`;
})

const loginToggle = document.querySelectorAll('.next-log');
const regPage = document.querySelector('#res');


loginToggle.forEach(item => {
    item.addEventListener('click', () => {
        regPage.classList.toggle('hidden');
    })
})


// SLIDESHOW

const img = document.querySelectorAll('.banner img');
const dots = document.querySelectorAll('.banner .nav-dot');
const prev = document.querySelector('.banner .prev');
const next = document.querySelector('.banner .next');

let showIndex;

showIndex = 0;

function slideShowFunc(index, arr) { 
    if (index === 0) {
        index = arr.length - arr.length
    }
    else if (index > 0 ) {
        index = arr.length - 1
    }

    const imgloop = function () {for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = 'none';
    }
}

    const dotloopRemove = function () {for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot-active')
    }
}

    const tidyFunc = () => {
        dotloopRemove();
        imgloop();
        dots[index].classList.add('dot-active');
        arr[index].style.display = 'block';
    }

    dots.forEach((item, index) => {
        item.addEventListener('click', () => {
            
            dotloopRemove();
            imgloop();
            dots[index].classList.add('dot-active');
            arr[index].style.display = 'block';
            console.log(index + ': Dots')
        })
    });

    const prevFunc = () => {
        prev.addEventListener('click', ()=>{
        if ( index < 1) {
            index = 4
        }
        index -= 1;
        tidyFunc();
        console.log(index + ': prev');
        
    });
    };

    const nextFunc = () => {
        next.addEventListener('click', ()=>{
        if (index > 2) {
            index = -1
        }
        index += 1;
        tidyFunc();
        console.log(index + ': next');
    });
};


    const showSlides = () => {
    dots[index].classList.add('dot-active');
    arr[index].style.display = 'block';
    }
    prevFunc();
    nextFunc();
    showSlides();

}




slideShowFunc(showIndex, img);



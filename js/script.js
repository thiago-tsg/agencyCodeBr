//ROLAGEM DA PAGINA

let currentSection = 0;
const sections = document.querySelectorAll('.section');

function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSection = index;
    }
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        scrollToSection(currentSection + 1);
    } else {
        scrollToSection(currentSection - 1);
    }
});

window.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown') {
        scrollToSection(currentSection + 1);
    } else if (event.key === 'ArrowUp') {
        scrollToSection(currentSection - 1);
    }
});



//PROJETOS BANNER

const container = document.querySelector(".container");
const containercarrossel = container.querySelector(".container-carrossel");
const carrossel = container.querySelector(".carrossel");
const carrosselItems = carrossel.querySelectorAll(".carrossel-item");

let isMouseDown = false;
let currentMousePos = 0;
let lastMousePos = 0;
let lastMoveTo = 0;
let moveTo = 0;

const createcarrossel = () => {
    const carrosselProps = onResize();
    const length = carrosselItems.length;
    const degress = 360 / length;
    const gap = 20;
    const tz = distanceZ(carrosselProps.w, length, gap);

    const fov = calculateFov(carrosselProps);
    const height = calculateHeight(tz);

    container.style.width = tz * 2 + gap * length + "px";
    container.style.height = height + "px";

    carrosselItems.forEach((item, i) => {
        const degressByItem = degress * i + "deg";
        item.style.setProperty("--rotatey", degressByItem);
        item.style.setProperty("--tz", tz + "px");
    });
};

const lerp = (a, b, n) => {
    return n * (a - b) + b;
};

const distanceZ = (widthElement, length, gap) => {
    return widthElement / 2 / Math.tan(Math.PI / length) + gap;
};

const calculateHeight = (z) => {
    const t = Math.atan((90 * Math.PI) / 180 / 2);
    const height = t * 2 * z;

    return height;
};

const calculateFov = (carrosselProps) => {
    const perspective = window
        .getComputedStyle(containercarrossel)
        .perspective.split("px")[0];

    const length =
        Math.sqrt(carrosselProps.w * carrosselProps.w) +
        Math.sqrt(carrosselProps.h * carrosselProps.h);
    const fov = 2 * Math.atan(length / (2 * perspective)) * (180 / Math.PI);
    return fov;
};

const getPosX = (x) => {
    currentMousePos = x;

    moveTo = currentMousePos < lastMousePos ? moveTo - 2 : moveTo + 2;

    lastMousePos = currentMousePos;
};

const update = () => {
    lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
    carrossel.style.setProperty("--rotatey", lastMoveTo + "deg");

    requestAnimationFrame(update);
};

const onResize = () => {
    
    const boundingcarrossel = containercarrossel.getBoundingClientRect();

    const carrosselProps = {
        w: boundingcarrossel.width,
        h: boundingcarrossel.height,
    };

    return carrosselProps;
};

const initEvents = () => {
    
    carrossel.addEventListener("mousedown", () => {
        isMouseDown = true;
        carrossel.style.cursor = "grabbing";
    });
    carrossel.addEventListener("mouseup", () => {
        isMouseDown = false;
        carrossel.style.cursor = "grab";
    });
    container.addEventListener("mouseleave", () => (isMouseDown = false));

    carrossel.addEventListener(
        "mousemove",
        (e) => isMouseDown && getPosX(e.clientX)
    );

    carrossel.addEventListener("touchstart", () => {
        isMouseDown = true;
        carrossel.style.cursor = "grabbing";
    });
    carrossel.addEventListener("touchend", () => {
        isMouseDown = false;
        carrossel.style.cursor = "grab";
    });
    container.addEventListener(
        "touchmove",
        (e) => isMouseDown && getPosX(e.touches[0].clientX)
    );

    window.addEventListener("resize", createcarrossel);

    update();
    createcarrossel();
};

initEvents();


// FORMULARIO CONTATO

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    phoneValidate();
})

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    } 
    else
    {
        removeError(0);
    }
}

function emailValidate(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function phoneValidate() {
    const phoneValue = campos[2].value.replace(/\D/g, '');
    const isValidPhone = phoneValue.length === 11 && phoneValue[2] === '9';

    if (!isValidPhone) {
        setError(2);
    } else {
        removeError(2);
    }
}


// BUTTON FORMS


$(function () {
    $("#button").click(function () {
        $("#button").addClass("onclic");
        setTimeout(validate, 250);
    });

    function validate() {
        setTimeout(function () {
            $("#button").removeClass("onclic").addClass("validate");
            setTimeout(callback, 450);
        }, 2250);
    }

    function callback() {
        setTimeout(function () {
            $("#button").removeClass("validate");
        }, 1250);
    }
});






document.addEventListener('DOMContentLoaded', function () {
    const apresentacao = document.querySelector('.apresentacao');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                apresentacao.classList.add('animate-slide-in');
            } else {
                apresentacao.classList.remove('animate-slide-in');
            }
        });
    });

    // Observa a section pai que contém .apresentacao
    const section = document.querySelector('#section1');
    observer.observe(section);
});







document.addEventListener('DOMContentLoaded', function () {
    const overlayAboutMe = document.querySelector('.overlay--aboutme');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                overlayAboutMe.classList.add('animate-slide-in-right');
            } else {
                overlayAboutMe.classList.remove('animate-slide-in-right');
            }
        });
    }, {
        threshold: 0.1 // Ajuste o valor conforme necessário
    });

    // Observa a section pai que contém .overlay--aboutme
    const section = document.querySelector('#section1');
    observer.observe(section);
});

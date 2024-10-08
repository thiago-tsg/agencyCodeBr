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
    const degrees = 360 / length;
    const gap = 5;
    const tz = distanceZ(carrosselProps.w, length, gap);

    const fov = calculateFov(carrosselProps);
    const height = calculateHeight(tz);

    container.style.width = tz * 2 + gap * length + "px";
    container.style.height = height + "px";

    carrosselItems.forEach((item, i) => {
        const degreesByItem = degrees * i + "deg";
        item.style.setProperty("--rotatey", degreesByItem);
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

const initMobileEvents = () => {
    carrosselItems.forEach((item) => {
        item.addEventListener("touchstart", () => {
            item.style.opacity = "1";
        });

        item.addEventListener("touchend", () => {
            item.style.opacity = "0.5";
        });
    });
};

initEvents();
initMobileEvents();


// FORMULARIO

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameValid = nameValidate();
    const emailValid = emailValidate();
    const phoneValid = phoneValidate();

    if (nameValid && emailValid && phoneValid) {
        form.submit(); // Envia o formulário se todas as validações forem bem-sucedidas
    }
});

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
        return false;
    } else {
        removeError(0);
        return true;
    }
}

function emailValidate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
        return false;
    } else {
        removeError(1);
        return true;
    }
}

function phoneValidate() {
    const phoneValue = campos[2].value.replace(/\D/g, '');
    const isValidPhone = phoneValue.length === 11 && phoneValue[2] === '9';

    if (!isValidPhone) {
        setError(2);
        return false;
    } else {
        removeError(2);
        return true;
    }
}

// BOTÕES

$(function () {
    $("#button").click(function () {
        // Execute a validação antes de adicionar classes ao botão
        const nameValid = nameValidate();
        const emailValid = emailValidate();
        const phoneValid = phoneValidate();

        if (nameValid && emailValid && phoneValid) {
            $("#button").addClass("onclic");
            setTimeout(validate, 250);
        }
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



// ENTRADA DAS DIV A TELA

document.addEventListener('DOMContentLoaded', function () {
    const apresentacao = document.querySelector('.apresentacao');
    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                apresentacao.classList.add('animate-slide-in');
            } else {
                apresentacao.classList.remove('animate-slide-in');
            }
        });
    }, { threshold: 0.1 });

    const section1 = document.querySelector('#section1');
    observer1.observe(section1);

    const overlayAboutMe = document.querySelector('.overlay--aboutme');
    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                overlayAboutMe.classList.add('animate-slide-in-right');
            } else {
                overlayAboutMe.classList.remove('animate-slide-in-right');
            }
        });
    }, { threshold: 0.1 });
    const section2 = document.querySelector('#section2');
    observer2.observe(section2);

    const overlaySkills = document.querySelector('.overlay--skills');
    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                overlaySkills.classList.add('animate-slide-in');
            } else {
                overlaySkills.classList.remove('animate-slide-in');
            }
        });
    });
    observer3.observe(overlaySkills);

    const cursos = document.querySelector('.cursos');
    const observer4 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cursos.classList.add('animate-slide-in-right');
            } else {
                cursos.classList.remove('animate-slide-in-right');
            }
        });
    });
    observer4.observe(cursos);

    const overlayProjects = document.querySelector('.overlay--projects');
    const observer5 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                overlayProjects.classList.add('animate-slide-in-left');
            } else {
                overlayProjects.classList.remove('animate-slide-in-left');
            }
        });
    });
    observer5.observe(overlayProjects);

    const overlayContact = document.querySelector('.overlay--contact');
    const observer6 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                overlayContact.classList.add('animate-slide-in-right');
            } else {
                overlayContact.classList.remove('animate-slide-in-right');
            }
        });
    });
    observer6.observe(overlayContact);
});
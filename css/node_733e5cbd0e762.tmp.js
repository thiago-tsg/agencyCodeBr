/* FONTES E ICONES */

@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');

/* ESTILIZAÇÃO GERAL */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "Michroma", sans-serif;
    color: white;
    letter-spacing: 2px;
    word-spacing: 2px;
}

:root {
    --titulo: "Pixelify Sans", sans-serif;
    --gray: #bbbbbb;
    --color-white: #fff;
    --color-red: #e63636;
    --color-dark1: #181818;
    --color-dark2: #1e1e1e;
}

body {
    scroll-behavior: smooth;
    overflow: hidden;
    height: 100vh;
}

/* HEADER */

header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: transparent;
    color: white;
    z-index: 9;
}

/* MENU */

nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
    align-items: center;
}

nav div h1 {
    font-family: var(--titulo);
    font-size: 3rem;
}

nav ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav ul li {
    position: relative;
}

nav ul li a {
    color: white;
    font-size: 1.1rem;
    font-weight: 900;
}

nav ul li a:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: white;
    bottom: -1px;
    left: 0;
    transition: width 0.6s ease-in-out;
}

nav ul li a:hover:before {
    width: 100%;
}

/* MAIN */

.section {
    height: 100vh;
    display: flex;
}

/* SECTION 1 */

.background--img {
    background: linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .7)), url(../assets/background/bg--desktop.gif);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.apresentacao {
    width: 35rem;
    padding: 3rem 1rem;
    text-align: center;
    border-radius: 30px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .9));
}

.apresentacao h1 {
    font-family: var(--titulo);
    font-size: 4rem;
    padding-bottom: 2rem;
}

.apresentacao p {
    font-size: 1.1rem;
    font-weight: 900;
}

.apresentacao a {
    font-size: 1.5rem;
    font-family: var(--titulo);
    font-weight: 900;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    color: #f1bebe;
    display: flex;
    justify-content: center;
    align-items: center;
}

.apresentacao a span {
    font-size: 1.5rem;
    padding: .3rem 0 0 .5rem;
    color: #f1bebe;
}

/* SECTION 2 */

.overlay--aboutme {
    width: 74rem;
    padding: 3rem 2rem;
    border-radius: 30px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .9));
    display: flex;
}

.aboutme1 {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.aboutme1 h2 {
    font-size: 2rem;
    font-weight: 900;
}

.aboutme1 p {
    margin-top: 1rem;
}

.icon--aboutme {
    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

.icon {
    width: 4rem;
    height: 4rem;
    border-radius: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon:hover {
    transform: translateY(-1rem);
    cursor: pointer;
}

.icon i {
    font-size: 2.5rem;
}

.aboutme2 {
    width: 45%;
}

.aboutme2 p {
    padding-left: 2rem;
}

/* SECTION 3 */

.skills {
    padding: 1rem 1.5rem;
    flex-direction: row;
    gap: 2rem;
}

.overlay--skills {
    border-radius: 30px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .9));
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 60%;
}

.text--skills {
    padding: 1rem 2rem;
}

.text--skills h2 {
    font-family: var(--titulo);
    font-size: 2.8rem;
}

.text--skills p {
    line-height: 1.8;
}

.text--skills span a {
    color: red;
}

.icon--skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    row-gap: 1rem;
    padding: 0 2rem 2rem 2rem;
}

.cicon--skills {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.cicon--skills div {
    margin: .5rem;
    width: 2rem;
    height: 2rem;
}

.cicon--skills div img {
    width: 100%;
}

/* CURSOS  */

.cursos{
    width: 40%;
    border-radius: 30px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .9));
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

/* SECTION 4 */

.overlay--projects {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50rem;
    padding: 3rem 1rem;
    text-align: center;
    border-radius: 30px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .9));
}

.overlay--projects h2 {
    font-family: var(--titulo);
    font-size: 4rem;
    padding-bottom: 2rem;
}

.conteudo__geral {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-carrossel {
    --widthItem: 150px;
    --heightItem: 100px;
    width: var(--widthItem);
    height: var(--heightItem);
    perspective: 1000px;
}

.carrossel {
    --rotatey: 0;
    font-size: 4rem;
    position: relative;
    transform: rotatey(var(--rotatey));
    transform-style: preserve-3d;
    user-select: none;
    cursor: grab;
}

.carrossel-item {
    opacity: 0.5;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: opacity 0.5s;
}

.carrossel-item:hover {
    opacity: 1;
}

.carrossel,
.carrossel-item {
    width: 100%;
    height: 100%;
}

.carrossel-item:nth-child(1) {
    --rotatey: 0;
    transform: rotatey(var(--rotatey)) translatez(var(--tz));
    background: linear-gradient(-229deg, #fbd52d, #ef3a7b);
}

.carrossel-item:nth-child(2) {
    --rotatey: 0;
    transform: rotatey(var(--rotatey)) translatez(var(--tz));
    background: linear-gradient(-229deg, #ff70af, #5fa8f5);
}

.carrossel-item:nth-child(3) {
    --rotatey: 0;
    transform: rotatey(var(--rotatey)) translatez(var(--tz));
    background: linear-gradient(-229deg, #0cebeb, #29ffc6);
}

.carrossel-item:nth-child(4) {
    --rotatey: 0;
    transform: rotatey(var(--rotatey)) translatez(var(--tz));
    background: linear-gradient(-229deg, #88f7f9, #048fff);
}

.carrossel-item:nth-child(5) {
    --rotate: 0;
    transform: rotatey(var(--rotatey)) translatez(var(--tz));
    background: linear-gradient(-229deg, #0093e9, #80d0c7);
}

.carrossel-item:nth-child(6) {
    --rotatey: 0;
    transform: rotatey(var(--rotatey)) translatez(var(--tz));
    background: linear-gradient(-229deg, #cf91ff, #5782f5);
}

.carrossel-item img {
    width: 100%;
}

@media screen and (min-width: 576px) {
    .container-carrossel {
        --widthItem: 250px;
        --heightItem: 200px;
    }
}

/* SECTION 5 */

.overlay--contact {
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 30px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .9));
}

form {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.span-required {
    display: none;
    font-size: 0.9rem;
    margin: 3px 0 0 1px;
    color: var(--color-red);
}

.inputs {
    padding: 0.5rem 0.5rem;
    outline: none;
    border-radius: 0.8rem;
    background-color: var(--color-dark1);
    border: 2px solid var(--color-dark2);
    color: var(--color-white);
    width: 100%;
    transition: 0.3s;
}

button[type="submit"] {
    padding: 1rem;
    font-size: 1rem;
    outline: none;
    border: none;
    border-radius: 0.8rem;
    margin-top: 1rem;
    color: var(--color-white);
    cursor: pointer;
    transition: 0.3s;
}

.cicon--form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-top: 1rem;
}

.form--icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 500px;
}

.form--icon:hover{
    transform: translateY(-.5rem);
}

.form--icon i{
    font-size: 2rem;
}

.btn--forms {
    padding: 1rem 0 2rem 0;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
}

.btn {
    background-color: transparent;
    height: 40px;
    width: 130px;
    border-radius: 40px;
    border: 2px solid white;
    color: white;
    cursor: pointer;
    transition: all 0.25s ease;
    font-weight: 900;
}

.btn:hover {
    color: white;
    background: black;
}

.btn:after {
    content: "ENVIAR";
}

.onclic {
    width: 40px;
    border-color: var(--gray);
    border-width: 3px;
    font-size: 0;
    border-left-color: white;
    animation: rotating 2s 0.25s linear infinite;
}

.onclic:after {
    content: "";
}

.validate {
    font-size: 13px;
    color: white;
    background: black;
}

.validate:after {
    font-family: 'FontAwesome';
    content: "\f00c";
}

@keyframes rotating {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@media screen and (max-width: 576px) {
    .box-select {
        flex-direction: column;
        gap: 0.8rem;
    }
}

/* FOOTER */

footer {
    text-align: center;
    padding: 1rem;
    background-color: #333;
    color: white;
}














:root {
    
}


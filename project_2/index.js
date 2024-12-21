let img = document.querySelector('img');
let h2 = document.querySelector('h2');

let prevSrc = img.src;
let prevText = h2.innerText;

img.addEventListener('mouseover', () => {
    img.src = './images/paris.jpg';
    h2.innerText = 'Paris';
    img.style.border = '2px solid yellow';
})
img.addEventListener('mouseleave', () => {
    img.src = prevSrc;
    h2.innerText = prevText;
    img.style.border = '2px solid rgb(0, 0, 208)';

})
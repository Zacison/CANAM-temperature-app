const range = document.querySelector('#myRange');
const bubble = document.querySelector('.middle-right-temp-top-slider-output');
const visToggle = document.querySelector('#visual-notification');
const page = document.querySelector('#page');

console.log(page);

onVisualNotficationChange = (check) => {
    if(check.checked) {
        page.className = 'page-background';
    } else {
        page.className = 'page';
    }
}

range.addEventListener("input", () => {
    setBubble(range, bubble);
});

setBubble(range, bubble);


function setBubble(range, bubble) {
  const val = parseFloat(range.value);
  bubble.innerHTML = val;
};
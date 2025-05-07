const container = document.querySelector('.container');

const careers = ['a youtuber', 'a web developer', 'a freelancer', 'an instructor'];

let careersIndex = 0;

let characterIndex = 0;

updateText();
function updateText () {
    characterIndex++

   container.innerHTML = `
<h1>im ${careers[careersIndex].slice(0,characterIndex)}</h1>
` 

setTimeout(updateText, 400);

if (characterIndex === careers[careersIndex].length) {
    careersIndex++;
    characterIndex = 0;
};
if (careersIndex === careers.length) {
    careersIndex = 0;
}
}

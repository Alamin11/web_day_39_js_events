console.log("DOM events");
// option:2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// option:3
const purpleBtn = document.getElementById("purple-btn");
purpleBtn.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
// option:3 another
const blueBtn = document.getElementById('blue-btn');
blueBtn.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';

}
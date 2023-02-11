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
// option:4
const pinkBtn = document.getElementById('pink-btn');
pinkBtn.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// option:4 another
const greenBtn = document.getElementById('green-btn');
greenBtn.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';

})
// final option
document.getElementById('goldenrod-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})

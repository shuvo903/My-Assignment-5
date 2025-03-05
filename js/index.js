let btn = document.getElementById("randomColor");
let bgColor = document.getElementById("chengingColor");
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
btn.addEventListener("click", (event) => {

    document.body.style.backgroundColor = getRandomColor();

});
const date = new Date();
const dayName = date.toLocaleString('default', { weekday: 'short' });
const day = date.getDate();
const monthName = date.toLocaleString('default', { month: 'short' });
const year = date.getFullYear();

console.log(`${day} ${monthName} ${year}`);

const realDate = document.getElementById('dayYearName');


const div = document.createElement('div');

div.innerHTML = `
<h1 class="text-2xl">${dayName},</h1>

<h2 class="text-xl font-bold">${monthName} ${day} ${year}</h2>
`
realDate.appendChild(div);

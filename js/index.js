let btn = document.getElementById("randomColor");
let bgColor = document.getElementById("chengingColor");
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
btn.addEventListener("click", (event) => {
  
    document.body.style.backgroundColor = getRandomColor();

});


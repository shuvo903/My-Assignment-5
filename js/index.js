// document.getElementById('randomColor').addEventListener('click',function(){

// })

// const btn = document.getElementById('randomColor');
// let randomNumber = () => {
//     return Math.floor(Math.random() * 256);
// };

// let chenageColor = () => {

// let rendomColor = `rgb(${randomNumber()},$
// {randomNumber()},${randomNumber})`;
// document.body.style.backgroundColor = rendomColor;
// };
// btn.addEventListener('click',chenageColor);
// window.addEventListener('load',chenageColor);



const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


function getCharacter(i) {
    return hexCharacters[i]
}

function generateJustOneColor(){

    let hexColorRep = "#"

    for (let i = 0; i < 6; i++){
        hexColorRep += getCharacter( i )
    }

    return hexColorRep

}
let btn = document.getElementById('randomColor')
let bgColor = document.getElementById('chengingColor')

btn.addEventListener("click", (event) => {

    const newColor = generateNewColor()

    document.body.style.backgroundColor  = newColor
    bgColor.textContent = newColor 

})



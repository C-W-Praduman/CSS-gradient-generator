
// selecting dom elements
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let colorboard = document.getElementById("colorbox");
let color1 = "#fff"
let color2 = "#000"

// random color generater
const randomhex = () => {
    // hexacode
    let color = "0123456789abcdef";
    // for string and make hexa code example: #ede487
    let randomcolor = "#";
    for (let i = 0; i < 6; i++) {
        randomcolor += `${color[Math.floor(Math.random() * 16)]}`
    }
    return randomcolor;
}

// event handler for btn1
const handlebtn1 = () => {
    color1 = randomhex();
    // change style for background of body

    document.body.style.backgroundImage = `linear-gradient(to right, ${color1},${color2})`
    btn1.innerText = color1

    colorboard.innerText = ` background-image:  linear-gradient(to right,${color1} ,${color2});`
}

// event handler for btn1

const handlebtn2 = () => {
    color2 = randomhex();
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1},${color2})`
    btn2.innerText = color2
    colorboard.innerText = ` background-image:  linear-gradient(to right,${color1} ,${color2});`
}


// btn1 event listener
btn1.addEventListener("click", handlebtn1)
// btn1 event listener

btn2.addEventListener("click", handlebtn2)

// copy function 

colorboard.addEventListener("click", ()=>{
    
   // Copy the text inside the text field
  navigator.clipboard.writeText(colorboard.innerText);
  alert("Code copied to the clipboard ✔ ✔ ✔")
    
})
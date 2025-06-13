let tags = document.getElementById("container")
let hack = document.getElementById("hack")
hack.addEventListener("click",()=>{
    alert("hello")
})
let newH = document.getElementById("add")
newH.style.backgroundColor = "blue"
newH.innerHTML = "new one"
tags.append(newH)




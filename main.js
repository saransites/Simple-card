const dots=document.querySelectorAll(".dot")
const img=document.getElementById("image")

dots[0].addEventListener("click",()=>{
    img.src="./images/f1.jpg"
    dots[0].classList.add("active")
    dots[1].classList.remove("active")
    dots[2].classList.remove("active")
})
dots[1].addEventListener("click",()=>{
    img.src="./images/f2.jpg"
    dots[1].classList.add("active")
    dots[0].classList.remove("active")
    dots[2].classList.remove("active")
})
dots[2].addEventListener("click",()=>{
    img.src="./images/f3.jpg"
    dots[2].classList.add("active")
    dots[1].classList.remove("active")
    dots[0].classList.remove("active")
})


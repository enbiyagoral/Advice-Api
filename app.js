// DOM
const title = document.querySelector(".title");
const id = document.querySelector("#id");
const context = document.querySelector(".context");
const mixBtn = document.querySelector(".mixBtn");


const url = "https://api.adviceslip.com/advice";

mixBtn.addEventListener("click",()=>{
    if(mixBtn.classList.contains("active")){
        mixBtn.classList.remove("active");
    }else{
        mixBtn.classList.add("active");
    }
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        title.innerHTML=`#Advice<span id="id" style="color: white;">${data.slip.id}</span>`;
        context.innerHTML=`<p>${data.slip.advice}</p>`
        mixBtn.innerHTML=`Mix a advice`
    });
})

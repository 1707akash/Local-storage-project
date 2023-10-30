let writeText =document.querySelector("textarea");

writeText.addEventListener("input",()=>{
    console.log(writeText.value);
    localStorage.setItem("text",writeText.value)
    
})
writeText.value=localStorage.getItem("text")
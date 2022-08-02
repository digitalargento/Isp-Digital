const hmenu= document.querySelector(`#hamburguesamenu`);
const menuresponsive= document.querySelector(`.menuresponsive`)
const iconoX= document.querySelector(`#iconoX`)
hmenu.addEventListener("click",()=>{
    displayresponsive()

})
iconoX.addEventListener("click", ()=>{
    ocultarmenu()
})
function displayresponsive(){
    
        menuresponsive.style.display="block"
        console.log("llego al final")
    
    
}
function ocultarmenu (){
    menuresponsive.style.display="none"
    console.log("Aprete la X")
}


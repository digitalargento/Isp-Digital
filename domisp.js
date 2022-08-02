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
    
         menuresponsive.classList.add("menuresponsive-open")
        console.log("llego al final")
    
    
}
 function ocultarmenu (){
    menuresponsive.classList.remove("menuresponsive-open")
     console.log("Aprete la X")
 }
 const enlaces = document.querySelector(".enlacesmoviles");

enlaces.addEventListener("click" , (e) => {
    
     if ( e.target.className === "menu-a"){
       ocultarmenu();
     }
 })

    
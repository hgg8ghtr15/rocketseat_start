const openModal =  document.querySelector("#openModal");
const modal = document.querySelector(".modal-wrapper");
const fecharModal = document.querySelector("#fecharModal");

openModal.addEventListener("click", function (){    
    modal.classList.remove("invisible")
    // console.log(fecharModal)
})

fecharModal.addEventListener("dblclick", function () {
    modal.classList.add("invisible")
 })

 
document.addEventListener("keydown", function (e) {
    const isEscKey = e.key === "Escape"
    if (isEscKey) {
        modal.classList.add("invisible")
    } 
})

// variables

const btnAgregar = document.querySelector("#btnAgregar")
const inpTarea = document.querySelector("#inpTarea")
const lnkBorrarLista = document.querySelector("#lnkBorrarLista")
const ul = document.querySelector("#ul")
//const li = document.querySelector("li")


// eventos

btnAgregar.addEventListener("click", () => {
    let tarea = inpTarea.value
    const li = document.createElement("li")
    li.innerHTML = 
    `<span>
    <i class="fa fa-trash"></i>  
    </span>
    <b>${tarea}</b>`
    ul.appendChild(li)
})

lnkBorrarLista.addEventListener("click", () => {
   
    //ul.remove("li")

})

li.addEventListener("click", li, () => {
    
})

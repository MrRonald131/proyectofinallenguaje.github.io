if(localStorage.getItem("theme")==="dark"){document.body.classList.add("dark")}

document.getElementById("toggleTheme")?.addEventListener("click",()=>{
 document.body.classList.toggle("dark")
 localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light")
})

document.getElementById("search")?.addEventListener("keyup",function(){
 let filtro=this.value.toLowerCase()
 document.querySelectorAll("#tablaProductos tbody tr").forEach(f=>{
  f.style.display=f.innerText.toLowerCase().includes(filtro)?"":"none"
 })
})

document.querySelectorAll("th").forEach((th,i)=>{
 th.addEventListener("click",()=>{
  let tabla=th.closest("table")
  let filas=Array.from(tabla.querySelectorAll("tbody tr"))
  let asc=th.classList.toggle("asc")
  filas.sort((a,b)=>{
   let A=a.children[i].innerText
   let B=b.children[i].innerText
   return asc?A.localeCompare(B,undefined,{numeric:true}):B.localeCompare(A,undefined,{numeric:true})
  })
  filas.forEach(f=>tabla.querySelector("tbody").appendChild(f))
 })
})
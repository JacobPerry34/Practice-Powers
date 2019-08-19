const powers = document.querySelector("#powerList")
console.log(powers)
const flight = document.querySelector("#flight")
console.log(flight)
const mindReading = document.querySelector("#mindreading")
console.log(mindReading)
const xray = document.querySelector("#xray")
console.log(xray)


// document.querySelector("#activate-flight").addEventListener("click", function(){
//  flight.classList.toggle("disabled")
//  flight.classList.toggle("enabled")
// })

// document.querySelector("#activate-mindreading").addEventListener("click",function(){
//     mindReading.classList.toggle("disabled")
//     mindReading.classList.toggle("enabled")
// })

// document.querySelector("#activate-xray").addEventListener("click",function(){
//     xray.classList.toggle("disabled")
//     xray.classList.toggle("enabled")
// })
function onOff(){
    const selectedIdName = event.target.id.split("-")[1]
// console.log(event.target.class.split("-")[1])}
document.querySelector(`${selectedIdName}`).classList.toggle("disabled")
document.querySelector(`${selectedIdName}`).classList.toggle("enabled")

}

 const button = document.querySelectorAll("button")
 for(let i=0; i< button.length; i++){
    if (button[i].id.includes("activate-")){
button[i].addEventListener("click", onOff)
    } else if (button[i].id.includes("deactivate-all")){
        button[i].addEventListener("click",function(){
            powers.classList.remove("disabled")
            powers.classList.add("enabled")
        })}
     else if (button[i].id.includes("activate-all")){
         button[i].addEventListener("click",function(){
            powers.classList.remove("disabled")
            powers.classList.add("enabled")
     })
    }
}

// document.querySelector("#activate-all").addEventListener("click",function(){
//     powers.classList.toggle("disabled")
//     powers.classList.toggle("enabled")
// })

// document.querySelector("#deactivate-all").addEventListener("click",function(){
//     powers.classList.toggle("disabled")
//     powers.classList.toggle("enabled")
// })
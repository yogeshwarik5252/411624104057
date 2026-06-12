const { append } = require("express/lib/response");

console.log("external js");
const a=10;
const b=20;
console.log(a+b);
const str="string";
console.log(str);
const arr=[1,2.1,"string",false]
console.log(arr)
arr[1]=3.1;
console.log(arr)
arr.push(4)
console.log(arr)
arr.pop()
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
function example(){
    console.log("I am writing something")
}
const access=document.getElementById("ptag")
access.innerHTML="paragraph"

const input=document.getElementById("input")
const output=document.getElementById("inputField")
input.addEventListener("input",()=>{
    output.textContent=input.value
})
const first=document.createElement("P")
first.textContent= "some text"
document.body.appendChild(first)
first.remove()
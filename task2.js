function loadData(){

let status=document.getElementById("status");
let output=document.getElementById("output");

status.innerHTML="Loading...";
output.innerHTML="";

setTimeout(()=>{

fetch("https://jsonplaceholder.typicode.com/users")

.then(response=>response.json())

.then(data=>{

data.forEach(user=>{

output.innerHTML += `
<div class="card">

<h3>${user.name}</h3>

<p>Email: ${user.email}</p>

<p>Phone: ${user.phone}</p>

</div>
`;

});

status.innerHTML="Loaded successfully";

})

.catch(()=>{
status.innerHTML="Error loading data";
});

},2000);

}
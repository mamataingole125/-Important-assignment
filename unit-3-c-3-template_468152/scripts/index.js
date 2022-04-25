// Store the wallet amount to your local storage with key "amount"
function add_to_wallet(){
    let input=document.getElementById("amount").value
    console.log(input)
    localStorage.setItem("amount",JSON.stringify(input))
    
}
let getinput=JSON.parse(localStorage.getItem("amount"))




let h1=document.getElementById("wallet")
h1.innerText=getinput
 




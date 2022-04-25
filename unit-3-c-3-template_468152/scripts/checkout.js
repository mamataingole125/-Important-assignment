// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let movie= JSON.parse(localStorage.getItem("movie"))
console.log(movie.Poster)
let m1=document.getElementById("movie")
console.log(movie)
function one(){
//   movie.forEach(function(el){

    let div=document.createElement("div")
    div.style.marginLeft="500px"
    div.style.marginTop="50px"
    let img=document.createElement("img")
    img.src=movie.Poster
    let p=document.createElement("p")
    p.innerText=movie.Title

    div.append(img,p)
     m1.append(div)
     console.log(m1)

// })
    

}

one()


let getinput=JSON.parse(localStorage.getItem("amount"))
let h1=document.getElementById("wallet")
h1.innerText=getinput

console.log(getinput)

function submit(){
    let count=document.getElementById("number_of_seats").value
    console.log(count)
    if(count*100>getinput){
        alert("Insufficient Balance!")
    }else{
        alert("Booking successful!")
    }
    
}


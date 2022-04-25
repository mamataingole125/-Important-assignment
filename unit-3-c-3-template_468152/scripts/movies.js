// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// http://www.omdbapi.com/?apikey=36cc3445&s=${query}

let data=JSON.parse(localStorage.getItem("amount")) || []

async function movie(){
    let query=document.getElementById("search").value
   try{
    const res=await fetch(`http://www.omdbapi.com/?apikey=36cc3445&s=${query}`)
    const data=await res.json()
    console.log(data)
    let movies=data.Search
    // append(movies)
    return movies
   }catch(err){
       console.log(err)
   }
}

let id;

function append(data){
    let movies=document.getElementById("movies")
    movies.innerHTML=null
    movies.style.display="grid"
    movies.style.gridTemplateColumns="repeat(4,1fr)"
    movies.style.gap="20px"

    data.forEach(function(el){
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.Poster
        let p=document.createElement("p")
        p.innerText=el.Title
          
        let btn=document.createElement("button")
        btn.innerText="book_now"
        btn.setAttribute("class","book_now")
        btn.addEventListener("click",function(){
            bookMovie(el)
           
           
        })

        div.append(img,p,btn)
        movies.append(div)

    })
}



async function main(){
    let data=await movie()

    append(data)
}

function debouncing(func,delay){
if(id){
    clearTimeout(id)
}

    id=setTimeout(function(){
      
        func()
    },delay)
}


function bookMovie(data){
    console.log("data")
   localStorage.setItem("movie",JSON.stringify(data))
   window.location.href="checkout.html"

}

let getinput=JSON.parse(localStorage.getItem("amount"))
let h1=document.getElementById("wallet")
h1.innerText=getinput


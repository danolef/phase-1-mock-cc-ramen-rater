// write your code here

// Deliverables
// [x] see all ramen img in the div- render by 
// [] click on an image and see info
// [] create new ramen from submitting a form

// Declear variables
const url= " http://localhost:3000/ramens"
const imgContainer = document.querySelector("#ramen-menu")

// retreive data

function reteriveRamen(){
    fetch(url)
    .then((res)=> res.json())
    .then((ramenObjs) => ramenObjs.forEach(createramen)) 
}

reteriveRamen()

// create data content

function createramen(ramenObjs){
    let ramenImg=ramenObjs.image
    const img= document.createElement("img")
    img.src= ramenImg
    imgContainer.appendChild(img)
}

// rendurn the content
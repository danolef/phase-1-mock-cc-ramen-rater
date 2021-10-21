// write your code here

// Deliverables
// [x] see all ramen img in the div- render by 
// [] click on an image and see info
// [] create new ramen from submitting a form

// Declear variables
const url= " http://localhost:3000/ramens"
const imgContainer = document.querySelector("#ramen-menu")
const ramenDetails = document.querySelector("#ramen-detail")

// retreive data

function reteriveRamen(){
    fetch(url)
    .then((res)=> res.json())
    .then((ramenObjs) => ramenObjs.forEach(createramen)) 
}

reteriveRamen()

// create data content

function createramen(ramenObjs){
    //added img
    const img= document.createElement("img")
    img.src= ramenObjs.image
    imgContainer.appendChild(img)

    imgContainer.addEventListener("click", addDetails(ramenObjs))
}

function addDetails(ramenObjs) {
    let ramenDetailImg= ramenDetails.querySelector(".detail-image")
    let ramenDetailName= ramenDetails.querySelector(".name")
    let ramenDetailRest= ramenDetails.querySelector(".restaurant")
    let ramenDetailRating= document.querySelector("#rating-display")
    let RamenDetailComment= document.querySelector("#comment-display")

    ramenDetailImg.src= ramenObjs.image
}

// click events


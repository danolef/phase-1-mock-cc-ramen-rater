// write your code here

// Deliverables
// [x] see all ramen img in the div- render by 
// [] click on an image and see info
// [] create new ramen from submitting a form

// Declear variables
const url= " http://localhost:3000/ramens"
const imgContainer = document.querySelector("#ramen-menu")
const ramenDetails = document.querySelector("#ramen-detail")
let ramenDetailImg= ramenDetails.querySelector(".detail-image")
let ramenDetailName= ramenDetails.querySelector(".name")
let ramenDetailRest= ramenDetails.querySelector(".restaurant")
let ramenDetailRating= document.querySelector("#rating-display")
let ramenDetailComment= document.querySelector("#comment-display")
let ramenForm= document.querySelector('form')


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

    imgContainer.addEventListener("click", (e) => addDetails(e, ramenObjs))
}

function addDetails(e, ramenObjs) {

    e.target.nextSibling
    
    ramenDetailImg.src= ramenObjs.image
    ramenDetailName.textContent= ramenObjs.name
    ramenDetailRest.textContent= ramenObjs.restaurant
    ramenDetailRating.textContent= ramenObjs.rating
    ramenDetailComment.textContent= ramenObjs.comment

//     ramenDetailImg.src= ramenObjs.image
//     ramenDetailName.textContent= ramenObjs.name

}

// click events

ramenForm.addEventListener("submit", newRamenForm)

function newRamenForm(e) {
    e.preventDefault()

    let newName= e.target.name.value
    let newRest= e.target.restaurant.value
    let newImage= e.target.image.value
    
    ramenDetailName.textContent= newName
    ramenDetailRest.textContent= newRest
    ramenDetailImg.src= newImage



    ramenForm.reset()
}


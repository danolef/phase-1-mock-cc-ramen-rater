// write your code here

// Deliverables
// [] see all ramen img in the div- render by 
// [] click on an image and see info
// [] create new ramen from submitting a form

// Declear variables
const url= " http://localhost:3000/ramens"

// retreive data

function reteriveRamen(){
    fetch(url)
    .then((res)=> res.json())
    .then((ramenObjs) => createramen(ramenObjs)) 
}

reteriveRamen()

// create data content

function createramen(ramenObjs){
    console.log(ramenObjs)
}

// rendurn the content
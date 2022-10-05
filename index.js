window.addEventListener("DOMContentLoaded", function() {



const imagesArray = [
    {
        name:"frog",
        img:"./images/frog.jpg"
    },
    {
        name:"frog",
        img:"./images/frog.jpg"
    },

    {
        name:"elephant",
        img:"./images/elephant.jpg"
    },
    {
        name:"elephant",
        img:"./images/elephant.jpg"
    },

    {
        name:"eagle",
        img:"./images/eagle.jpg"
    },
    {
        name:"eagle",
        img:"./images/eagle.jpg"
    }
]


imagesArray.sort(()=> 0.5 - Math.random())

const imgContainer = document.querySelector(".img-container")
const result = document.querySelector(".text")

for(let i=0; i < imagesArray.length; i ++ ) {
    const img = document.createElement("img")
    img.setAttribute("src", "./images/greenColor.jpg")
    img.setAttribute("data-id", i)
    img.addEventListener("click", flipImgCard)
    imgContainer.appendChild(img)
}

let chosenImg = []
let chosenImgId = []
let imgWon = []
let imgLos = []

function checkForMatch() {
    const card = document.querySelectorAll("img")
    const optionOneId = chosenImgId[0]
    const optionTwoId = chosenImgId[1]
    if(chosenImg[0] === chosenImg[1]) {
        alert('You found a match')
        card[optionOneId].setAttribute("src", "./images/white.jpg")
        card[optionTwoId].setAttribute("src", "./images/white.jpg")
        imgWon.push(chosenImg)
    } else {
        
        card[optionOneId].setAttribute("src", "./images/greenColor.jpg")
        card[optionTwoId].setAttribute("src", "./images/greenColor.jpg")
        imgLos.push(chosenImg)
        alert('Sorry, try again')

    }
    chosenImg = []
    chosenImgId = []
    result.innerHTML = `
    <span>Score:${imgWon.length}</span><br>
        <span>Failed Attempts:${imgLos.length}</span>
    `
    if(chosenImg === imagesArray.length/2) {
        result.innerHTML = `
        <span>Congragulations, you found them all</span>`
    }
}

function flipImgCard() {
    const imgId  = this.getAttribute("data-id")
    chosenImg.push(imagesArray[imgId].name)
    chosenImgId.push(imgId)
    this.setAttribute("src", imagesArray[imgId].img)
    if(chosenImg.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}


})


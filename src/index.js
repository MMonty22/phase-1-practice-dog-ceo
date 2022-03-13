const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

let allBreeds = []

function getAnimals () {
    fetch(imgUrl)
    .then(res => res.json())
    .then(function (dogs) {
        for (let i=0; i < 4; i++) {
            const dogImages = document.getElementById('dog-image-container')
            const pics = document.createElement('img')
            pics.src = dogs.message[i]
            dogImages.append(pics)
        }
    })
}

getAnimals();

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getDogBreeds () {
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        console.log(breeds.message)
        allBreeds = Object.keys(breeds.message)
        renderBreeds(allBreeds)})
}

const breedUl = document.getElementById('dog-breeds')

function renderBreeds (breeds){
    breedUl.innerHTML = ''
    for (let breed of breeds) {
        let breedLi = document.createElement('li')
        breedLi.innerText = breed
        breedUl.append(breedLi)
    }
    //change color when clicked
    const li = document.querySelectorAll('li')
    li.forEach(item => {
        item.addEventListener('click', function () {
        item.style.color = 'blue'
        })
    })  
}



getDogBreeds();

const select = document.getElementById('breed-dropdown')
const option = document.querySelectorAll('option')
select.addEventListener('change', function (e) {
    console.log(e.target.value)
    let newArray = allBreeds.filter(breed => breed.startsWith(e.target.value))
    console.log(newArray)
    renderBreeds(newArray)
})
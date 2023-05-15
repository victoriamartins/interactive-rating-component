const btnSubmit = document.getElementById('send')
const btnOptions = document.getElementsByClassName('rating-option')
const ratingContainer = document.getElementById('rating-container')
const thanksContainer = document.getElementById('thanks-container')
const spanResult = document.getElementById('final-rating')

function eraseChosenClass(index = 0) {
    for (let i = 0; i < btnOptions.length; i++) {
        if (i != index) {
            btnOptions[i].classList.remove('chosen')
        }
    }
}

thanksContainer.classList.add('hide-container')
var rating = 0
for (let i = 0; i < btnOptions.length; i++) {
    btnOptions[i].addEventListener('click', () => {
        rating = i + 1
        btnOptions[i].classList.add('chosen')
        eraseChosenClass(i)
    })
}

btnSubmit.addEventListener('click', () => {
    if (rating != 0) {
        btnSubmit.disabled = true
        ratingContainer.classList.add('hide-container')
        thanksContainer.classList.remove('hide-container')
        spanResult.textContent = rating
    }
})

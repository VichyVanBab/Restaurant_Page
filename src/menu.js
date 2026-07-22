import bannann from "./images/banan.jpg"
import diriAkLegim from "./images/diraklegim.jpg"
import mayiKole from "./images/mayikole.jpg"
import HaitianSpa from "./images/HaitianSpaghetti.jpg"

const pageContent = document.querySelector('#content')
const forkEmoji = String.fromCodePoint(0x1F374);
const plateEmoji = String.fromCodePoint(0x1F37D);
const wine   = String.fromCodePoint(0x1F377)

function createItem (tag = 'h3'){
    const para = document.createElement(tag)
    para.classList.add('card')
    return para
}

function createCard(card = 'div'){
    const divCard = document.createElement(card)
    divCard.classList.add('cardBlock')
    return divCard
}
function addMenuPage(){
    pageContent.textContent = ''
    const welcTxt = document.createElement('h1')
    welcTxt.classList.add('welc')
    welcTxt.textContent = `Haitian Menu ${forkEmoji}`
    const divMen = document.createElement('div')
    const flexDiv = document.createElement('div')
    flexDiv.classList.add('flexDiv')
    divMen.classList.add('menu');
    // first Card 
    const firstCard = createCard()
    const firstItem = createItem()
    firstItem.textContent = 'Bannann peze ak plikiz'
    const firsImg = document.createElement('img')
    firsImg.classList.add('img')
    firsImg.src = bannann;
    firstCard.appendChild(firstItem)
    firstCard.appendChild(firsImg)

    // second Card 
    const secondCard = createCard()
    const secondItem = createItem()
    secondItem.textContent = 'Mayi kole'
    const secondImg = document.createElement('img')
    secondImg.classList.add('img')
    secondImg.src = mayiKole;
    secondCard.appendChild(secondItem)
    secondCard.appendChild(secondImg)

    // third Card 
    const thirdCard = createCard()
    const thirdItem = createItem()
    thirdItem.textContent = 'Diri ak Legim'
    const thirdImg = document.createElement('img')
    thirdImg.classList.add('img')
    thirdImg.src = diriAkLegim;
    thirdCard.appendChild(thirdItem)
    thirdCard.appendChild(thirdImg)

    // fourth card
    const fourthCard = createCard()
    const fourthItem = createItem()
    fourthItem.textContent = 'Espageti'
    const fourthImg = document.createElement('img')
    fourthImg.classList.add('img')
    fourthImg.src = HaitianSpa;
    fourthCard.appendChild(fourthItem)
    fourthCard.appendChild(fourthImg)

    
    divMen.appendChild(firstCard)
    divMen.appendChild(secondCard)
    divMen.appendChild(thirdCard)
    divMen.appendChild(fourthCard)
    flexDiv.appendChild(welcTxt)
    flexDiv.appendChild(divMen)
    pageContent.appendChild(flexDiv)
}

export {addMenuPage};
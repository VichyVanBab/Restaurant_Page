const pageContent = document.querySelector('#content')

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
    welcTxt.textContent = 'Haitian Menu'
    const divMen = document.createElement('div')
    const flexDiv = document.createElement('div')
    flexDiv.classList.add('flexDiv')
    divMen.classList.add('menu');
    // first Card 
    const firstCard = createCard()
    const firstItem = createItem()
    firstItem.textContent = 'The best Cuisine'
    const firsImg = document.createElement('img')
    firstCard.appendChild(firstItem)
    firstCard.appendChild(firsImg)

    // second Card 
    const secondCard = createCard()
    const secondItem = createItem()
    secondItem.textContent = 'Alibaba'
    const secondImg = document.createElement('img')
    secondCard.appendChild(secondItem)
    secondCard.appendChild(secondImg)

    // third Card 
    const thirdCard = createCard()
    const thirdItem = createItem()
    thirdItem.textContent = 'Haiti Sausage'
    const thirdImg = document.createElement('img')
    thirdCard.appendChild(thirdItem)
    thirdCard.appendChild(thirdImg)

    // fourth card
    const fourthCard = createCard()
    const fourthItem = createItem()
    fourthItem.textContent = 'Bannan ak Plikiz'
    const fourthImg = document.createElement('img')
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
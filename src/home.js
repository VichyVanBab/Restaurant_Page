const pageContent = document.querySelector('#content');

function addHomePage(){
    pageContent.textContent = ''
    const divHero = document.createElement('div')
    divHero.className = "homeClass"
    const restName = document.createElement('h1')
    restName.textContent = ' Welcome To Haisto'
    const restPara = document.createElement('p')
    restPara.textContent = 'The best Haitian restaurant in the caribbean'
    divHero.appendChild(restName)
    divHero.appendChild(restPara)
    pageContent.appendChild(divHero)
}

export {addHomePage};
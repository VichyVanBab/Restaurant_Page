import diriKolePic from "./images/diri.jpg"

const pageContent = document.querySelector('#content');
const plateEmoji = String.fromCodePoint(0x1F37D);
const savoringEmoiji = String.fromCodePoint(0x1F60B)

function addHomePage(){
    pageContent.textContent = ''
    const divHero = document.createElement('div')
    divHero.className = "homeClass"
    const restName = document.createElement('h1')
    restName.textContent = `Welcome To Haisto ${plateEmoji}`
    const restPara = document.createElement('p')
    restPara.textContent = `The best Haitian restaurant in the caribbean ${savoringEmoiji}`
    const imgDirKole = document.createElement('img')
    imgDirKole.src = diriKolePic
    imgDirKole.alt = 'Diri kole picture'
    imgDirKole.classList.add('dirikole')
    divHero.appendChild(restName)
    divHero.appendChild(restPara)
    divHero.appendChild(imgDirKole)
    pageContent.appendChild(divHero)
}

export {addHomePage};
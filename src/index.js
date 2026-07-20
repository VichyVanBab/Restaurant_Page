import './styles.css'
import { addHomePage } from './home.js';
import { addMenuPage } from './menu.js';

const btns = document.querySelectorAll('button');

btns.forEach(btn =>{
    btn.addEventListener('click', (e) =>{
        if(e.target.id === 'home'){
            addHomePage();
        } else if(e.target.id === 'menu'){
            addMenuPage();
        }else{
            addAboutPage();
        }
    })
})
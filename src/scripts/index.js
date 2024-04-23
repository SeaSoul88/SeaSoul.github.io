const { Mouse } = require("puppeteer");

const workTitle = document.getElementById('work');
const navigationList = document.querySelector('.navigation__list');

console.log(workTitle);

//navigationList.innerText = "Привет";
navigationList.children[0].innerHTML = "<a href=\"https://google.ru\">Навыки</a>";
//workTitle.style.color = 'red';
//workTitle.style.textAlign = 'center';

function buttonClicked(){
workTitle.style.color = 'red';
workTitle.style.fontSize = '25px';
  }

//  workTitle.onclick = buttonClicked;

workTitle.addEventListener("click", buttonClicked)

//const { Mouse } = require("puppeteer");

//const workTitle = document.getElementById('work');
//const navigationList = document.querySelector('.navigation__list');

//console.log(workTitle);

//navigationList.innerText = "Привет";
//navigationList.children[0].innerHTML = "<a href=\"https://google.ru\">Навыки</a>";
//workTitle.style.color = 'red';
//workTitle.style.textAlign = 'center';

//function buttonClicked(){
//workTitle.style.color = 'red';
//workTitle.style.fontSize = '25px';
 // }

//  workTitle.onclick = buttonClicked;

//workTitle.addEventListener("click", buttonClicked)

//const formText = document.getElementById('exampleFormControlInput1');
//formText.style.color = 'white'

const form = document.getElementById('contacts-forms');
const click = document.getElementById('push')

form.addEventListener("submit", (event) => {
  event.preventDefault();//отменить стандартное поведение браузера

  let data = Array.from(event.target.elements).map((element) => {
    return {
      name: element.name,
      value: element.value
    }
  })
  data  = data.filter((d) => {
    if (d.name) {
      return true;
    } else {
      return  false;
    }
});
  const formData = new FormData();

  data.forEach(d  => {
    formData.append(d.name, d.value)
  })
  console.log(formData)
})

//click.addEventListener("click", () => {
//fetch('https://jsonplaceholder.typicode.com/todos/1')
//	.then(response => response.json())
//	.then(json => console.log(json))
//})

click.addEventListener("click", async() => {
try {
	const response = await fetch('https://jsonplaceholder.typicode.com/todqs/1')
	console.log(response)
} catch (err) {
	alert('Ошибка! Не удалось загрузить данные')
}
})

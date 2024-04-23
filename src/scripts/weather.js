const API_KEY = "c1475891f5b5130d88ed24e4b9b37baa"

const input = document.getElementById('find-input');
const findBtn = document.getElementById('find-btn');

findBtn.addEventListener("click", ()  =>  {
  const city = input.value;

  console.log(city)

  fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}' + API_KEY)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
    })
});

$("#create-btn").on("click", () => {

})

//selector
//$("#create-btn")

//event
//$("#create-btn").on("click")
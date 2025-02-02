
const apiKey = "";
const apiUrl= "";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=&{apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = 
    
}



checkWeather();
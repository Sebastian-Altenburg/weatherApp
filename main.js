
const selectors = (() => {
    const text = document.querySelector(".text");
    const submit = document.querySelector(".submit");

    const tempDiv = document.querySelector(".temp");
    const windDiv  = document.querySelector(".windSpeed");
    const humDiv  = document.querySelector(".humidity ");
    const feelsDiv  = document.querySelector(".feels_like");
    const location = document.querySelector(".location");

    const apiWeather = "c769a96d267e3bfc3c3ae067454320f9";
  
    return {submit,text, tempDiv, windDiv, humDiv, feelsDiv,apiWeather, location};
})();




////// Weather Stuff ////////////////
selectors.submit.addEventListener("click", (event)=> {
    event.preventDefault();
    const path =    `https://api.openweathermap.org/data/2.5/weather?q=${selectors.text.value}
                    &units=metric&lang=de&appid=${selectors.apiWeather}`;
    getWeatherData(path);
    
});

const getWeatherData = (path)=> {

    fetch(path, {mode: "cors"})
    .then((response)=>{
        return response.json();
    })      
    .then((json)=> {
        console.log(json);
        displayWeatherData({
            temp: json.main.temp, 
            windSpeed: json.wind.speed,
            humidity: json.main.humidity,
            feels_like: json.main.feels_like,
            location: `${json.name}, ${json.sys.country}`
        });
    })
}

const displayWeatherData = (object)=> {
    selectors.tempDiv.innerHTML = object.temp;
    selectors.feelsDiv.innerHTML = object.feels_like;
    selectors.humDiv.innerHTML = object.humidity;
    selectors.windDiv.innerHTML = object.windSpeed;
    selectors.location.innerHTML = object.location;
}

const initialLoad = (() => {
    const path =    `https://api.openweathermap.org/data/2.5/weather?q=Lingen
                    &units=metric&lang=de&appid=${selectors.apiWeather}`;
    getWeatherData(path);
})();

        

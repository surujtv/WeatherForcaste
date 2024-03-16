const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "24a8767959mshd88668ad7682881p1a59a2jsn95de2d53f639",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

function weatherFun(city) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  cityName.innerHTML = city;
  const response = fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      temp.innerHTML = data.temp + " &deg;C";
      humidity.innerHTML = data.humidity + " %";
      min_temp.innerHTML = data.min_temp + " &deg;C";
      max_temp.innerHTML = data.max_temp + " &deg;C";
      wind_speed.innerHTML = data.wind_speed + " km/h";
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
    }).catch((err)=>{
      console.log("Error!", err); 
    })  
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(getCity.value);
  weatherFun(getCity.value);
});
weatherFun("Delhi");

function indore() {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Indore`;
  const response = fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      indoreTemp.innerHTML = data.temp + "&deg;C";
      indoreHumidity.innerHTML = data.humidity + "%";
      indoreMin_temp.innerHTML = data.min_temp + "&deg;C";
      indoreMax_temp.innerHTML = data.max_temp + "&deg;C";
      indoreWind_speed.innerHTML = data.wind_speed + " km/h";
      indoreSunrise.innerHTML = data.sunrise;
      indoreSunset.innerHTML = data.sunset;
    }).catch((err)=>{
      console.log("Error!", err);
    })
  }

function ujjain () {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ujjain`;
  const response = fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      ujjainTemp.innerHTML = data.temp + "&deg;C";
      ujjainHumidity.innerHTML = data.humidity + "%";
      ujjainMin_temp.innerHTML = data.min_temp + "&deg;C";
      ujjainMax_temp.innerHTML = data.max_temp + "&deg;C";
      ujjainWind_speed.innerHTML = data.wind_speed + " km/h";
      ujjainSunrise.innerHTML = data.sunrise;
      ujjainSunset.innerHTML = data.sunset;
    }).catch((err)=>{
      console.log("Error!", err);
    })
  }

function dewas () {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dewas`;
  const response = fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dewasTemp.innerHTML = data.temp + "&deg;C";
      dewasHumidity.innerHTML = data.humidity + "%";
      dewasMin_temp.innerHTML = data.min_temp + "&deg;C";
      dewasMax_temp.innerHTML = data.max_temp + "&deg;C";
      dewasWind_speed.innerHTML = data.wind_speed + " km/h";
      dewasSunrise.innerHTML = data.sunrise;
      dewasSunset.innerHTML = data.sunset;
    }).catch((err)=>{
      console.log("Error!", err); 
    })
  }

  indore()
  ujjain()
  dewas()

  lightDarkMode.addEventListener('click', function(event) {
    // console.log(event.target.id)
    if(event.target.id === 'darkMode'){
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }else{
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  })
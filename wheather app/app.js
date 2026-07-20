const apikey = "3b62289fd748b9964121e0d638117faf";
const url = "https://api.openweathermap.org/data/2.5/weather";

async function checkWeather(city = "Bangalore") {
   const response = await fetch(
      `${url}?units=metric&q=${encodeURIComponent(city)}&appid=${apikey}`
   );
   const data = await response.json();

   if (!response.ok) {
      console.error(`API error ${response.status}: ${data.message || "Unknown error"}`);
      return;
   }

   console.log(data);
}

checkWeather();
const apikey = "3b62289fd748b9964121e0d638117faf"
const url = "https://api.openweathermap.org/data/2.5/weather&units=metric&q=";

async function checkWeather(){
   const response = await fetch(url + `&appid=${apikey}`);
   var data = await response.json();

   console.log(data)
}


checkWeather();
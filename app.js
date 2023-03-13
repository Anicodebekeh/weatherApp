const searchInput = document.querySelector('input')
const button = document.querySelector("button")
const apikey = "7fea722427d1ad8675b97b275b781170"
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?"
const temp = document.querySelector(".temp")
const city = document.querySelector(".city")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const weatherIcon = document.querySelector(".weather-icon")
const error = document.querySelector('.error')
const weather=document.querySelector('.weather')


const fetchApi = async ()=>{
    let cityName= searchInput.value
    // console.log(cityName)
    let response = await fetch(apiUrl+`q=${cityName}`+'&appid='+`${apikey}`+'&units=metric')
   
    if (response.status =='404'){
        error.style.visibility = "visible"
        weather.style.display="none"
    }else{
        const data = await response.json()
        // console.log( data.weather)  
        temp.innerHTML=Math.round(data.main.temp)+'°C'
        humidity.innerHTML=data.main.humidity+'%'
        city.innerHTML=data.name
        wind.innerHTML=data.wind.speed
    
        if (data.weather[0].main === 'Rain'){
            weatherIcon.src ='images/rainy-day.png'
        }
        else if(data.weather[0].main === 'Clouds'){
            weatherIcon.src ='images/cloudy.png'
        } 
        else if(data.weather[0].main === 'Storm'){
            weatherIcon.src ='images/storm.png'
        } 
         else if(data.weather[0].main === 'Sun'){
            weatherIcon.src ='images/sun.png'
        } else if(data.weather[0].main === 'Snow'){
            weatherIcon.src ='images/snow.png'
        }
        weather.style.display="block"
        searchInput.value = ''
    }

}
    


button.addEventListener("click", function () {
    fetchApi()
})

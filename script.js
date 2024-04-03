const apikey="b5b3fcbff5ce9eedf9685106813f903f";
// const api="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

let btn=document.querySelector("button");
let inp=document.querySelector("input");
let icon=document.querySelector(".icon");
let weather=document.querySelector(".weather");
let temp=document.querySelector(".temperature");
let desc=document.querySelector(".description");

btn.addEventListener("click",async function(){

    let cityname=inp.value
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
    let res=await fetch(api);
    let data=await res.json();
    console.log(data)
    const iconCode=data.weather[0].icon
    icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${iconCode}.png">`;
    
    weather.innerHTML=`${data.name},${data.sys.country}`;

    let cel=Math.ceil((data.main.temp-273.15).toFixed(2));
    temp.innerHTML=`${cel}°C`;

    desc.innerHTML=`${data.weather[0].description}`
})
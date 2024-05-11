const temp = document.getElementById("temperature").innerText;
const tempUnit = document.getElementById("temperature-unit").innerText;
const wind = document.getElementById("wind").innerText;
const windUnit = document.getElementById("wind-unit").innerText;

const windChillElement = document.getElementById("wind-chill");

let windChill=0;

if(temp<=50 && tempUnit == "°F"&& wind>3 && windUnit == "mph"){
    windChill= calculateWindChill(temp,wind);

}else if(temp<=10 && tempUnit == "°C"&& wind>4.8 && windUnit == "km/h"){
    const fahrenheit=converToFahrenheit(temp);
    windChill=calculateWindChill(fahrenheit,wind);
}
if(windChill==0){
    windChillElement.innerText="NA";
    
}else{
    windChillElement.innerText=windChill;
}

function calculateWindChill(temperature,windchill){

    return Math.round(35.74+0.6125*temperature-35.75*V**0.16+0.4275*temperature*V**0.16);
}

function converToFahrenheit(celcius){
    return(celcius*9/5)+32;
}
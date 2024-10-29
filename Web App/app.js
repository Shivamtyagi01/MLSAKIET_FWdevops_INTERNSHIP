let url = "https://api.weatherapi.com/v1/current.json?key=7cd22e12925e47c580c40115242910&q=";
let conf = {headers : {Accept : "text/plain"}};
let q ="india";
let inp = document.querySelector("#inp");
async function getWeather(a) {
    try{
        let res = await axios.get(url+inp.value);
        // console.log(res.data);
        return res.data;
    }
    catch(e){
        console.log(e);
    }
}

let btn = document.querySelector("#go");
    let main = document.querySelector(".cont");
btn.addEventListener("click", async () => {
     data = await getWeather();
    console.log(data);
    let head = document.querySelector(".head");
    head.innerText = `${data.location.name} : Current Weather`;
    let time = document.createElement("div");
    time.classList = "time";
    time.innerText = data.location.localtime;
    head.append(time);
    let d = document.querySelector(".data");
    let i = data.current.condition.icon;
    document.querySelector("img").src = i;
    let text = document.querySelector(".text");
    text.innerText = data.current.condition.text;
    let other = document.querySelector(".other");
    let p1= document.createElement("p");
    p1.innerText = "Wind Speed :: " + data.current.wind_mph + " mph";
    other.append(p1);
    let p2= document.createElement("p");
    p2.innerText = "Humidity :: " + data.current.humidity;
    other.append(p2);
    let p3= document.createElement("p");
    p3.innerText = "Feels Like :: " + data.current.feelslike_c + " C";
    other.append(p3);
    // let p4= document.createElement("p");
    // p4.innerText = "Humidity :: " + data.current.humidity;
    // other.append(p4);
    let p5= document.createElement("p");
    p5.innerText = "UV :: " + data.current.uv;
    other.append(p5);
    
    main.classList.remove("before");
})
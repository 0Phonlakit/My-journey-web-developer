import express, { response }  from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import https from "https";
import dotenv from "dotenv";

dotenv.config();


const app = express();
const port =  process.env.PORT || 3000;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = process.env.API_KEY;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");

const temperature ="";
const description = "Search for Temperature";
const city = "";
const humidity  = "";
const wind = "";
const image = "";
const notFound = null;

app.get("/", (req, res) => {
    res.render("index.ejs", 
    { temperature : temperature, 
      description : description,
      city : city, 
      humidity  : humidity ,
      wind : wind,
     image : image,
     notFound : null, })
});

app.post("/", async (req, res) => {
    const cityName = req.body.cityName;
    const unit = "metric";
    let url = API_URL + "?q=" + cityName + "&appid=" + API_Key + "&units=" + unit;

    https.get(url, (response) => {
        let data = "";

        response.on("data", (chunk) => {
            data += chunk;
        });

        response.on("end", () => {
            try {
                const weatherData = JSON.parse(data);

                if (weatherData.name === cityName) {
                    const temperatureData = weatherData.main.temp;
                    const temperature = temperatureData;
                    const humidityData = weatherData.main.humidity;
                    const humidity = humidityData;
                    const windData = weatherData.wind.speed;
                    const wind = windData;
                    const weatherDescription = weatherData.weather[0].description;
                    const icon = weatherData.weather[0].main;
                    const image = getWeatherImage(icon);
                    console.log(icon, temperature)

                    res.render("index.ejs", {
                        temperature: temperature,
                        humidity: humidity,
                        wind: wind,
                        description: weatherDescription,
                        image: image,
                        notFound : false,
                    });
                } else {
                    res.render("index.ejs", { notFound: true });
                }
            } catch (error) {
                console.error("Error parsing JSON:", error);
                res.render("index.ejs", { notFound: true });
            }
        });
    });
});


function getWeatherImage(weatherMain) {
    switch (weatherMain) {
        case "Clear" :
            return "/img/clear.png";
        case "Clouds" :
            return "/img/cloud.png";
        case "Mist" :
            return "/img/mist.png";
        case "Rain" :
            return "/img/rain.png";
        case "Snow" :
            return "/img/snow.png";
        default :
            return "";
    }
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
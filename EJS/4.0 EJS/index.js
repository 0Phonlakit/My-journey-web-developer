import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();

    const day = today.getDay();
    // console.log(day);

    let thisDay = "a weekday";
    let advice = "it's time to work hard";

    if (day === 0 || day === 6) {
        thisDay = "the weekend";
        advice = "it's time to have some fun";
    }

    res.render("index.ejs", {
        ThisDay: thisDay,
        Advice: advice,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
  
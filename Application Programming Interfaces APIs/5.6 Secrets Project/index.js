// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    try {
    const output = await axios.get(API_URL);

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

    res.render("index.ejs",
    { secret : output.data.secret,
        user : output.data.username,
       score : output.data.emScore });
    }
    catch (error) {
        res.status(404).send(error.massage);
    }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

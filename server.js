const cors = require("cors");
import express from "express";
import React from "react";
// take our node application and generate html as string
import { renderToString } from "react-dom/server";
import fs from "fs";
import App from "./src/App";


const PORT = 3000;

// read in html that we generated
const html = fs.readFileSync("dist/index.html").toString();

// give me back everything that comes before and after "not rendered" in index.html
const parts = html.split("not rendered");


const app = express();
app.use(cors());

app.get("/api/get-list", (req, res) => {

    const availabilityData = [
        { id: 1, time: "9:00am - 10:00am", name: '', phone_number: '' },
        { id: 2, time: "10:00am - 11:00am", name: '', phone_number: '' },
        { id: 3, time: "11:00am - 12:00am", name: '', phone_number: '' },
        { id: 4, time: "12:00pm - 1:00pm", name: '', phone_number: '' },
        { id: 5, time: "1:00pm - 2:00pm", name: '', phone_number: '' },
        { id: 6, time: "2:00pm - 3:00pm", name: '', phone_number: '' },
        { id: 7, time: "3:00pm - 4:00pm", name: '', phone_number: '' },
        { id: 8, time: "4:00pm - 5:00pm", name: '', phone_number: '' }
    ]
    console.log(availabilityData)
    return res.json(availabilityData);
});

app.use("/dist", express.static("dist"));
app.use((req, res) => {
    const reactMarkup = (
        <App />
    );

    res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
    res.end();
});

console.log(`listening on ${PORT}`);
app.listen(PORT);
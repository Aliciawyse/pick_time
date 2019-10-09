import express from "express";
import React from "react";
// take our node application and generate html as string
import { renderToString } from "react-dom/server";
import fs from "fs";
import App from "./src/App";

const PORT = process.env.PORT || 3000;

// read in html that we generated
const html = fs.readFileSync("dist/index.html").toString();

// give me back everything that comes before and after "not rendered" in index.html
const parts = html.split("not rendered");

const app = express();

app.use("/dist", express.static("dist"));
app.use((req, res) => {
    const reactMarkup = (
        <ServerLocation url={req.url}>
            <App />
        </ServerLocation>
    );

    res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
    res.end();
});

console.log(`listening on ${PORT}`);
app.listen(PORT);
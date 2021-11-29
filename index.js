const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + `/public`));

app.get("/hello", (request, response) => {
    response.render("hello", {
        name: request.query.nameQuery,
    });
});

app.get("/hello:nameParam", (request, response) => {
    response.render("hello", {
        name: request.params.nameParam,
    });
});

/*
app.get("/", (request, response) => {
    response.send("Hello, world");
});
*/

app.listen(port, () => {
    console.log(`Server running on http://localhost${port}`);
});

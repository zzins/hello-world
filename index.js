const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send("Hello, world");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost${port}`);
});

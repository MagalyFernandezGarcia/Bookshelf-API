import express from "express";
const app = express();
import { findAllBooks } from "./controlers/findAllbooks.js";
import { createBooks } from "./controlers/createBooks.js";
import cors from "cors"

app.use(cors())

app.listen(8000, function () {
	console.log("Server is running and listening on port 8000");
});



app.get("/books", async function (request, response) {
    const listOfBooks = await findAllBooks();
    response.header("Content-Type", "application/json");
    response.json(listOfBooks);
});


app.post("/books", function (request, response) {
	createBooks(request.body).then(function () {
		response.header("Content-Type", "application/json");
		response.redirect("./");
	});
});



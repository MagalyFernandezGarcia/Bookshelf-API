
import { bookshelf } from "../dataBase/database.js";
import { bookSchema } from "../schemas/book.js";




 export async function createBooks(body) {

    const newBook = bookSchema({
        title : body.title,
        serie:body.serie,
        volume : body.volume,
        author : body.author,
        summary : body.summary,
        finished: body.finished,
        type : body.type,
        returned: body.returned
    })
	
	try {
		
		const result= await Books.insertOne(newBook);
	} catch (error) {
		console.error(error);
	}
}







bookshelf().catch(err => console.log(err));
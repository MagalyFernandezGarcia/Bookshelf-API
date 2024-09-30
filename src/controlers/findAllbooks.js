 import {Books} from "../schemas/book.js";
 import {bookshelf} from "../dataBase/database.js";
 

 
 export async function findAllBooks() {
    try {
        const books = await Books.find(); 
        return books;
    } catch (err) {
        console.error("Error fetching books1:", err.message);
        return [];
    }
}




bookshelf().catch(err => console.log(err));
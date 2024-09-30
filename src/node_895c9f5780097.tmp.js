const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");
const mongoose = require('mongoose')


const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);

// testMongoose().catch(err=>console.log(err))


async function testMongoose() {
    await mongoose.connect("mongodb://127.0.0.1:27017/")
    const kittySchema = new mongoose.Schema({name:String})
    const Kitten = mongoose.model("Kitten", kittySchema)
    kittySchema.add({sound : String})
    const silence = new Kitten({name:"Silence", sound:"miou"})
    await silence.save()
    const kittens = await Kitten.find()
    

}


bookshelf().catch(err=>console.log(err))

async function bookshelf() {
    await mongoose.connect("mongodb://127.0.0.1:27017/")
    const bookSchema = new mongoose.Schema({
        title : String,
        serie : String,
        volume : Number,
        author : String,
        summary : String,
        finished : Boolean,
        opinion : Number,
        type : String,
        returned : Boolean,
        lent : Boolean,
        borrower : String

    })

    const Books = mongoose.model("Books", bookSchema)

    createBook(Books)

    
    
    


}


async function createBook(booksSchema){
    const newBook = booksSchema({
        title : "L'oeil Maudit du dragon",
        serie:"L'Épopée des dragons de cristal",
        volume : 1,
        author : "Eoghan R. Cunningham",
        summary : "Quand le dernier dragon mourut il y a plus de mille ans, la magie disparut avec eux. Seule et impuissante, l'humanité fut laissée à ramasser les morceaux de leur monde autrefois magnifique.Mais voilà que la magie revient entre les mains d'un jeune esclave.Depuis que des marchands d'esclaves m'ont capturé quand j'étais petit garçon, j'ai travaillé dans les mines de sel. Mon destin se résume à un labeur acharné et une mort précoce. Il n'y a pas d'échappatoire.Jusqu'à ce que je trouve le dragon.Dans une caverne naturelle, j'ai découvert un ancien squelette de dragon entièrement fait de cristal. Des murmures dans mon esprit m'ont dit de voler le joyau de son œil. Et je l'ai fait, pensant pouvoir l'utiliser pour acheter ma liberté.Cependant, au moment où il me touche, il fusionne avec ma peau, et mon monde entier est bouleversé. La magie n'est pas censée exister, mais du feu jaillit de mes mains chaque fois que quelqu'un essaie de me faire du mal.Enfin échappé des mines, je forme une alliance précaire lorsque je rencontre un autre voyageur en difficulté. Nous sommes tous deux déterminés à atteindre le pays voisin, bien que nous gardions nos raisons secrètes. Une fois là-bas, je serai libre. Alors je pourrai me débarrasser de ce joyau maudit une fois pour toutes.Cependant, un mystérieux sorcier nous talonne alors que nous atteignons le dernier col de montagne. Avec un guide engagé, nous essayons de passer sans être détectés. La magie de l'œil du dragon nous a sauvés plus d'une fois, mais cette fois, elle pourrait bien causer notre perte.",
        finished:false,
        type : "Kindle",
        returned:false
    })

    await newBook.save()
}



app.listen(8000, function () {
	console.log("Server is running and listening on port 8000");
});


app.get("/books", function (request, response) {
	findAllBooks().then(function (listOfBooks) {
		response.header("Content-Type", "application/csv");
		response.send(listOfBooks);
	});
});


async function findAllBooks() {
    console.log("test");
    
	await mongoClient.connect();
	const mongooseDataBase = mongoClient.db("test");
	const booksCollection = mongooseDataBase.collection("books");
	const books = await booksCollection.find().toArray();
	return books;
}
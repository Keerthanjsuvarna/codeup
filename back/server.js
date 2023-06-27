const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://keerthanjsuvarna:7760362356@cluster0.epts5bv.mongodb.net/libs?retryWrites=true&w=majority', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Book model schema
const bookSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  amount: { type: Number, required: true },
});
const Book = mongoose.model('Book', bookSchema);


app.get('/api/books', (req,res)=>{
  Book.find()
  .then(books=>{
      res.json(books);
  })
  .catch(err =>{
      res.status(500).json({error:"Error detching products"})
  })
})


// Add a book
app.post('/api/books',(req, res)=>{
  console.log(req)
  const newBook = new Book(req.body);
  newBook.save()
  .then(book=>{
      res.json(book);
  })
  .catch(err=>{
      res.status(500).json({err:"Error creating product"})
  });
});

app.delete('/api/books/:id',(req,res)=>{
  const reqId = req.params.id;
  Book.findOneAndDelete({id:reqId})
  .then(()=>{
      res.json({message:'book deleted'});
  })
  .catch(err => {
      res.status(500).json({err: 'Error deleting'})
  })
})

const port = 5991;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

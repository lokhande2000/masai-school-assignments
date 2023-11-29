// Author constructor
function Author(name, birthYear, nationality) {
  this.name = name;
  this.birthYear = birthYear;
  this.nationality = nationality;
}

// Book constructor
function Book(title, author, genre, price) {
  this.title = title;
  this.author = author; // Author object
  this.genre = genre;
  this.price = price;
}

// Implementing method in the Book prototype
Book.prototype.getBookInfo = function () {
  console.log(`Title: ${this.title}`);
  console.log(`Author: ${this.author.name}`);
  console.log(`Genre: ${this.genre}`);
  console.log(`Price: $${this.price}`);
};

// Creating instances of Author
const author1 = new Author("Ruskin Bond", 1934, "Indian");
const author2 = new Author("Arundhati Roy", 1961, "Indian");

// Creating instances of Book
const book1 = new Book("The Blue Umbrella", author1, "Fiction", 15);
const book2 = new Book("The God of Small Things", author2, "Fiction", 18);

// Displaying book details
book1.getBookInfo();
console.log("")
book2.getBookInfo();


// Author constructor function
function Author(name, birthYear, nationality){
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

let author1 = new Author("James Clear",1988, "USA");
console.log(author1)

// Books constructor function
function Book( title, author1, genre, price){
    this.title = title;
    this.author1 = author1;
    this.genre = genre;
    this.price = price;
};

let book = new Book("Atomic Habits",author1, "Random House Business Books", 150);
console.log(book.author1.birthYear)

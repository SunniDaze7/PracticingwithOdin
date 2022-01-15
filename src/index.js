
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
       return ("This book is called " + title + ", by " + author + ". It has " + pages + " pages. " + read)
    }
}

const Hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "Have not read this.")
console.log(Hobbit.info())
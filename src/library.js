

//querySelectors
const bookCards = document.getElementById("book-cards")
//const card = document.getElementById("card")
const addBook = document.getElementById("new-book")
const removeBook = document.getElementById("remove-book")
const readBook = document.getElementById("read-book")

let userLibrary = [];

//to construct a new book
 function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
       return ("Title: " + title + " By: " + author + " Pages: " + pages + " " + read)
    }
}


//get book info and add new book information to userLibrary array
 function addTolibrary(){
    const newBook1 = new Book(prompt("Enter the book's title."), prompt("Who is this book's author?"), prompt("How many pages is this book?"), "I have read this!")
    userLibrary.push(newBook1)
    console.log(userLibrary)
} 
addBook.addEventListener("click", addTolibrary)


//add book card to interface
function displayCard(){
        const bookCard = document.createElement('div')
        bookCard.setAttribute("class", "card")
        bookCards.appendChild(bookCard)
    }


displayCard()
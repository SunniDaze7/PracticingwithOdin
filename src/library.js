

//querySelectors
const bookCards = document.getElementById("book-cards")
const card = document.getElementById("card")
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
}


//get book info and add new book information to userLibrary array
 function addTolibrary(){
    const newBook = new Book(prompt("Enter the book's title."), prompt("Who is this book's author?"), prompt("How many pages is this book?"), "I have read this!")
    userLibrary.push(newBook)
    console.log(userLibrary)
    displayCard()
    }
 
 
    addBook.addEventListener("click", addTolibrary)
    
let cardNumber = 0;

//add book card and info to interface
 function displayCard(){
        const bookCard = document.createElement('div')
        bookCard.setAttribute("id", "card")
        bookCards.appendChild(bookCard)
        bookCard.innerHTML = "Title: " + userLibrary[cardNumber].title
        + "  Author: " + userLibrary[cardNumber].author
        cardNumber++
} 








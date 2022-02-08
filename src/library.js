

//querySelectors
const bookCards = document.getElementById("book-cards")
const card = document.getElementById("card")
const comment = document.getElementById("comment")
const addBook = document.getElementById("new-book")
const removeBook = document.getElementById("remove-book")
const readBook = document.getElementById("read-book")

let userLibrary = [];

//to construct a new book
 function Book(title, author, words){
    this.title = title
    this.author = author
    this.words = words
}


//get book info and add new book information to userLibrary array
 function addTolibrary(){
    const newBook = new Book(prompt("Enter the book's title."), prompt("Who is this book's author?"), prompt("Would you like to add the number of words? If so enter digits here."))
    userLibrary.push(newBook)
    console.log(userLibrary)
    displayCard()
    }
 
    //addBook.addEventListener("click", addTolibrary)
    
let cardNumber = 0;

//add book card and info to interface
 function displayCard(){
     //book log
        const bookCard = document.createElement('div')
        bookCard.setAttribute("id", "card")
    //comment section for book
        const bookComment = document.createElement('div')
        bookComment.setAttribute("id", "comment")

        bookCards.appendChild(bookCard)
        bookCards.appendChild(bookComment)

           //buttons
           const removeButton = document.createElement("button")
           removeBook.setAttribute("id", "remove-book"[cardNumber])
           removeBook.innerHTML = "Remove Book"
           const readButton = document.createElement("button")
           readBook.setAttribute("id", "read-book"[cardNumber])
           readBook.innerHTML = "Read Book"

    //add info to book card
        bookCard.innerHTML = "Title: " + userLibrary[cardNumber].title +
        "<br/>Author: " + userLibrary[cardNumber].author + "<br/>Words: " + userLibrary[cardNumber].words 
        bookCard.appendChild(removeBook)
    //add info to book comment
        bookComment.innerHTML  = "Comment: " + "<br/>Date Finished: "
        bookComment.appendChild(readBook)

        cardNumber++
} 

//remove a book from interface
 function removeCard(){
    const bookCard = document.getElementById("card")
    const bookComment = document.getElementById("comment")
    bookCard.remove()
    bookComment.remove()
}

addBook.addEventListener("click", addTolibrary)
removeBook.addEventListener("click", removeCard)








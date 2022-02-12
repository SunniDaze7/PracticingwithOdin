

//querySelectors
const bookCards = document.getElementById("book-cards")
const card = document.getElementById("card")
const comment = document.getElementById("comment")
const addBook = document.getElementById("new-book")

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
 

    
let cardNumber = 0;

//add book card and info to interface
 function displayCard(){
     //book log
        const bookCard = document.createElement('div')
        bookCard.setAttribute("id", "card")
    //comment section for book
        const bookComment = document.createElement('div')
        bookComment.setAttribute("id", "comment")
        const commentSection = document.createElement('div')

        bookCards.appendChild(bookCard)
        bookCards.appendChild(bookComment)
        bookComment.appendChild(commentSection)

           //buttons
           const removeButton = document.createElement("button")
           removeButton.setAttribute("id", "remove-button")
           removeButton.innerHTML = "Remove Book"

           const readButton = document.createElement("button")
           readButton.setAttribute("id", "read-button")
           readButton.innerHTML = "I have not read this."

    //add info to book card
        bookCard.innerHTML = "Title: " + userLibrary[cardNumber].title +
        "<br/>Author: " + userLibrary[cardNumber].author + "<br/>Words: " + userLibrary[cardNumber].words 
        bookCard.appendChild(removeButton)

    //add info to book comment
        commentSection.innerHTML  = "Comment: "
        const dateSection = document.createElement('div')
        dateSection.setAttribute("id", "date-section")
        dateSection.innerHTML = "Date Finshed: unfinished"
        bookComment.appendChild(readButton)
        bookComment.appendChild(dateSection)

    //button functionality
        removeButton.addEventListener("click", removeCard)
        readButton.addEventListener("click", readBook)

        cardNumber++
} 


//remove a book from interface
 function removeCard(){
    const bookCard = document.getElementById("card")
    const bookComment = document.getElementById("comment")
    bookCard.remove()
    bookComment.remove()
}

//add read status and date for book
 function readBook(){
    const dateSection = document.getElementById("date-section")
    const bookComment = document.getElementById("comment")
    const readButton = document.getElementById("read-button")
    //const finishDate = prompt("Great job finishing that book! What date did you finish it?")


    dateSection.innerHTML = "Date Finished: " + prompt("Great job finishing that book! What date did you finish it?")
    bookComment.appendChild(dateSection)
    readButton.innerHTML = "I read this!"
    readButton.addEventListener("click", notReadBook)
    dateSection.setAttribute("id", "no-date-section")
    readButton.setAttribute("id", "not-read-button")
 }

 //add not read status and remove date
  function notReadBook(){
    const readButton = document.getElementById("not-read-button")
    const dateSection = document.getElementById("no-date-section")

    readButton.innerHTML = "I have not read this."
    dateSection.innerHTML = "Date Finshed: unfinished"
    readButton.addEventListener("click", readBook)
    readButton.setAttribute("id", "read-button")
    dateSection.setAttribute("id", "date-section")
  } 




addBook.addEventListener("click", addTolibrary)










//querySelectors
const bookCards = document.getElementById("book-cards")
const card = document.getElementById("card")
const comment = document.getElementById("comment")
const addBook = document.getElementById("new-book")
const bookCardSection = document.getElementById("book-card-section")

let userLibrary = [];

//to construct a new book
 function Book(title, author, words, date){
    this.title = title
    this.author = author
    this.words = words
    this.date = date
}

let cardNumber = 0;

//get book info and add new book information to userLibrary array
 function addTolibrary(){
    const newBook = new Book(prompt("Enter the book's title."), prompt("Who is this book's author?"), prompt("Would you like to add the number of words? If so enter digits here."), "unfinished")
    userLibrary.push(newBook)
    console.log(userLibrary)
    displayCard()
    }
 
    

//add book card and info to interface
 function displayCard(){
     //book log
        const bookCardSection = document.createElement("div")
        bookCardSection.setAttribute("id", "book-card-section")
        bookCardSection.setAttribute("data-number", cardNumber)
        bookCardSection.style.display = "flex"
        bookCardSection.style.flexDirection = "row"
        const bookCard = document.createElement('div')
        bookCard.setAttribute("id", "card")

    //comment section for book
        const bookComment = document.createElement('div')
        bookComment.setAttribute("id", "comment")
        const commentSection = document.createElement('div')

        bookCards.appendChild(bookCardSection)
        bookCardSection.appendChild(bookCard)
        bookCardSection.appendChild(bookComment)

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
        dateSection.innerHTML = "Date Finished: " + userLibrary[cardNumber].date
        bookComment.appendChild(commentSection)
        bookComment.appendChild(readButton)
        bookComment.appendChild(dateSection)


    //remove button functionality
        removeButton.addEventListener("click", function removeCard(){
        bookCardSection = bookCardSection.dataset.number
        bookCardSection.remove()
        })


        readButton.addEventListener("click", readBook)

        cardNumber++
} 


//add/remove read status and date for book
 function readBook(){
    const dateSection = document.getElementById("date-section")
    const bookComment = document.getElementById("comment")
    const readButton = document.getElementById("read-button")

    bookComment.appendChild(dateSection)
    dateSection.innerHTML = "Date Finished: " + prompt("Congratulations finishing that book! What date did you finish it?")
    readButton.innerHTML = "I read this!"
    readButton.addEventListener("click", function notReadBook(){
    readButton.innerHTML = "I have not read this."
    bookComment.appendChild(dateSection)
    dateSection.innerHTML = "Date Finished: unfinished"
    })
 }


addBook.addEventListener("click", addTolibrary)




//add function to toggle back to read this!
//figure out removing or adding info to selected section



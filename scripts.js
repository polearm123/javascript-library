let myLibrary = [];

function Book(title,author,pages,read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;

    this.info = () => {
        
        var infoString = `${title} by ${author}, ${pages}, ${(read==true)?"has been read":"not read yet"}`;
        return infoString;

    }

    
}

function addBookToLibrary(book){

    myLibrary.push(book);

}

function createBookCard(book){ //creates a card with necessary book information appended

    bookInformationContainer = document.createElement("div");
    bookInformationContainer.classList.add("book-container");
    let titleHeading = document.createElement("p");
    titleHeading.textContent = `Title: ${book.title}`;
    

    let authorHeading = document.createElement("p");
    authorHeading.textContent = `Author: ${book.author}`;


    let pagesHeading = document.createElement("p");
    pagesHeading.textContent = `Pages: ${book.pages}`;
    

    let readHeading = document.createElement("p");
    readHeading.textContent = `Read: ${book.read}`;

   
    bookInformationContainer.appendChild(titleHeading);
    bookInformationContainer.appendChild(authorHeading);
    bookInformationContainer.appendChild(pagesHeading);
    bookInformationContainer.appendChild(readHeading);

    return bookInformationContainer;
 
}

function removeBook(event){

    console.log("inside remove book function");

    myLibrary.splice(event.target.id,1);

    displayBooks();
    


}

function newBookButtonForm(event){//creates a form that adds a book to the list

    

    let formContainer = document.querySelector(".form-container");
    let form = document.createElement("form");

    let titleInput = document.createElement("input");
    titleInput.id = "book-title";
    titleInput.placeholder = "Title: ";

    let authorInput = document.createElement("input");
    authorInput.id = "book-author";
    authorInput.placeholder = "Author:";

    let pagesInput = document.createElement("input");
    pagesInput.id = "book-pages";
    pagesInput.placeholder = "No# of pages: "

    let read = document.createElement("input");
    read.id = "book-read";
    read.placeholder= "have you read this book?";

    let submitBookButton = document.createElement("input");
    submitBookButton.type = "submit";

    form.appendChild(titleInput);
    form.appendChild(authorInput);
    form.appendChild(pagesInput);
    form.appendChild(read);
    form.appendChild(submitBookButton);

    formContainer.appendChild(form);

    submitBookButton.addEventListener("submit",() => {

        var title = document.getElementById("book-title");
        var author = document.getElementById("book-author");
        var pages = document.getElementById("book-pages");
        var read = document.getElementById("book-read");
         
        var userBook = new Book(`${title}`,`${author}`, parseInt(pages), `${read}`);
        myLibrary.push(userBook);

    })

  

    

}

function displayBooks(){ //iterates through all books, creates a card to each and appends to the library container

    let libraryContainer = document.querySelector(".library-container");
    libraryContainer.innerHTML = "";
    
    let bookInformationContainer;
    let bookCard;

    console.log("inside function");
    for(let i=0;i<myLibrary.length;i++){

      
        bookCard = createBookCard(myLibrary[i]);
       

        let removeButton = document.createElement("button");
        removeButton.id = `${i}`;
        removeButton.textContent = "remove";
    
        removeButton.addEventListener("click", removeBook);
        bookCard.appendChild(removeButton);

        libraryContainer.appendChild(bookCard);
                
    }

}

let book1 = new Book("Harry Potter: Goblet of Fire","J.K Rowling",100,true);
let book2 = new Book("Dune","Harry Styles",699,false);
let book3 = new Book("Revenge of the Man","Vengeful man",999,true);

myLibrary.push(book1,book2,book3);





let newBookButton = document.querySelector(".new-book-button");
newBookButton.addEventListener("click",newBookButtonForm);

displayBooks();


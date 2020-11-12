
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

function removeBook(event){//removes a book of a specific
    
    let currentBooks = getCurrentBooks();
    currentBooks.splice(event.target.id,1);
    localStorage.setItem("library",JSON.stringify(currentBooks));

    displayBooks();
    
}

function submitNewBook(){ //adds a new book to the local storage after retrieving user input

    var title = document.getElementById("book-title").value;
    var author = document.getElementById("book-author").value;
    var pages = document.getElementById("book-pages").value;
    var read = document.getElementById("book-read").value;
    var userBook = new Book(title,author, parseInt(pages), read);
    
    let currentBooks = getCurrentBooks();
    currentBooks.push(userBook);
    setCurrentBooks(currentBooks);
    
    document.querySelector(".add-new-book").innerHTML = ""; //removes the form from user sight
    displayBooks();
    


}



function newBookButtonForm(event){//creates a form that adds a book to the list


    let formContainer = document.querySelector(".form-container");
    let form = document.createElement("div");
    form.classList.add("add-new-book");

   
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

    let submitBookButton = document.createElement("button");
    submitBookButton.id = "add-book";
    submitBookButton.textContent = "Add Book";

    form.appendChild(titleInput);
    form.appendChild(authorInput);
    form.appendChild(pagesInput);
    form.appendChild(read);
    form.appendChild(submitBookButton);

    formContainer.appendChild(form);

    submitBookButton.addEventListener("click",submitNewBook);

    
}

function getCurrentBooks(){

    return JSON.parse(localStorage.getItem("library"));

}



function setCurrentBooks(changedBookArray){
    
    localStorage.setItem("library", JSON.stringify(changedBookArray));


}

function readBook(e){

    let bookToToggleRead = document.getElementById(e.target.id).id.toString();
    let indexToToggleRead  = bookToToggleRead.slice(4,);

    currentBooks = getCurrentBooks();

    if(currentBooks[indexToToggleRead].read == true){

        currentBooks[indexToToggleRead].read = false;
        console.log(currentBooks[indexToToggleRead].read)

    }else{

        currentBooks[indexToToggleRead].read = true;

    }

    setCurrentBooks(currentBooks);

    displayBooks();

}

function displayBooks(){ //iterates through all books, creates a card to each and appends to the library container

    let libraryContainer = document.querySelector(".library-container");
    libraryContainer.innerHTML = "";
    let currentBooks = getCurrentBooks();
    
    let bookInformationContainer;
    let bookCard;

    for(let i=0;i<currentBooks.length;i++){

      
        bookCard = createBookCard(currentBooks[i]);

        let removeButton = document.createElement("button");
        removeButton.id = `remove${i}`;
        removeButton.textContent = "remove";

        let readButton = document.createElement("button");
        readButton.id = `read${i}`;
        readButton.textContent = "read";
    
        removeButton.addEventListener("click", removeBook);
        readButton.addEventListener("click", readBook);

        bookCard.appendChild(removeButton);
        bookCard.appendChild(readButton);

        libraryContainer.appendChild(bookCard);
                
    }

}


if(!(getCurrentBooks())){ //initial population if the library hasn't been set yet

    
    let book1 = new Book("Harry Potter: Goblet of Fire","J.K Rowling",100,true);
    let book2 = new Book("Dune","Harry Styles",699,false);
    let book3 = new Book("Revenge of the Man","Vengeful man",999,true);

    var libraryArray = [book1,book2,book3];

    localStorage.setItem("library", JSON.stringify(libraryArray));

}



let newBookButton = document.querySelector(".new-book-button");
newBookButton.addEventListener("click",newBookButtonForm);

displayBooks();


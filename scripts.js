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

function displayBooks(){

    let libraryContainer = document.querySelector(".library-container");
    let bookInformationContainer;


    for(let i=0;i<myLibrary.length;i++){
        bookInformationContainer = document.createElement("div");
        bookInformationContainer.classList.add("book-container");

        let titleHeading = document.createElement("h3");
        titleHeading.textContent = "Title";
        let titleSubheading = document.createElement("p");
        titleSubheading.textContent = `${myLibrary[i].title}`;
        titleHeading.appendChild(titleSubheading);

        let authorHeading = document.createElement("h3");
        authorHeading.textContent = "Author";
        let authorSubheading = document.createElement("p");
        authorSubheading.textContent = `${myLibrary[i].author}`;
        authorHeading.appendChild(titleSubheading);

        let pagesHeading = document.createElement("h3");
        pagesHeading.textContent = "Pages";
        let pagesSubheading = document.createElement("p");
        pagesSubheading.textContent = `${myLibrary[i].pages}`;
        pagesHeading.appendChild(titleSubheading);

        let readHeading = document.createElement("h3");
        readHeading.textContent = "Pages";
        let readSubheading = document.createElement("p");
        readSubheading.textContent = `${myLibrary[i].read}`;
        readHeading.appendChild(titleSubheading);

        bookInformationContainer.appendChild(titleHeading);
        bookInformationContainer.appendChild(authorHeading);
        bookInformationContainer.appendChild(pagesHeading);
        bookInformationContainer.appendChild(readHeading);
        
        
        
    }



}


displayBooks();
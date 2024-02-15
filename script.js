const bookContainerEl = document.querySelector("#book-container");

function getBooks() {
  books.forEach((book) => {
    let card = document.createElement("div");
    console.log(book);
    card.innerHTML = `
    <img>
    <p>Titel: ${book.titel}</p>
    <p>Författare: ${book.forfattare}</p>
    
    `;
    bookContainerEl.append(card);
  });
}
getBooks();

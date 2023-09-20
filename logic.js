function add() {
    bookname = bname.value
    author = aid.value
    coverimg = cover.value

    if (bookname in localStorage) {
        alert("book already present")
    }
    else {
        book = { bookname, author, coverimg }
        localStorage.setItem(bookname, JSON.stringify(book))
        alert("book added successfully")
        window.location = 'index.html'
    }
}

function booksearch() {
    book_name = bn.value
    if (book_name in localStorage) {
        bookdetails = JSON.parse(localStorage.getItem(book_name))

        result.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${bookdetails.coverimg}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${bookdetails.bookname}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${bookdetails.author}</li>
        </ul>
        
      </div>`
    }
    else {
        result.innerHTML = `<h1 class="text-danger">
        book is not found
        </h1>`
    }
}
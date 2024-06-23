const filterButton = document.getElementById('filterButton');
const filterOptions = document.getElementById('filterOptions');

document.getElementById("filterButton").addEventListener("click", function() {
    // Add your search functionality here
    alert("Search button clicked!");
});

document.addEventListener("DOMContentLoaded", function() {
    const books = ["kara kara", "helo helo", "truysis", "kiloksd", "kjujd lokos", "poshgrgt"];
    const bookList = document.getElementById("book-list");

    books.forEach(book => {
        const li = document.createElement("li");
        li.className = 'book-block';
        li.textContent = book;
        li.addEventListener('click', () => {
            alert(`You clicked on ${book}`);
            // Perform other actions here, such as redirecting to a book detail page
        });
        bookList.appendChild(li);
    });
});

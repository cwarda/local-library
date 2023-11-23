function findAuthorById(authors, id) {
  const found = authors.find((author) => author.id === id)
  if (found) return found 
} // passed tests

function findBookById(books, id) {
  const found = books.find((book) => book.id === id)
  if (found) return found 
} // passed tests

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((book) => book.borrows[0].returned === false)
  const returned =  books.filter((book) => book.borrows[0].returned === true)
  return [checkedOut, returned]
} // passed tests

// declare function that takes in two perameters
// set empty array variable
// loop through books checking for borrows
// if returned push 
function getBorrowersForBook(book, accounts) {
  const borrowersMap = book.borrows.map((borrow) => {
    const account = accounts.find(account => account.id === borrow.id) 
    return {
      ...account,
      returned: borrow.returned
    }
  })
  return borrowersMap.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
    if (found) return found; 
}

function sortAccountsByLastName(accounts) {
  let alphabetized = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return alphabetized; 
}

function getTotalNumberOfBorrows(account, books) {
  let countedBooks = books.reduce((countState, book) => {
    let count = book.borrows.reduce((borrowState, borrow) => {
     if (borrow.id === account.id) {
       return borrowState += 1
     }
     return borrowState
    }, 0)
 
    return countState += count
  }, 0)
 
   return countedBooks
 }

//reduce 

//It returns the number of times the account's ID appears in any book's `borrows` array

function getBooksPossessedByAccount(account, books, authors) {
  let mappedBooks = books.map(book => {
    const author = authors.find(author => author.id === book.authorId)
    return {
      ...book,
      author
    }
  })
  return mappedBooks.filter((book) => book.borrows.some(borrow => borrow.id === account.id && borrow.returned === false))
}

//if books.id.returned === true result.push[books]


//It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.
//if book is checked out return books and author info 
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

//hello world
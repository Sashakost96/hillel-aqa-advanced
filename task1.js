import { Book } from './book.js';
import { Ebook } from './eBook.js';

const ukrBook = new Book('Kobzar', 'Taras Shevchecnko', 1911);
const engBoog = new Book('Twilight', 'Stephenie Meyer', 2002);
const paperBook = new Book('Alphabet', 'Ivan Fedorov', 1570);
const eUkrBook1 = new Ebook('JavaScript for kids', 'Morgan Nick', 2014, '.EPUB');
const arrayBooks = [ukrBook, engBoog, eUkrBook1];
const oldestBook = Book.findOldestBook(arrayBooks);
const digitalBook = Ebook.gettingBook(paperBook, 'PDF');

ukrBook.printBookInfo();
engBoog.printBookInfo();
eUkrBook1.printBookInfo();

console.log(`\nThe oldest book is ${oldestBook.name} and the publication year is ${oldestBook.publicationYear}`);
console.log(digitalBook);
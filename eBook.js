import { Book } from './book.js';

const regexFile = /^.+\.(epub|txt|pdf|docx|doc|csv)$/i;

export class Ebook extends Book {
	constructor(name, author, publicationYear, fileFormat) {
		super(name, author, publicationYear);
		this.fileFormat = fileFormat;
	}
	set fileFormat(value) {
		if (typeof value !== 'string' || (value.length === 0 && regexFile.test(value))) {
			console.error(`Property ${value} must be in specifique format and can't be empty!`);
		} else {
			this._fileFormat = value;
		}
	}

	get fileFormat() {
		return this._fileFormat;
	}
	static gettingBook(book, fileFormat) {
		return new Ebook(book.name, book.author, book.publicationYear, fileFormat);
	}

	printBookInfo() {
		super.printBookInfo();
		console.log(`eBook file type: ${this.fileFormat}`);
	}
}

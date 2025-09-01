const regexAuthor = /^[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ']+(?:[-\s][A-ZА-ЯІЇЄҐ][a-zа-яіїєґ']+)*$/;

export class Book {
	constructor(name, author, publicationYear) {
		this.name = name;
		this.author = author;
		this.publicationYear = publicationYear;
	}

	set name(value) {
		if (typeof value !== 'string' || value.length === 0) {
			console.error(`Property ${value} must be string and can't!`);
		} else {
			this._name = value;
		}
	}
	set author(value) {
		if (typeof value !== 'string' || (value.length === 0 && regexAuthor.test(value))) {
			console.error(`Property ${value} must not be empty or include numbers!`);
		} else {
			this._author = value;
		}
	}

	set publicationYear(value) {
		if (typeof value !== 'number' || value.length === 0) {
			console.error(`Property ${value} must be number and can't be emty!`);
		} else {
			this._publicationYear = value;
		}
	}

	get name() {
		return this._name;
	}
	get author() {
		return this._author;
	}
	get publicationYear() {
		return this._publicationYear;
	}

	static findOldestBook(array) {
		let oldestBook = array[0];
		array.forEach((element) => {
			if (element.publicationYear < oldestBook.publicationYear) {
				oldestBook = element;
			}
		});
		return oldestBook;
	}

	printBookInfo() {
		console.log(
			`\nI've read amaizing book called ${this.name}. \nThe author is ${this.author}.\nThis book was published in ${this.publicationYear}`,
		);
	}
}

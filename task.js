class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    set state(num) {
        if (num < 0) {
            this.state = 0;
        } else if (num > 100) {
            this.state = 100;
        } else {
            this._state = num;
        }
   }

    get state() {
       return this._state;
   }

   fix() {
       this.state *= 1.5;
   }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor (name = "Библиотека") {
        this.name = name;
        this.books = [];
    }

    addBook(book){
         if (book.state > 30) {
                this.books.push(book);
         }
    }

    findBookBy(type, value){
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i][type] === value) {
          return this.books[i];
        }
      }

      return null;
    }

    giveBookByName(bookName){
      let book = this.findBookBy("name", bookName);
      if (book !== null){
        return this.books.splice(this.books.indexOf(book), 1)[0];
      }
      return book;
    }
}

class Student {
   constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.subject = {};
   }

   addMark(mark, subjectName) {
     if(!(mark > 0 && mark < 6 && Number.isInteger(mark))){
         console.log("Ошибка, оценка должна быть числом от 1 до 5")
      } else if(this.subject[subjectName] === undefined){
         this.subject[subjectName] = [mark];
      } else{
        this.subject[subjectName].push(mark);
      }
    }

    addMarks(subjectName, ...marks) {
      if (this.subject[subjectName] === undefined){
            this.subject[subjectName] = [...marks]
         } else {
         this.subject[subjectName] = [...this.subject[subjectName], ...marks];
      }
    }

    getAverageBySubject(subjectName) {
      if(this.subject[subjectName] === undefined) {
         return console.log("Предмет не существует");
      }
      const check =  this.subject[subjectName];
      let sum = 0;
      let avg = null;
      for(const item of check){
         sum += item;
      }
      avg = sum / check.length
      return avg;
   }

   getAverage() {
      let avg = 0;
      let allSubject;
      const len = Object.keys(this.subject)
      for(let key in this.subject){
         avg += this.getAverageBySubject(key)
      }
      allSubject = avg / len.length;
      return allSubject;
    }

    exclude(reason) {
        delete this.subject;
        this.excluded = reason;
    }
}
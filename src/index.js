import "./styles.css";

const books = [
  {
      "name": "Genesis",
      "chapters": 50,
      "testament": "old"
      
  },
  {
      "name": "Exodus",
      "chapters": 40,
      "testament": "old"
      
  },
  {
      "name": "Leviticus",
      "chapters": 27,
      "testament": "old"
      
  },
  {
      "name": "Numbers",
      "chapters": 36,
      "testament": "old"
      
  },
  {
      "name": "Deuteronomy",
      "chapters": 34,
      "testament": "old"
      
  },
  {
      "name": "Joshua",
      "chapters": 24,
      "testament": "old"
      
  },
  {
      "name": "Judges",
      "chapters": 21,
      "testament": "old"
      
  },
  {
      "name": "Ruth",
      "chapters": 4,
      "testament": "old"
      
  },
  {
      "name": "1 Samuel",
      "chapters": 31,
      "testament": "old"
      
  },
  {
      "name": "2 Samuel",
      "chapters": 24,
      "testament": "old"
      
  },
  {
      "name": "1 Kings",
      "chapters": 22,
      "testament": "old"
      
  },
  {
      "name": "2 Kings",
      "chapters": 25,
      "testament": "old"
      
  },
  {
      "name": "1 Chronicles",
      "chapters": 29,
      "testament": "new"
      
  },
  {
      "name": "2 Chronicles",
      "chapters": 36,
      "testament": "new"
      
  },
  {
      "name": "Ezra",
      "chapters": 10,
      "testament": "new"
      
  },
  {
      "name": "Nehemiah",
      "chapters": 13,
      "testament": "old"
      
  },
  {
      "name": "Esther",
      "chapters": 10,
      "testament": "old"
      
  },
  {
      "name": "Job",
      "chapters": 42,
      "testament": "old"
      
  },
  {
      "name": "Psalms",
      "chapters": 150,
      "testament": "old"
      
  },
  {
      "name": "Proverbs",
      "chapters": 31,
      "testament": "new"
      
  },
  {
      "name": "Ecclesiastes",
      "chapters": 12,
      "testament": "old"
      
  },
  {
      "name": "Song of Solomon",
      "chapters": 8,
      "testament": "old"
      
  },
  {
      "name": "Isaiah",
      "chapters": 66,
      "testament": "old"
      
  },
  {
      "name": "Jeremiah",
      "chapters": 52,
      "testament": "old"
      
  },
  {
      "name": "Lamentations",
      "chapters": 5,
      "testament": "old"
      
  },
  {
      "name": "Ezekiel",
      "chapters": 48,
      "testament": "old"
      
  },
  {
      "name": "Daniel",
      "chapters": 12,
      "testament": "old"
      
  },
  {
      "name": "Hosea",
      "chapters": 14,
      "testament": "old"
      
  },
  {
      "name": "Joel",
      "chapters": 3,
      "testament": "old"
      
  },
  {
      "name": "Amos",
      "chapters": 9,
      "testament": "old"
      
  },
  {
      "name": "Obadiah",
      "chapters": 1,
      "testament": "old"
      
  },
  {
      "name": "Jonah",
      "chapters": 4,
      "testament": "old"
      
  },
  {
      "name": "Micah",
      "chapters": 7,
      "testament": "old"
      
  },
  {
      "name": "Nahum",
      "chapters": 3,
      "testament": "old"
      
  },
  {
      "name": "Habakkuk",
      "chapters": 3,
      "testament": "old"
      
  },
  {
      "name": "Zephaniah",
      "chapters": 3,
      "testament": "old"
      
  },
  {
      "name": "Haggai",
      "chapters": 2,
      "testament": "old"
      
  },
  {
      "name": "Zechariah",
      "chapters": 14,
      "testament": "old"
      
  },
  {
      "name": "Malachi",
      "chapters": 4,
      "testament": "old"
      
  },
  {
      "name": "Matthew",
      "chapters": 28,
      "testament": "new"
      
  },
  {
      "name": "Mark",
      "chapters": 16,
      "testament": "new"
      
  },
  {
      "name": "Luke",
      "chapters": 24,
      "testament": "new"
      
  },
  {
      "name": "John",
      "chapters": 21,
      "testament": "new"
      
  },
  {
      "name": "Acts",
      "chapters": 28,
      "testament": "new"
      
  },
  {
      "name": "Romans",
      "chapters": 16,
      "testament": "new"
      
  },
  {
      "name": "1 Corinthians",
      "chapters": 16,
      "testament": "new"
      
  },
  {
      "name": "2 Corinthians",
      "chapters": 13,
      "testament": "new"
      
  },
  {
      "name": "Galatians",
      "chapters": 6,
      "testament": "new"
      
  },
  {
      "name": "Ephesians",
      "chapters": 6,
      "testament": "new"
      
  },
  {
      "name": "Philippians",
      "chapters": 4,
      "testament": "new"
      
  },
  {
      "name": "Colossians",
      "chapters": 4,
      "testament": "new"
      
  },
  {
      "name": "1 Thessalonians",
      "chapters": 5,
      "testament": "new"
      
  },
  {
      "name": "1 Thessalonians",
      "chapters": 3,
      "testament": "new"
      
  },
  {
      "name": "1 Timothy",
      "chapters": 6,
      "testament": "new"
      
  },
  {
      "name": "2 Timothy",
      "chapters": 4,
      "testament": "new"
      
  },
  {
      "name": "Titus",
      "chapters": 3,
      "testament": "new"
      
  },
  {
      "name": "Philemon",
      "chapters": 1,
      "testament": "new"
      
  },
  {
      "name": "Hebrews",
      "chapters": 13,
      "testament": "new"
      
  },
  {
      "name": "James",
      "chapters": 5,
      "testament": "new"
      
  },
  {
      "name": "1 Peter",
      "chapters": 5,
      "testament": "new"
      
  },
  {
      "name": "2 Peter",
      "chapters": 3,
      "testament": "new"
      
  },
  {
      "name": "1 John",
      "chapters": 5,
      "testament": "new"
      
  },
  {
      "name": "2 John",
      "chapters": 1,
      "testament": "new"
      
  },
  {
      "name": "3 John",
      "chapters": 1,
      "testament": "new"
      
  },
  {
      "name": "Jude",
      "chapters": 1,
      "testament": "new"
      
  },
  {
      "name": "Revelation",
      "chapters": 22,
      "testament": "new"
      
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const booksContainer = document.getElementById("books");
  // 86400000 = 1 day

  if (!cookieExists('hasVisitedToday')) {
    const date = new Date();
    date.setTime(parseInt(date.getTime()) + 86400000);
    document.cookie = `hasVisitedToday=true; expires=${date.toUTCString()}`;

    if (!sessionStorage.getItem('books')) {
      const selectedBooks = [];
      for (let i = 1; i <= 6; i++) {
        const bookNumber = Math.floor(Math.random() * books.length);
        if (typeof books[bookNumber] !== 'undefined') {
          const bookData = books[bookNumber];
          const chapter = Math.floor(Math.random() * bookData.chapters) + 1;
          const chapterName = `${bookData.name} ${chapter}`;

          selectedBooks.push(chapterName);

          if (i === 6) {
            sessionStorage.setItem('books', selectedBooks);
          }
        }
      }
    }
  };

  if (sessionStorage.getItem('books')) {
    const cachedBooks = sessionStorage.getItem('books').split(',');

    if(Array.isArray(cachedBooks) && cachedBooks.length > 0) {
      cachedBooks.map(book => {
        const bookElement = document.createElement('a');
        bookElement.setAttribute("href", encodeURI(`https://www.biblegateway.com/passage/?search=${book}&version=NIV`));
        bookElement.setAttribute("target", "_blank");
        bookElement.classList.add("book");
        bookElement.innerHTML = `<h2>${book}</h2>`;
        booksContainer.appendChild(bookElement);
      });
    }
  }

  function cookieExists(name) {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)')); 
    return match ? true : false;
  }

  function getCookieValue(name) {
    const nameString = name + "="
  
    const value = document.cookie.split(";").filter(item => {
      return item.includes(nameString)
    })
  
    if (value.length) {
      return value[0].substring(nameString.length, value[0].length)
    } else {
      return ""
    }
  }
});
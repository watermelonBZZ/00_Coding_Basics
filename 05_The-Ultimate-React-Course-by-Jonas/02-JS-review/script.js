const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructing
// get multi data from  OBJECTS
const book = getBook(3);
book;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author);

// get multi data from  ARRAY
var [pg, sg] = genres;
console.log(pg, sg);

// RestSpread
var [pg, sg, ...otherG] = genres;
console.log(pg, sg, otherG);

// SpreadOperator
// ARRAY，注意区别
const newG = [genres, "epic fantasy"];
newG;

const newGenres = [...genres, "epic fantasy"];
newGenres;

// Objects
const updatedBook = {
  ...book,
  moviePubic: "2001-12-9",
  pages: 1000,
};
updatedBook;

// Arrow Functions(function expression)
// function declaration
const getYear = (str) => {
  return str.split("-")[0];
};
console.log(getYear(publicationDate));

// Template Literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and public in ${getYear(
  publicationDate
)}, it has ${hasMovieAdaptation ? "" : "not "}been adapted as a movie`;
summary;

// Ternary Operators
// as JSX does not accept if

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

// s1-21
// short circuiting

// &&
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// ||
console.log(true || "Some string");
console.log(false || "Some string");

// ??,只有第一个value为null和undefined时，才会返回第二个，不然都是第一个
console.log(undefined ?? null);
console.log(0 ?? null);

// falsy : 0, null, undefined, ''
console.log("jonas" && "Some string");
console.log(0 && "Some string");

// s1-20
// Arrow Functions(function expression)
// function declaration

// s1-22 optional chaining & ??
const goodreads = book.reviews?.librarything?.reviewsCount ?? 0;
goodreads;
*/

/*
// s1-23-26 functional array mehtods
const books = getBooks();
books;

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

// map
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// filter
const longBooksWithMovie = books
  .filter((book) => {
    return book.pages > 500;
  })
  .filter((book) => {
    return book.hasMovieAdaptation;
  });
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// reduce
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// sort, mutate the original array
const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b);
sorted;
arr;

const arr2 = [3, 7, 1, 9, 6];
const sorted2 = arr.slice().sort((a, b) => a - b);
sorted2;
arr2;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// s1-27
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);

*/

// s1-28
console.log(fetch("https://jsonplaceholder.typicode.com/todos"));

// 因为fetch的async特点，所以fetch和then会先put aside，直接先运行下面的命令
// 完成下面的命令后，再执行fetch这种

/*
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("bjj");
*/

// 这里的逻辑是一样的，因为是async fn，所以会先执行后面的
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();

// 这时，还没有处理promise，所以是pending
console.log(todos);

console.log("bjj");

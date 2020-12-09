"use sctrict";
// const result = confirm("are you hear?");
// console.log (result);

// const answer = +prompt('Вам есть 18?', '18');
// console.log(answer+5);


// const answers = []

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');
// document.write(answers);

// const category = 'toys';
// console.log(`http://yandex.com/${category}/5`);

// const user = 'Petr'
// alert(`Привет,${user}`);

// const chek = true,
//       chek2 = false;
//       console.log(chek&&!chek2);

const numberOfFilms = +prompt('Сколько фильмов вы уже посморели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');
      
      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);





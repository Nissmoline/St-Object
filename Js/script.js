/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
const numberOfFilms = prompt("How many Films did you see?", " "); 

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false, 
}; 

const question1 = prompt("What is the last film you have see?", " "),
      question2 = prompt("What is your assess?"), 
      question3 = prompt("What is the last film you have see?", " "),
      question4 = prompt("What is your assess?"," "); 

      personalMovieDB.movies[question1]= question2;
      personalMovieDB.movies[question3]= question4;
      console.log(personalMovieDB); 
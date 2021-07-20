/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

'use strict';
let numberOfFilms ;

function start(){
    numberOfFilms = +prompt("How many Films did you see?", " ");
    
    while (numberOfFilms == " " || numberOfFilms == null|| isNaN (numberOfFilms)) {
        numberOfFilms = +prompt("How many Films did you see?", " ");
      
    }
}
start(); 

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
}; 

for (let i =0; i<2; i++){
    const question1 = prompt("What is the last film you have see?", " "),
          question2 = prompt("What is your assess?", " ");
    
    if (question1 != null && question2 != null && question1 != " " && question2 != " " && question1.length< 50){
        personalMovieDB.movies[question1]=question2;  
        console.log("Done", " ");
    }else{
        console.log("Erro try again"," ");
        i--; 
    }
}  


    if(personalMovieDB.count < 10){
        console.log("Rather few films have been seen", " "); 
    }
    else if (personalMovieDB.count >=10 && personalMovieDB.count <30){
        console.log("You are a classic viewer", " ");
    }else if (personalMovieDB.count>=30) {
        console.log("You're a film buff.", " ");
    }else {
        console.log("Error please try agein ", " "); 
    }
console.log(personalMovieDB);

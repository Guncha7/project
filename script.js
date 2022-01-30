"use sctrict";
// let und = {
//     name: "Guncha",
//     age: 23,
//     ismarried: false
// }
// console.log(und["name"])
// let arr = ['guncha', 5, [], {}]
// console.log(arr[3])

// let hello = 5;
// const bay = 15;

// hello = 10;
// const obj = {
//     a:25
// };
// obj.a = 26;
// console.log(obj);


// const bat = +prompt('hi', '');
// console.log((bat + 5));

// const answers = [];
// answers[0] = prompt('adyn name','');
// answers[1] = prompt('familiyan name','');
// answers[2] = prompt('yasyn nace','');
// document.write(answers);

// const answers = [];
// console.log(typeof(answers));

// const category = 'toys';
// console.log('https://someurl.com/'+ category + '/' + '4');  

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const name = "Guncha";
// alert(`hello, ${name}`);


// console.log('arr' + " - object")
// console.log(8 +  +"9");

// let incr = 10, decr = 10;
// incr++;
// decr--;                           //prefix
// console.log(incr);
// console.log(decr);

// let incr = 10, decr = 10;
//  console.log(incr++);             //postfix
//  console.log(decr--);

// let incr = 10, decr = 10;
//  console.log(++incr); 
//  console.log(--decr);

// console.log(5%2);

//console.log(2*5 == 10);

// console.log(2*5 === '10');

// const isChecked = true,
//         isClose = false;
// console.log(isChecked && isClose);

// const isChecked = false,
//         isClose = false;
// console.log(isChecked || !isClose);

//console.log(2 * 5 + 3 !== '10');

////////////////////////////////////////// 1 Task
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

// const numberOfFilms = prompt('How many films did you watch?', '')

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('One of them?',''),
//       b = prompt('rate?',''),
//       c = prompt('One of them?',''),
//       d = prompt('rate?','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB); 
////////////////////////////////////////// 1 Task





// if(97 == 96){
//     console.log('Guncha');    
// }else{
//     console.log('den dal');
// }



// const num = 50;
// if(num < 49){
//     console.log('Error');
// }else if(num < 100){
//     console.log('A lot');
// } else {
//     console.log('ok')
// }





// const num = 50;
// (num === 50) ? console.log('OK') : console.log('baba');




// const num = 98;
// switch (num){
//     case 85:
//         console.log('error');
//         break;
//     case 97:
//         console.log('Point');
//         break;
//     default: 
//         console.log('next time');
//         break;        
// }




// let num = 50;
// while(num <= 55){
//     console.log(num);
//     num++;    
// }

// let num = 50;
// do{
//     console.log(num);
//     num++;
// }
// while(num < 55);

// let num = 50;
// for(let i=1; i<8; i++){
//     console.log(i);
//     num++;
// }


// for(let i=1; i<8; i++){
//     console.log(i);
// }

// for(let i=1; i<8; i++){
//     if(i === 6){
//         break;
//     }
// console.log(i); 
// }


// for(let i=1; i<8; i++){
//     if(i === 6){
//         continue;
//     }
// console.log(i); 
// }



// const numberOfFilms = +prompt('How many films did you watch?', '')

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('One of them?', ''),
//         b = prompt('rate?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 10) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if(personalMovieDB.count < 10){
// console.log('az kino gorupsin');
// }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log('Siz klassnyy zritel');
// }else if(personalMovieDB.count >= 30){
//     console.log("Siz kinoman");
// }else{
//     console.log('Error')
// }

// console.log(personalMovieDB); 




// let num = 10;
// function showFirstMessage(text){
//     console.log(text);
//     let num = 20;
//     console.log(num);
// }
// showFirstMessage("Hello world!");




// function calc(a,b){
//     return (a + b);
// }
// console.log(calc(4,5))





// function ret(){
//     let num = 97;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum)



// const prog = function(){
// console.log("Hello");
// };
// prog();



// const calc = (a, b) => {
//     return a + b;
// };
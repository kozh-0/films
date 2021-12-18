/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



const adds = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      bg = document.querySelector('.promo__bg'),
      list = document.querySelector('.promo__interactive-list'),
      listItems = document.querySelectorAll('.promo__interactive-item'),
      form = document.querySelector('form.add'),
      input = document.querySelector('.adding__input'),
      checkBox = document.querySelector('[type="checkbox"]');

console.log();

adds.forEach(item => item.remove());
genre.textContent = 'Драма';
bg.style.background = 'url(img/bg.jpg) center center/cover no-repeat';


function layout() {
    list.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((item, i) => {    
        list.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${item}
                <div class="delete"></div>
            </li>
        `;
    });
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentNode.remove();

            movieDB.movies.splice(i, 1);
            layout();
        });
    });
}
layout();



form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value.length >= 15) {
        input.value = `${input.value.slice(0, 15)}...`;
        movieDB.movies.push(input.value);
    } else {
        movieDB.movies.push(input.value);
    }

    if (checkBox.checked) {
        console.log('Добавлен любимый фильм!')
    }

    layout();
    form.reset();
});







/*list.addEventListener('click', (e) => {
    if (e.target && e.target.matches('.delete')) {
        e.target.parentNode.remove();
    }
});*/


